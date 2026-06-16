const { test, expect } = require('@playwright/test');
const { PlaywrightHomePage } = require('../pages/PlaywrightHomePage');

test.describe('Playwright home page', () => {
  test('loads home page and navigates to installation', async ({ page }) => {
    const homePage = new PlaywrightHomePage(page);
    await homePage.goto();
    await expect(page).toHaveTitle(/Playwright/);
    await homePage.clickGetStarted();
    await homePage.expectInstallationHeading();
  });
});