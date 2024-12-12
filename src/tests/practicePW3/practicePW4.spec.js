const {expect, test} = require('playwright/test');


const extendedTest = test.extend({
    testData: async({}, use) => {
    const data = {
    username: 'admin',
    password: 'password',
    };
        await use(data);
    },
});

//extendedTest.use({ browserName: 'chromium' });

  extendedTest.beforeEach(async ({ page, testData }) => {
  console.log("Opening google.com");
  console.log("testData.username: "+testData.username);
  console.log("testData.password: "+testData.password);
    await page.goto('https://google.com/login');
  });


extendedTest("Demo tests", async({testData, page, browser, context, request, browserName, baseURL}) => {
  console.log("testData.username: "+testData.username);
  console.log("testData.password: "+testData.password);
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
    await page.locator("[id='username']").fill("MMMMMMM");
//    await page.pause();
    await page.goBack({waitUntil: 'load'});
    await page.goto("https://the-internet.herokuapp.com/");
    await page.waitForTimeout(10000);
    //using regex in finding the locator
    await expect(await page.locator('text=/.*ge & Deep.*/')).toBeVisible();
    await expect(await page.locator('text=/Large & Deep D.?M/i')).toBeVisible();
    await page.goBack({waitUntil: 'load'});

});