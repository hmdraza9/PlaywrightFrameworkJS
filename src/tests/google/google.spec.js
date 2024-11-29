// google.spec.js
const { test, expect } = require('@playwright/test');
const { GoogleClass } = require('../../pages/google.page');

let googleTest;

test.beforeEach(async ({ page }) => {
  // Initialize Google Class object before each test
  googleTest = new GoogleClass(page);
});

test('Navigate to Google', async ({ page }) => {
  await page.goto('https://www.google.com');
  const url = page.url();
  expect(url).toContain('google');
});

test('Search for Playwright', async ({ page }) => {
  const searchTerm = "Playwright";
  await page.goto('https://www.google.com');
  await googleTest.typeSearchText(searchTerm);
  await googleTest.pressEnter();
  const text = await googleTest.searchResult(searchTerm);
  console.log(text);
  expect(text).toContain('Playwright: Fast and reliable');
});

test('Take screenshots', async ({ page }) => {
  const searchTerm = "Playwright";
  await page.goto('https://www.google.com');
  await googleTest.typeSearchText(searchTerm);
  await googleTest.pressEnter();
  await googleTest.takeScreenshots();
});
