import { test, expect } from '@playwright/test';

test('every published page keeps the shared design, navigation and responsive layout', async ({ page }) => {
  test.setTimeout(180000);
  await page.route('https://www.googletagmanager.com/**', route => route.abort());
  await page.route('https://*.google-analytics.com/**', route => route.abort());
  const xml = await (await page.request.get('/sitemap-0.xml')).text();
  const paths = [...xml.matchAll(/<loc>(.*?)<\/loc>/g)].map(match => new URL(match[1]).pathname);
  paths.push('/404.html', '/free-claim-review/thank-you/');
  const errors: string[] = [];
  page.on('pageerror', error => errors.push(error.message));
  const samples = new Set(['/services/', '/services/water-damage/', '/service-areas/los-angeles/', '/service-areas/north-carolina/charlotte/', '/resources/', '/es/guia-reclamacion/', '/company/', '/contact/', '/free-claim-review/', '/privacy-policy/', '/404.html']);
  for (const width of [1440, 390]) {
    await page.setViewportSize({ width, height: 960 });
    for (const path of paths) {
      await page.goto(path);
      await expect(page.getByRole('heading', { level: 1 })).toHaveCount(1);
      await expect(page.getByRole('heading', { level: 1 })).toBeVisible();
      await expect(page.locator('main')).toHaveCount(1);
      await expect(page.locator('.site-header')).toHaveCount(1);
      await expect(page.locator('.editorial-footer')).toHaveCount(1);
      await expect(page.locator('script[src*="googletagmanager.com/gtag/js"]')).toHaveCount(1);
      await expect(page.locator('script[data-tracking="clarity"]')).toHaveCount(1);
      const layout = await page.evaluate(() => ({
        viewport: innerWidth,
        content: document.documentElement.scrollWidth,
        brokenImages: Array.from(document.images).filter(image => image.complete && image.naturalWidth === 0).map(image => image.getAttribute('src')),
      }));
      expect(layout.content, `${path} at ${width}px overflows`).toBeLessThanOrEqual(layout.viewport + 1);
      expect(layout.brokenImages, path).toEqual([]);
      if (samples.has(path)) {
        const name = path.replaceAll('/', '-').replace(/^-|-$/g, '').replace('.html', '') || 'home';
        await page.screenshot({ path: `review-artifacts/interior-${name}-${width}.png`, fullPage: false });
      }
    }
  }
  expect(errors).toEqual([]);
});
