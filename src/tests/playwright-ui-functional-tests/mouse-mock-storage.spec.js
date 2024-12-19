const {expect, test} = require('playwright/test')

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
  
  test("Mock response etc", async ({page}) =>{
  
  
  
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
  
    test.only("storage state test", async ({browser}) => {
  
      const context = await browser.newContext();
      const page = await context.newPage();
  
    await test.step("Save auth state to file, storage state", async() =>{

      await page.goto('https://www.demo.guru99.com/V4/');
      await page.locator("//*[@name='uid']").fill("mngr603110");
      await page.locator("//*[@name='password']").fill("ujegere");
      await page.locator("//*[@name='btnLogin']").click();
  
      // Save the authentication state to a file
    await context.storageState({ path: 'AuthStorage/auth.json' });

    await page.close();
  
      });
  
    // test.use({storageState: 'AuthStorage/auth.json'});
  
    await test.step("Login from saves auth state", async () => {
  
      const newContext = await browser.newContext({storageState: 'AuthStorage/auth.json'});
      const newPage = await newContext.newPage();
      await newPage.goto('https://www.demo.guru99.com/V4/manager/Managerhomepage.php');
      const dashLabel = await newPage.locator('tr.heading3>td').textContent();
      expect(dashLabel).toBe('Manger Id : mngr603110');
  
    });
  });