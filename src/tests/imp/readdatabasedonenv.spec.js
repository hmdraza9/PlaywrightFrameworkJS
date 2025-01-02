// Include playwright module
const { test, expect } = require('@playwright/test');
const os = require('os');
import { qaTestData } from '../../../test-data/qa/google.json';
import { stageTestData } from '../../../test-data/stage/google.json';

let testData = null;

test.beforeAll('Running before all tests', () => {
    if (process.env.ENV == 'qa') {
        testData = qaTestData;
    } else {
        testData = stageTestData;
    }
})

// Write a test
test.only('Read Test data based on different env in playwright', async ({ page }) => {
    const platform = os.platform();
    let Control_Key;

    if (platform.toLowerCase().includes("darwin")) {
        Control_Key = "Meta";
    }

    if (platform.includes("windows")) {
        Control_Key = "Control";
    }

    // Go to URL
    await page.goto(process.env.URL);

    // search with keywords
    await page.locator('#APjFqb').click();
    await page.keyboard.type('Hello, Playwright!', { delay: 50 }); // 100ms between keystrokes
    await page.keyboard.down(Control_Key);
    await page.keyboard.press('A'); // Simulates Ctrl + A
    await page.waitForTimeout(2333);
    await page.keyboard.press('C'); // Simulates Ctrl + C
    await page.keyboard.up(Control_Key);

    await page.locator('#APjFqb').fill(testData.skill1);
    await page.waitForTimeout(2333);
    await page.locator('#APjFqb').clear();

    for (const char of 'Playwright') {
        await page.keyboard.press(char);
        await page.waitForTimeout(100); // 100ms delay between each key
    }
    await page.waitForTimeout(2333);
    await page.locator('#APjFqb').clear();

    await page.waitForTimeout(2333);
    await page.locator('#APjFqb').fill(testData.skill1);
    await page.waitForTimeout(2333);
    await page.locator('#APjFqb').press('Enter');
    await page.waitForTimeout(2333);
});
