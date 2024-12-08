const {expect, test} = require('playwright/test');

test.use({ browserName: 'chromium' });


test("Demo tests", async({page, browser, context, request, browserName, baseURL}) => {
    console.log("page: "+page);
    console.log("browser: "+browser);
    console.log("context: "+context);
    console.log("request: "+request);
    console.log("browserName: "+browserName);
    console.log("baseURL: "+baseURL);
    console.log("in test");
//    await page.goto("https://demoqa.com/automation-practice-form");
    await page.goto("https://the-internet.herokuapp.com/");
    const linkPH = (linkName) => `text=${linkName}`;
    await page.locator(linkPH('Form Authentication')).highlight();
    await page.waitForTimeout(2323);
    await page.locator(linkPH('Form Authentication')).click();
//    await page.locator("text=Form Authentication").click();
    await page.locator('input[type="text"]').fill("admin");
    await page.locator('button[type="submit"]').click();
    await page.locator('input[type="text"]').fill("ADMIN");
    await page.locator('id=username').fill("userrnameaaeed");
    await page.locator('#username').fill("ADMINADMINADMIN");
    const flashMsg = await page.locator('.flash');
    await flashMsg.waitFor({state:'visible'});
    await expect(flashMsg).toBeVisible();
    let errorMsg = flashMsg.textContent();
    console.log("Screenshots/errorMsg: >"+errorMsg+"<");
    await expect(flashMsg).toHaveText(`
            Your username is invalid!
            ×
          `);
    await page.screenshot({ path: "Error Message.png", fullPage: true });
    await page.locator("[id='username']").fill("XXXXXX");
//    await page.pause();
    await page.goBack({waitUntil: 'load'});
    await page.goto("https://the-internet.herokuapp.com/");
    await page.waitForTimeout(10000);
    //using regex in finding the locator
    await expect(await page.locator('text=/.*ge & Deep.*/')).toBeVisible();
    await expect(await page.locator('text=/Large & Deep D.?M/i')).toBeVisible();
    await page.goBack({waitUntil: 'load'});
});

//test("Practice all locators in Playwright", async({page}) => {
//    console.log("in test");
//    await page.goto("https://www.google.com");
//    await page.goto("https://demoqa.com/automation-practice-form");
//});

