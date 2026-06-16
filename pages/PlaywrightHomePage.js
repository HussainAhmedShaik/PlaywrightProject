const { BasePage } = require('./BasePage');

class PlaywrightHomePage extends BasePage {
  constructor(page) {
    super(page);
    this.url = 'https://playwright.dev/';
    this.getStartedLink = page.getByRole('link', { name: 'Get started' });
    this.installationHeading = page.getByRole('heading', { name: 'Installation' });
  }

  async goto() {
    await super.goto(this.url);
  }

  async clickGetStarted() {
    await this.getStartedLink.click();
  }

  async expectInstallationHeading() {
    await this.waitForVisible(this.installationHeading);
  }
}

module.exports = { PlaywrightHomePage };