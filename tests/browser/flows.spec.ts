import { test, expect } from '@playwright/test';

test.beforeEach(async ({ page }) => {
  // Local tests never send analytics or requests to production services.
  await page.route('https://www.googletagmanager.com/**', route => route.abort());
  await page.route('https://*.google-analytics.com/**', route => route.abort());
});

test('review keeps answers, changes property type and retries a failed submission', async ({ page }) => {
  await page.goto('/free-claim-review/');
  await page.getByLabel('Primary damage type').selectOption('roof');
  await page.getByLabel('Approximate date').fill('2026-10-01');
  await page.getByRole('button', { name: 'Next step' }).click();
  await page.getByRole('radio', { name: 'Commercial' }).check();
  await page.getByLabel('Property state').selectOption('NC');
  await page.getByLabel('Property ZIP code').fill('28202');
  await page.getByRole('button', { name: 'Back', exact: true }).click();
  await expect(page.getByLabel('Primary damage type')).toHaveValue('roof');
  await expect(page.getByLabel('Approximate date')).toHaveValue('2026-10-01');
  await page.getByRole('button', { name: 'Next step' }).click();
  await expect(page.getByRole('radio', { name: 'Commercial' })).toBeChecked();
  await expect(page.getByLabel('Property state')).toHaveValue('NC');
  await expect(page.getByLabel('Property ZIP code')).toHaveValue('28202');
  await page.getByRole('button', { name: 'Next step' }).click();
  await page.getByLabel('First name').fill('Test');
  await page.getByLabel('Last name').fill('Example');
  await page.getByLabel('Phone number').fill('2025550100');
  await page.getByLabel('Preferred language').selectOption('es');
  let body = '';
  let attempt = 0;
  await page.route('**/__forms.html', route => {
    body = route.request().postData() || '';
    attempt++;
    return route.fulfill({ status: attempt === 1 ? 503 : 200, contentType: 'text/html', body: 'Receipt' });
  });
  await page.getByRole('button', { name: 'Request a free claim review' }).click();
  await expect(page.getByRole('alert')).toContainText('could not confirm');
  await expect(page.getByLabel('First name')).toHaveValue('Test');
  await page.getByRole('button', { name: 'Request a free claim review' }).click();
  await expect(page).toHaveURL(/\/thank-you\/$/);
  const fields = new URLSearchParams(body);
  expect(Object.fromEntries(fields)).toMatchObject({ 'form-name': 'claim-review', damage_type: 'roof', loss_date: '2026-10-01', property_type: 'commercial', state: 'NC', zip_code: '28202', full_name: 'Test Example', preferred_language: 'es' });
});

test('resources search filters, clears, and cards target real sections', async ({ page }) => {
  await page.goto('/resources/');
  const search = page.getByRole('searchbox', { name: 'Search questions and guides' });
  await search.fill('zzzz-no-match');
  await expect(page.locator('#search-empty')).toBeVisible();
  await expect(page.locator('[data-search-item]:visible')).toHaveCount(0);
  await page.getByRole('button', { name: 'Show all resources' }).click();
  await expect(page.locator('[data-search-item]:visible')).toHaveCount(14);
  await search.fill('deductible');
  await expect(page.locator('#glossary')).toBeVisible();
  await expect(page.locator('[data-search-item]:visible')).toHaveCount(1);
  await page.getByRole('link', { name: /Claim Survival Guides/ }).click();
  await expect(page.locator('#claim-guide')).toBeVisible();
  await expect(search).toHaveValue('');
  await expect(page).toHaveURL(/#claim-guide$/);
});

test('mobile menu manages focus, Escape and layout', async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto('/');
  const open = page.getByRole('button', { name: 'Open navigation menu' });
  await open.click();
  await expect(page.getByRole('dialog', { name: 'Site navigation' })).toBeVisible();
  await expect(open).toHaveAttribute('aria-expanded', 'true');
  await expect(page.getByRole('button', { name: 'Close navigation menu' })).toBeFocused();
  await page.keyboard.press('Shift+Tab');
  await expect(page.locator('#mobile-menu a[href="tel:3058045489"]')).toBeFocused();
  await page.keyboard.press('Escape');
  await expect(open).toBeFocused();
  await expect(open).toHaveAttribute('aria-expanded', 'false');
  expect(await page.evaluate(() => document.documentElement.scrollWidth <= window.innerWidth)).toBe(true);
  await page.screenshot({ path: 'review-artifacts/home-mobile.png', fullPage: false });
});

test('claim preparation changes by damage type', async ({ page }) => {
  await page.goto('/');
  const select = page.getByRole('combobox', { name: 'Damage type', exact: true });
  await select.scrollIntoViewIfNeeded();
  await expect(page.locator('astro-island[component-url*="ClaimCalculator"]')).not.toHaveAttribute('ssr');
  await select.selectOption('denied');
  await expect(page.getByText('Your denial letter or settlement explanation', { exact: false })).toBeVisible();
  await expect(page.getByRole('button', { name: /Calculate/ })).toHaveCount(0);
  await page.setViewportSize({ width: 1440, height: 1000 });
  await page.goto('/');
  await page.screenshot({ path: 'review-artifacts/home-desktop.png', fullPage: false });
});

test('North Carolina form submits state and handles a disabled receiver', async ({ page }) => {
  await page.goto('/service-areas/north-carolina/');
  await page.getByLabel('Full name').fill('Test Example');
  await page.getByLabel('Phone number').fill('2025550100');
  await page.getByRole('combobox', { name: 'Damage type', exact: true }).selectOption('water');
  await page.route('**/__forms.html', async route => {
    expect(new URLSearchParams(route.request().postData() || '').get('state')).toBe('NC');
    await route.fulfill({ status: 200, contentType: 'text/html', body: '<body data-form-blueprint>Not processed</body>' });
  });
  await page.getByRole('button', { name: 'Request a free claim review' }).click();
  await expect(page.getByRole('alert')).toBeVisible();
  await expect(page).not.toHaveURL(/thank-you/);
  await expect(page.getByLabel('Full name')).toHaveValue('Test Example');
});

test('contact works without JavaScript and success stays out of search', async ({ browser, page }) => {
  const context = await browser.newContext({ javaScriptEnabled: false });
  const plain = await context.newPage();
  await plain.goto('http://127.0.0.1:4321/contact/');
  await expect(plain.getByLabel('Full name')).toBeVisible();
  await expect(plain.locator('form')).toHaveAttribute('method', 'POST');
  await expect(plain.locator('form')).toHaveAttribute('action', '/free-claim-review/thank-you/');
  await context.close();
  await page.goto('/free-claim-review/thank-you/');
  await expect(page.locator('meta[name="robots"]')).toHaveAttribute('content', 'noindex, follow');
  const sitemap = await page.request.get('/sitemap-0.xml');
  expect(await sitemap.text()).not.toContain('thank-you');
});
