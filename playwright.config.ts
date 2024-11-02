import { PlaywrightTestConfig, defineConfig } from '@playwright/test';

const config: PlaywrightTestConfig = defineConfig({
  use: {
    baseURL: process.env.BASE_URL || 'http://google.com',       // Set the base URL for tests 'http://google.com/' or use process.env.BASE_URL, execute this to use 'process' - 'npm install --save-dev @types/node'
    //execute using this - 'BASE_URL=https:www.google.com npx playwright test google --headed'
    browserName: 'chromium',             // Use Chromium as the browser
    headless: true,                     // Run tests in headed mode
    video: 'on',           // Record videos only on test failures
    screenshot: 'on',
    viewport: null, // This will open the browser in fullscreen mode 
  },
  reporter: [
    ['junit', { outputFile: 'results.xml' }], // JUnit report for CI/CD integration
    ['html', { open: 'never' }]               // HTML report with video support
  ],
  outputDir: 'test-results'               // Set the directory for all test artifacts
});

export default config;
