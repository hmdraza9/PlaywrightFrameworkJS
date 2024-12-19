const {expect, test} = require('@playwright/test');

test("Soft assertion test", async({page}) => {
    await page.goto("https://www.google.com");
    await expect.soft(page).toHaveTitle("testGoogle");
    await expect(page).toHaveTitle("Google");
    await page.locator('textarea[name="q"]').fill("Hello world");
    await page.keyboard.press('Enter');
    await page.locator('textarea[name="q"]').fill("Money Heist");
    await page.locator('textarea[name="q"]').press('Enter');
    await page.waitForTimeout(3000);
    await expect.soft(page).toHaveTitle("testGoogle");
    await expect(page).toHaveTitle("Money Heist - Google Search");
    await page.close();
});