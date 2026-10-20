import { test, expect } from '@playwright/test';

test.beforeEach(async ({ page }) => {
  await page.route('https://www.googletagmanager.com/**', route => route.abort());
  await page.route('https://*.google-analytics.com/**', route => route.abort());
});

test('desktop service navigation supports keyboard, dismissal and real destinations', async ({ page }) => {
  await page.setViewportSize({ width: 1440, height: 960 });
  await page.goto('/company/');
  await expect(page.locator('.nav-desktop a[aria-current="location"]')).toHaveText('Our firm');
  const summary = page.locator('.nav-disclosure summary');
  await summary.click();
  await expect(page.locator('.nav-mega')).toBeVisible();
  await page.keyboard.press('Tab');
  await expect(page.locator('.mega-heading a')).toBeFocused();
  await page.keyboard.press('Escape');
  await expect(page.locator('.nav-mega')).not.toBeVisible();
  await expect(summary).toBeFocused();
  await summary.click();
  await page.locator('.nav-shell').click({ position: { x: 200, y: 10 } });
  await expect(page.locator('.nav-mega')).not.toBeVisible();
  await summary.click();
  await page.locator('.mega-service-grid a[href="/services/roof-damage/"]').click();
  await expect(page).toHaveURL(/\/services\/roof-damage\/$/);
  await expect(page.locator('.nav-disclosure')).not.toHaveAttribute('open');
});

test('navigation remains usable through phone, tablet and desktop breakpoints', async ({ page }) => {
  for (const width of [320, 768, 999, 1000, 1200]) {
    await page.setViewportSize({ width, height: 900 });
    await page.goto('/company/');
    expect(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth + 1), String(width)).toBe(true);
    await expect(page.locator('.nav-review')).toBeVisible();
    if (width < 1000) {
      await page.getByRole('button', { name: 'Open navigation menu' }).click();
      await expect(page.locator('#mobile-menu a[aria-current="location"]')).toHaveText(/Our firm/);
      await page.keyboard.press('Escape');
      await expect(page.getByRole('button', { name: 'Open navigation menu' })).toBeFocused();
    } else {
      await expect(page.locator('.nav-desktop')).toBeVisible();
    }
  }
});

test('footer contact is direct and back to top returns to the document start', async ({ page }) => {
  await page.goto('/company/');
  await expect(page.locator('.footer-v2-email')).toHaveAttribute('href', 'mailto:home@allclaimguardians.com');
  await expect(page.locator('.footer-review-link')).toHaveAttribute('href', '/free-claim-review/');
  await page.getByRole('link', { name: 'Back to top' }).click();
  await expect(page).toHaveURL(/#site-top$/);
  expect(await page.evaluate(() => scrollY)).toBeLessThan(5);
});
