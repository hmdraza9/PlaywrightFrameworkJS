//demoqa.spec.ts
import { test, expect } from '@playwright/test';
import { DemoQAClass } from '../../pages/demoqa.page';

// test('Open demo site', async ({ page }) => {
//   let demoqatest = new DemoQAClass(page);
//   await page.goto('https://demoqa.com');
//   await demoqatest.openDemoSite()
// });

// test('Navigate to form practice page', async ({ page }) => {
//   let demoqatest = new DemoQAClass(page);
//   await demoqatest.navigateFormPage();
// });

// test('Verify page URL', async ({ page }) => {
//   let demoqatest = new DemoQAClass(page);
//   await demoqatest.navigateFormPage();
//   await demoqatest.verifyURL();
// });

// test('Start fill form', async ({ page }) => {
//   let demoqatest = new DemoQAClass(page);
//   await demoqatest.navigateFormPage();
//   await demoqatest.fillForm();
// });

test('Execute progress bar', async ({ page }) => {
  let demoqatest = new DemoQAClass(page);
  await page.goto("https://demoqa.com/elements");
  await demoqatest.executeProgressBar();
  await demoqatest.selectStateCity();
});

test('Select element', async ({ page }) => {
  let demoqatest = new DemoQAClass(page);
  await page.goto("https://faridabad.dcourts.gov.in/case-status-search-by-case-number/");
  demoqatest.ddlFbdSite();
});
