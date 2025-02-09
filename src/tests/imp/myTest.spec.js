import {test, expect} from '@playwright/test'

test.beforeEach(async({page}) => {

    await page.goto('https://demo.playwright.dev/todomvc');
});


const TODO_items = [
    "buy some cheese",
    "feed the cat",
    "book a doctors appointment"
];

test.describe('New TODO', () => {

    test("should allow todo to be created", async({page}) =>{

        await page.getByPlaceholder('What needs to be done?').fill(TODO_items[0]);
        await page.waitForTimeout(3000);

        await page.getByPlaceholder('What needs to be done?').fill(TODO_items[1]);
        await page.waitForTimeout(3000);

        await page.getByPlaceholder('What needs to be done?').fill(TODO_items[2]);
        await page.waitForTimeout(3000);

    });

});