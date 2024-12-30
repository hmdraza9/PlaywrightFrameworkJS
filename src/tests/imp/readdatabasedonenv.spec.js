// Include playwright module
const { test, expect } = require('@playwright/test');
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
test.only('Read Test data based on different env in playwright ', async ({ page }) => {
    // Go to URL
    await page.goto(process.env.URL);

    // search with keywords
    await page.locator('#APjFqb').click();
    await page.keyboard.type('Hello, Playwright!', { delay: 50 }); // 100ms between keystrokes
    // await page.keyboard.down('Control');
    await page.keyboard.down('Meta');
    await page.keyboard.press('A'); // Simulates Ctrl + A
    await page.waitForTimeout(2333);
    await page.keyboard.press('C'); // Simulates Ctrl + C
    // await page.keyboard.up('Control');
    await page.keyboard.up('Meta');

    await page.locator('#APjFqb').fill(testData.skill1);
    await page.waitForTimeout(2333);
    await page.locator('#APjFqb').clear();
    await page.waitForTimeout(2333);
    await page.locator('#APjFqb').fill(testData.skill1);
    await page.waitForTimeout(2333);
    await page.locator('#APjFqb').press('Enter');
    await page.waitForTimeout(2333);})









