const {expect, test} = require('playwright/test');

test("hello", async({page}) => {
    console.log("in test");
    page.goto("https://www.google.com");
});

test("Practice all locators in Playwright", async({page}) => {
    console.log("in test");
    await page.goto("https://www.google.com");
    await page.goto("https://demoqa.com/automation-practice-form");
});

