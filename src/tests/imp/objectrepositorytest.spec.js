// Import playwright module
const { test, expect } = require('@playwright/test');
import { Placeholder, Link } from '../../../objectrepository/globalselector.json';
import {Tab} from '../../../ExpectedResults/globalexpected.json';

// Write a test
test('Object Repository in Playwright', async ({ page }) => {
    // Go to URL
    await page.goto('https://www.youtube.com/');

    // Search with keywords
    await page.getByRole('combobox', { name: Placeholder.Search }).click();
    await page.getByRole('combobox', { name: Placeholder.Search }).fill('playwright by testers talk');

    await expect(page.getByRole('button', { name: Placeholder.Search, exact: true })).toBeEnabled();
    await page.getByRole('button', { name: Placeholder.Search, exact: true }).click();

    await page.waitForTimeout(2000);

    // Click on playlist
    await page.getByRole('link', { name: Link.Playwright }).first().click();

    // Validate title
    await expect(page).toHaveTitle(Tab.Title);
})