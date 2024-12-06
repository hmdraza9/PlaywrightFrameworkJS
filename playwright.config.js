// playwright.config.js
const { defineConfig } = require('@playwright/test');

const config = defineConfig({
  use: {
    baseURL: process.env.BASE_URL || 'http://google.com', // Set the base URL for tests
    // Execute using this - 'BASE_URL=https://www.google.com npx playwright test google --headed'
    browserName: 'chromium',         // Use Chromium as the browser
    headless: true,                  // Run tests in headless mode
    video: 'on',                     // Record videos for all test failures
    screenshot: 'on',                // Take screenshots during test failures
    viewport: null,                  // Open the browser in fullscreen mode
  },
  reporter: [
    ['junit', { outputFile: 'results.xml' }], // JUnit report for CI/CD integration
    ['html', { open: 'never' }]               // HTML report with video support
  ],
  outputDir: 'test-results'                  // Set the directory for all test artifacts
});

module.exports = config;