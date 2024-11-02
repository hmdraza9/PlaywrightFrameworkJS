//google.spec.ts
import { test, expect } from '@playwright/test';
import { GoogleClass } from '../../pages/google.page';
test('Navigate to Google', async ({ page }) => {
  await page.goto('/');
  const url = await page.url();
  expect(url).toContain('google');
});
test('Search for Playwright', async ({ page }) => {
  const searchTerm = "Playwright";
  await page.goto('/');
  let googletest = new GoogleClass(page);
  await googletest.typeSearchText(searchTerm);
  await googletest.pressEnter();
  const text = await googletest.searchResult(searchTerm);
  console.log(text);
  expect(text).toContain('Playwright: Fast and reliable');
});