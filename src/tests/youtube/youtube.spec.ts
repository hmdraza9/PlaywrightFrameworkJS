//youtube.spec.ts
import { test, expect } from '@playwright/test';
import { YoutubeClass } from '../../pages/youtube.page';
test('Navigate to YouTube', async ({ page }) => {
  await page.goto('https://www.youtube.com');
  const url = page.url();
  expect(url).toContain('youtube');
});
test('Search for Playwright', async ({ page }) => {
  await page.goto('https://www.youtube.com');
  let youtubetest = new YoutubeClass(page);
  await youtubetest.typeSearchText();
  await youtubetest.pressEnter();
  await youtubetest.searchResult();
});