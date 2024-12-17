const {expect, test: baseTest} = require('playwright/test');


const test = baseTest.extend({
    testData: async({}, use) => {
    const data = {
    username: 'admin',
    password: 'password',
    };
        await use(data);
    },
});

//extendedTest.use({ browserName: 'chromium' });

  test.beforeEach(async ({ page, testData }) => {
  console.log("Opening google.com");
  console.log("testData.username: "+testData.username);
  console.log("testData.password: "+testData.password);
    await page.goto('https://google.com');
  });


test("Demo tests", async({testData, page, browser, context, request, browserName, baseURL}) => {
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
    const flashMsg = page.locator('.flash');
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
    await expect(page.locator('text=/.*ge & Deep.*/')).toBeVisible();
    await expect(page.locator('text=/Large & Deep D.?M/i')).toBeVisible();
    await page.goBack({waitUntil: 'load'});
});

test("Mouse move/click", async ({page}) => {
  page.goto('https://www.google.com');
  // const googleLogo = await page.locator('textarea[name="q"]')
  await page.mouse.click(100, 300); // clicks the mouse to the coordinates (000, 100);
  await page.waitForTimeout(2222);
  await page.goto("https://the-internet.herokuapp.com/inputs");
  await page.locator("input[type='number']").fill("13123123213213123213321321332321312312323321312321323323");
  const elHandle = page.locator("input[type='number']");
  const box = await elHandle.boundingBox();
  await page.mouse.move(box.x, box.y);
  await page.mouse.click(box.x, box.y);
  await page.waitForTimeout(2222);
  await page.mouse.move(box.x + box.width/2, box.y + box.height/2);
  await page.mouse.click(box.x + box.width/2, box.y + box.height/2);
  await page.waitForTimeout(2222);
  await page.waitForTimeout(2222);
});

test.only("Mock response etc", async ({page}) =>{



  await page.route("**/users", async (route) => {

    const mockResponse = {
      status: 200,
      contentType: 'application/json',
      body: JSON.stringify({
        message: 'Mocked data',
        results: [1, 2, 3, 4],
      }),
    };
  await route.fulfill(mockResponse);
  });

  // Go to the test page
  await page.goto('https://jsonplaceholder.typicode.com/users');

  // Perform actions/assertions based on the mocked response
  const content = await page.locator('body').textContent();
  console.log("content: "+content);
  expect(content).toContain('Mocked data');

  await page.route('**/todaos', async (route) => { // change this to todos from todaos

    //****Simulate a network failure**** */

    await route.abort();
  });

  await page.goto("https://jsonplaceholder.typicode.com/todos");


  const response = await page.request.get('https://jsonplaceholder.typicode.com/users');
  const jsonResponse = await response.json();

  const jsonTextResponse = JSON.stringify(jsonResponse[0], null, 2);

  console.log(response.url());
  console.log(response.status());
  console.log(response.statusText());
  console.log((jsonTextResponse));

  });