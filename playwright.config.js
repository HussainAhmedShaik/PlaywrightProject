// @ts-check
const { defineConfig, devices } = require('@playwright/test');
//const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
const now = new Date();

const timestamp =
  `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, '0')}-${String(now.getDate()).padStart(2, '0')}_` +
  `${String(now.getHours()).padStart(2, '0')}-${String(now.getMinutes()).padStart(2, '0')}-${String(now.getSeconds()).padStart(2, '0')}`;

/**
 * @see https://playwright.dev/docs/test-configuration
 */
module.exports = defineConfig({
  testDir: './tests',

  timeout: 30 * 1000,

  expect: {
    timeout: 5000,
  },

  fullyParallel: true,

  forbidOnly: !!process.env.CI,

  retries: process.env.CI ? 2 : 0,

  workers: process.env.CI ? 1 : undefined,

  reporter: [
    ['list'],
    ['html', { 
      open: 'never', 
      outputFolder:`Test-report-${timestamp}`
    }],
  ],

  use: {
    trace: 'on-first-retry',
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',

    headless: false,

    // Required for maximizing
    viewport: null,

    launchOptions: {
      args: ['--start-maximized'],
    },
  },

  projects: [
    {
      name: 'chromium',
      use: {
        browserName: 'chromium',
        viewport: null,
      },
    },

    // {
    //   name: 'firefox',
    //   use: {
    //     browserName: 'firefox',
    //     viewport: null,
    //   },
    // },

    // {
    //   name: 'webkit',
    //   use: {
    //     browserName: 'webkit',
    //     viewport: {
    //       width: 1280,
    //       height: 720,
    //     },
    //   },
    // },
  ],
});

