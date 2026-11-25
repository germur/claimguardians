import { test, expect } from '@playwright/test';

test('GTM loads once on the public host and excludes local previews', async ({ page, request }) => {
  await page.route('https://www.googletagmanager.com/gtag/**', route => route.abort());
  await page.route('https://*.google-analytics.com/**', route => route.abort());
  let tagRequests = 0;
  await page.route('https://www.googletagmanager.com/gtm.js**', route => {
    tagRequests++;
    return route.fulfill({ contentType: 'application/javascript', body: '' });
  });
  await page.goto('/contact/');
  await expect(page.locator('script[data-tracking="gtm"]')).toHaveCount(1);
  await expect(page.locator('form[data-clarity-mask="True"]')).toHaveCount(1);
  expect(tagRequests).toBe(0);
  await page.goto('/free-claim-review/');
  await expect(page.locator('.review-flow[data-clarity-mask="True"]')).toHaveCount(1);
  const html = await (await request.get('/contact/')).text();
  const bootstrap = html.match(/<script[^>]*data-tracking="gtm"[^>]*>[\s\S]*?<\/script>/)?.[0];
  expect(bootstrap).toBeTruthy();
  // Execute the built bootstrap twice on the real hostname, with all network mocked.
  await page.route('https://allclaimguardians.com/tracking-verification/', route => route.fulfill({
    contentType: 'text/html', body: `<!doctype html><html><head>${bootstrap}${bootstrap}</head><body>Verification</body></html>`,
  }));
  await page.goto('https://allclaimguardians.com/tracking-verification/');
  await expect.poll(() => tagRequests).toBe(1);
  await expect(page.locator('script[src="https://www.googletagmanager.com/gtm.js?id=GTM-PC3TN25S"]')).toHaveCount(1);
  expect(await page.locator('script[src*="googletagmanager.com/gtm.js"]').evaluate((node: HTMLScriptElement) => node.async)).toBe(true);
});

test('staff opt-out persists, suppresses vendors and events, and can be reversed', async ({ page, request }) => {
  let tagRequests = 0;
  await page.route('https://www.googletagmanager.com/**', route => {
    tagRequests++;
    return route.fulfill({ contentType: 'application/javascript', body: '' });
  });
  await page.route('https://allclaimguardians.com/**', async route => {
    const url = new URL(route.request().url());
    if (url.pathname === '/favicon.png') return route.fulfill({ status: 204 });
    if (url.pathname === '/__forms.html' && route.request().method() === 'POST') return route.fulfill({ status: 200, body: 'Received' });
    const local = await request.get(url.pathname + url.search);
    return route.fulfill({ response: local });
  });
  await page.goto('https://allclaimguardians.com/contact/?cg_internal=1');
  await expect(page.getByLabel('Full name')).toBeVisible();
  expect(tagRequests).toBe(0);
  await expect(page.locator('script[data-gtm-container]')).toHaveCount(0);
  await page.locator('main a[href^="mailto:"]').first().evaluate(link => link.addEventListener('click', event => event.preventDefault()));
  await page.locator('main a[href^="mailto:"]').first().click();
  expect(await page.evaluate(() => ((window as any).dataLayer || []).length)).toBe(0);
  await page.getByLabel('Full name').fill('Internal verification');
  await page.getByLabel('Phone number').fill('2025550100');
  await page.getByLabel('Property state').selectOption('FL');
  await page.getByLabel('Damage type').selectOption('water');
  await page.getByRole('button', { name: 'Request a free claim review →' }).click();
  await page.waitForURL('**/thank-you/');
  expect(tagRequests).toBe(0);
  expect(await page.evaluate(() => ((window as any).dataLayer || []).length)).toBe(0);
  expect(await page.evaluate(() => sessionStorage.getItem('cg-confirmed-lead-event-v1'))).toBeNull();
  await page.goto('https://allclaimguardians.com/company/');
  await expect(page.locator('script[data-gtm-container]')).toHaveCount(0);
  expect(tagRequests).toBe(0);
  await page.goto('https://allclaimguardians.com/contact/?cg_internal=0');
  await expect(page.locator('script[data-gtm-container="GTM-PC3TN25S"]')).toHaveCount(1);
  await expect.poll(() => tagRequests).toBe(1);
});
