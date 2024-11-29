//google.spec.ts
import { test, expect } from '@playwright/test';
import { GoogleClass } from '../../pages/google.page';
import { chromium } from 'playwright';

let googletest: GoogleClass;

test.beforeEach(async ({page}) => {
  googletest = new GoogleClass(page);
})

test('Navigate to Google/Facebook', async ({ page }) => {
    const browser = await chromium.launch();
    const page1 = await browser.newPage();
    await page1.goto('https://www.facebook.com');
    const page2 = await browser.newPage();
    await page2.goto('https://www.facebook.com');
    console.log(page1.url());
  await page.goto('https://www.google.com');
  const url = page.url();
  expect(url).toContain('google');
  page.close();
});

test('Search for Playwright', async ({ page }) => {
  const searchTerm = "Playwright";
  await page.goto('https://www.google.com');
  await googletest.typeSearchText(searchTerm);
  await googletest.pressEnter();
  const text = await googletest.searchResult(searchTerm);
  console.log(text);
  expect(text).toContain('Playwright: Fast and reliable');
  page.close();
});

test('Take screenshots', async ({ page }) => {
  const searchTerm = "Playwright";
  await page.goto('https://www.google.com');
  await googletest.typeSearchText(searchTerm);
  await googletest.takeScreenshots();
});

