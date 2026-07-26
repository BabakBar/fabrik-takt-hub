import AxeBuilder from '@axe-core/playwright';
import { expect, test } from '@playwright/test';

const localeCases = [
  { path: '/', language: 'en', direction: 'ltr', heading: 'factory data' },
  { path: '/de/', language: 'de', direction: 'ltr', heading: 'Aus Daten' },
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
  await page.goto('/capabilities/');
  await page.getByRole('banner').getByRole('link', { name: 'Approach' }).click();
  await expect(page).toHaveURL(/\/approach\/?$/);
  await expect(page.getByRole('heading', { level: 1 })).toContainText('From question to');
});

test('legacy prefixed English routes resolve to the canonical unprefixed URL', async ({ page }) => {
  await page.goto('/en/capabilities/?source=legacy');

  await expect(page).toHaveURL('/capabilities/?source=legacy');
  await expect(page.locator('html')).toHaveAttribute('lang', 'en');
});

test('an empty contact form cannot report success', async ({ page }) => {
  await page.goto('/contact/');
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
    'https://fabriktakt.com/de/capabilities/',
  );
  await expect(page.locator('link[rel="alternate"][hreflang="en"]')).toHaveAttribute(
    'href',
    'https://fabriktakt.com/capabilities/',
  );
  await expect(page.locator('link[rel="alternate"][hreflang="x-default"]')).toHaveAttribute(
    'href',
    'https://fabriktakt.com/capabilities/',
  );
});

test('localized typography uses the intended self-hosted font families', async ({ page }) => {
  await page.goto('/');
  await page.evaluate(() => document.fonts.ready);

  const latinTypography = await page.evaluate(() => {
    const heading = document.querySelector('h1');

    return {
      bodyFamily: getComputedStyle(document.body).fontFamily,
      headingWeight: heading ? Number(getComputedStyle(heading).fontWeight) : 0,
    };
  });

  expect(latinTypography.bodyFamily).toContain('Instrument Sans');
  expect(latinTypography.headingWeight).toBeLessThanOrEqual(560);

  await page.goto('/fa/');
  await page.evaluate(() => document.fonts.ready);

  const persianTypography = await page.evaluate(() => {
    const heading = document.querySelector('h1');

    return {
      bodyFamily: getComputedStyle(document.body).fontFamily,
      headingSpacing: heading ? getComputedStyle(heading).letterSpacing : '',
    };
  });

  expect(persianTypography.bodyFamily).toContain('Estedad');
  expect(persianTypography.headingSpacing).toBe('normal');
});

test('critical public routes have no serious accessibility violations', async ({ page }) => {
  for (const path of ['/', '/de/capabilities/', '/fa/contact/', '/privacy/']) {
    await page.goto(path);
    const results = await new AxeBuilder({ page }).analyze();

    expect(
      results.violations.filter(({ impact }) => impact === 'critical' || impact === 'serious'),
    ).toEqual([]);
  }
});

test('unknown routes render a localized noindex page', async ({ page }) => {
  await page.goto('/does-not-exist/');
  await expect(page.getByRole('heading', { level: 1 })).toHaveText('Page not found');
  await expect(page.getByText('404', { exact: true })).toBeVisible();
  await expect(page.locator('meta[name="robots"]')).toHaveAttribute('content', 'noindex, nofollow');
});
