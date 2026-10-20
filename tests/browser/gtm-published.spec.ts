import { test, expect } from '@playwright/test';

test('published GTM sends one page view, contact and confirmed lead without personal fields', async ({ page, request }) => {
  test.skip(process.env.GTM_VERIFY_PUBLISHED !== '1', 'Explicit verification of the published GTM container only');
  test.setTimeout(90000);
  const hits: URLSearchParams[] = [];
  let clarityLoads = 0;
  // Run the local build on its canonical origin. Analytics collection stays mocked.
  await page.route('**/*', async route => {
    const req = route.request(), url = new URL(req.url());
    if (url.hostname === 'allclaimguardians.com') {
      if (url.pathname === '/__forms.html') return route.fulfill({ status: 200, body: 'Received' });
      const local = await request.get('http://127.0.0.1:4321' + url.pathname + url.search);
      return route.fulfill({ response: local });
    }
    if (url.hostname.endsWith('google-analytics.com')) {
      if (url.pathname.endsWith('/collect')) {
        for (const line of (req.postData() || '').split('\n')) {
          const data = new URLSearchParams(url.search);
          new URLSearchParams(line).forEach((value, key) => data.set(key, value));
          hits.push(data);
        }
      }
      return route.fulfill({ status: 204 });
    }
    if (url.hostname.endsWith('clarity.ms')) {
      if (url.pathname.startsWith('/tag/z0pqzdcaeo')) clarityLoads++;
      return route.fulfill({ status: 200, contentType: 'application/javascript', body: '' });
    }
    if (url.hostname === 'www.googletagmanager.com') return route.continue();
    return route.abort();
  });
  const events = (name: string) => hits.filter(hit => hit.get('en') === name && hit.get('tid') === 'G-R0GH89D0MF');
  await page.goto('https://allclaimguardians.com/contact/');
  await expect.poll(() => events('page_view').length, { timeout: 20000 }).toBe(1);
  await expect.poll(() => clarityLoads).toBe(1);
  // Suppress opening a mail application while preserving the site's click listener.
  await page.locator('main a[href^="mailto:"]').first().evaluate(link => link.addEventListener('click', event => event.preventDefault()));
  await page.locator('main a[href^="mailto:"]').first().click();
  await expect.poll(() => events('contact_click').length, { timeout: 15000 }).toBe(1);
  expect(events('contact_click')[0].get('ep.contact_method')).toBe('email');
  await page.getByLabel('Full name').fill('Private verification');
  await page.getByLabel('Phone number').fill('2025550100');
  await page.getByLabel('Email address (optional)', { exact: true }).fill('private-verification@example.com');
  await page.getByLabel('Property state').selectOption('CA');
  await page.getByLabel('Damage type').selectOption('fire');
  await page.getByRole('button', { name: 'Request a free claim review →' }).click();
  await page.waitForURL('**/thank-you/');
  await expect.poll(() => events('generate_lead').length, { timeout: 20000 }).toBe(1);
  expect(events('generate_lead')[0].get('ep.lead_type')).toBe('contact');
  expect(events('generate_lead')[0].get('ep.form_page')).toBe('/contact/');
  expect(events('generate_lead')[0].get('ep.contact_method') || '').toBe('');
  const measured = hits.map(hit => hit.toString()).join('\n');
  for (const secret of ['private-verification', '2025550100', 'Private+verification']) expect(measured).not.toContain(secret);
  expect(events('page_view')).toHaveLength(2);
  await page.reload();
  await expect.poll(() => events('page_view').length, { timeout: 15000 }).toBe(3);
  expect(events('generate_lead')).toHaveLength(1);
});
