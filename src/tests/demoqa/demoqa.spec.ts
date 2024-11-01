//amazon.spec.ts
import { test, expect } from '@playwright/test';
import { DemoQAClass } from '../../pages/demoqa.page';


test('Navigate to demoqa.com', async ({ page }) => {
  let demoqatest = new DemoQAClass(page);
  await page.goto('/');
  await page.goto('/automation-practice-form');
  demoqatest.navigateToPage(page)
});

test('Navigate to demoqa form practice page', async ({ page }) => {
  let demoqatest = new DemoQAClass(page);
  await page.goto('/');
  await page.goto('/automation-practice-form');
  demoqatest.navigateToPage(page)
});
