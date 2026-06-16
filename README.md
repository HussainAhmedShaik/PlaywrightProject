# Playwright Automation Framework

This project is a Playwright test automation framework scaffold with:

- Playwright Test configuration in `playwright.config.js`
- Page Object Model under `pages/`
- Sample tests in `tests/`
- Reusable base page logic in `pages/BasePage.js`

## Getting started

1. Install dependencies:
   ```bash
   npm install
   ```
2. Run tests:
   ```bash
   npm test
   ```
3. Run headed tests:
   ```bash
   npm run test:headed
   ```
4. Open the HTML report after a run:
   ```bash
   npm run test:report
   ```

## Structure

- `pages/` - page object classes for reusable UI actions
- `tests/` - Playwright test files
- `playwright.config.js` - framework configuration

## Add a new test

- Add a new page object to `pages/`
- Add a test file in `tests/`
- Use `test.describe`, `test.beforeEach`, and `expect` for assertions
