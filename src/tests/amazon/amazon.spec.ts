//amazon.spec.ts
import { test, expect } from '@playwright/test';
import { AmazonClass } from '../../pages/amazon.page';
test('Navigate to Amazon.in', async ({ page }) => {
  await page.goto('https://amazon.com/');
  const url = await page.url();
  expect(url).toContain('amazon');
});
test('Search for iPhone', async ({ page }) => {
  const expAmazonTitle = "Amazon.in : iPhone";
  await page.goto('https://amazon.in/');
  let amazontest = new AmazonClass(page);
  await amazontest.typeSearchText();
  await amazontest.pressEnter();
  await amazontest.searchResult(expAmazonTitle);
});