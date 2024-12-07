const {expect, test} = require('playwright/test');

test.use({ browserName: 'webkit' });


test("Demo tests", async({page, browser, context, request, browserName, baseURL}) => {
    console.log("page: "+page);
    console.log("browser: "+browser);
    console.log("context: "+context);
    console.log("request: "+request);
    console.log("browserName: "+browserName);
    console.log("baseURL: "+baseURL);
    console.log("in test");
    await page.goto("https://the-internet.herokuapp.com/");
});

//test("Practice all locators in Playwright", async({page}) => {
//    console.log("in test");
//    await page.goto("https://www.google.com");
//    await page.goto("https://demoqa.com/automation-practice-form");
//});

