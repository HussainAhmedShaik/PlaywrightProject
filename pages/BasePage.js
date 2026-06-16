const { expect } = require('@playwright/test');

class BasePage {
  /**
   * @param {import('@playwright/test').Page} page
   */
  constructor(page) {
    this.page = page;
  }

  async goto(url) {
    await this.page.goto(url);
  }

  async waitForVisible(locator) {
    await expect(locator).toBeVisible();
  }
}

module.exports = { BasePage };