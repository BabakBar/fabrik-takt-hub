import AxeBuilder from '@axe-core/playwright';
import { expect, test } from '@playwright/test';

const localeCases = [
  { path: '/', language: 'de', direction: 'ltr', heading: 'Aus Daten' },
  { path: '/en/', language: 'en', direction: 'ltr', heading: 'factory data' },
  { path: '/fa/', language: 'fa', direction: 'rtl', heading: 'داده‌های کارخانه' },
] as const;

for (const localeCase of localeCases) {
  test(`${localeCase.language} homepage is localized and fits the viewport`, async ({ page }) => {
    await page.setViewportSize({ width: 320, height: 844 });
    await page.goto(localeCase.path);

    await expect(page.locator('html')).toHaveAttribute('lang', localeCase.language);
    await expect(page.locator('html')).toHaveAttribute('dir', localeCase.direction);
    await expect(page.getByRole('heading', { level: 1 })).toContainText(localeCase.heading);

    const dimensions = await page.evaluate(() => ({
      viewport: document.documentElement.clientWidth,
      content: document.documentElement.scrollWidth,
    }));
    expect(dimensions.content).toBeLessThanOrEqual(dimensions.viewport);
  });
}

test('primary navigation works from a secondary route', async ({ page }) => {
  await page.goto('/en/capabilities/');
  await page.getByRole('banner').getByRole('link', { name: 'Approach' }).click();
  await expect(page).toHaveURL(/\/en\/approach\/?$/);
  await expect(page.getByRole('heading', { level: 1 })).toContainText('From question to');
});

test('an empty contact form cannot report success', async ({ page }) => {
  await page.goto('/en/contact/');
  await page.getByRole('button', { name: 'Send project brief' }).click();

  await expect(page.getByText('Message received')).toHaveCount(0);
  await expect(page.locator('#name')).toBeFocused();
});

test('pages expose canonical and localized alternates', async ({ page }) => {
  await page.goto('/fa/capabilities/');

  await expect(page.locator('link[rel="canonical"]')).toHaveAttribute(
    'href',
    'https://fabriktakt.com/fa/capabilities/',
  );
  await expect(page.locator('link[rel="alternate"][hreflang="de"]')).toHaveAttribute(
    'href',
    'https://fabriktakt.com/capabilities/',
  );
});

test('critical public routes have no serious accessibility violations', async ({ page }) => {
  for (const path of ['/', '/en/capabilities/', '/fa/contact/', '/privacy/']) {
    await page.goto(path);
    const results = await new AxeBuilder({ page }).analyze();

    expect(
      results.violations.filter(({ impact }) => impact === 'critical' || impact === 'serious'),
    ).toEqual([]);
  }
});

test('unknown routes render a localized noindex page', async ({ page }) => {
  await page.goto('/en/does-not-exist/');
  await expect(page.getByRole('heading', { level: 1 })).toHaveText('Page not found');
  await expect(page.getByText('404', { exact: true })).toBeVisible();
  await expect(page.locator('meta[name="robots"]')).toHaveAttribute('content', 'noindex, nofollow');
});
