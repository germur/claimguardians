import { test, expect } from '@playwright/test';

test('Clarity loads once on the public host and excludes local previews', async ({ page, request }) => {
  await page.route('https://www.googletagmanager.com/**', route => route.abort());
  await page.route('https://*.google-analytics.com/**', route => route.abort());
  let tagRequests = 0;
  await page.route('https://www.clarity.ms/**', route => {
    tagRequests++;
    return route.fulfill({ contentType: 'application/javascript', body: '' });
  });
  await page.goto('/contact/');
  await expect(page.locator('script[data-tracking="clarity"]')).toHaveCount(1);
  await expect(page.locator('form[data-clarity-mask="True"]')).toHaveCount(1);
  expect(tagRequests).toBe(0);
  await page.goto('/free-claim-review/');
  await expect(page.locator('.review-flow[data-clarity-mask="True"]')).toHaveCount(1);
  const html = await (await request.get('/contact/')).text();
  const bootstrap = html.match(/<script[^>]*data-tracking="clarity"[^>]*>[\s\S]*?<\/script>/)?.[0];
  expect(bootstrap).toBeTruthy();
  // Execute the built bootstrap twice on the real hostname, with all network mocked.
  await page.route('https://allclaimguardians.com/tracking-verification/', route => route.fulfill({
    contentType: 'text/html', body: `<!doctype html><html><head>${bootstrap}${bootstrap}</head><body>Verification</body></html>`,
  }));
  await page.goto('https://allclaimguardians.com/tracking-verification/');
  await expect.poll(() => tagRequests).toBe(1);
  await expect(page.locator('script[src="https://www.clarity.ms/tag/z0pqzdcaeo?ref=bwt"]')).toHaveCount(1);
  expect(await page.locator('script[src*="clarity.ms/tag/"]').evaluate((node: HTMLScriptElement) => node.async)).toBe(true);
});
