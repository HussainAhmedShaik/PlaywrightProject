// const { test, expect } = require('@playwright/test');

// test('First Playwright smoke test', async ({ page }) => {
//   await page.goto('https://playwright.dev/');
//   await expect(page).toHaveTitle(/Playwright/);
// });

const {test,expect} = require('@playwright/test');

test('Browser Context Playwright test',async ({browser})=>{

  const context = await browser.newContext();
  const page = await context.newPage();
  await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
});

