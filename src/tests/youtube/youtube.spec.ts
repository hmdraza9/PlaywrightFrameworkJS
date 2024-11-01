//youtube.spec.ts
import { test, expect } from '@playwright/test';
import { YoutubeClass } from '../../pages/youtube.page';
test('Navigate to YouTube', async ({ page }) => {
  await page.goto('/');
  const url = await page.url();
  expect(url).toContain('google');
});
test('Search for Playwright', async ({ page }) => {
  await page.goto('/');
  let youtubetest = new YoutubeClass(page);
  await youtubetest.typeSearchText();
  await youtubetest.pressEnter();
  await youtubetest.searchResult();
});