// Include playwright module
const {test, expect} = require('@playwright/test');

// Write a test
test('Locators Test', async({page}) =>{

    // by role
    // Go to URL
    await page.goto('https://www.google.com/search?q=cypress+by+testers+talk');
    await page.getByRole('link',{name:'Images'}).click();

    // by label
    await page.goto('https://www.google.com/');
    await page.getByLabel('Search',{exact:true}).fill('api testing by testers talk');
    await page.getByLabel('Search',{exact:true}).press('Enter');

    // by alt text
    await page.goto('https://github.com/hmdraza9');
    await page.getByAltText("View hmdraza9's full-sized avatar").click();

    // by test id
    await page.goto('https://github.com/login');
    await page.locator('#login_field').fill('testers talk');


    // by text
    await page.goto('https://www.youtube.com/@testerstalk');
    await page.getByText('Cypress by Testers Talk').nth(1).click();

    // by title
    await page.goto('https://www.youtube.com/@testerstalk');
    await page.getByTitle('Cypress by Testers Talk').click();

    // // by xpath
    await page.goto('https://www.youtube.com/');
    await page.locator("//form/*[@name='search_query']").click();
    await page.locator("//form/*[@name='search_query']").fill('javascript by testers talk');
    await page.locator("//form/*[@name='search_query']").press('Enter');

    // // by css selector
    await page.goto('https://www.youtube.com/');
    await page.locator("form>[name='search_query']").click();
    await page.locator("form>[name='search_query']").fill('javascript by testers talk');
    await page.locator("form>[name='search_query']").press('Enter');

    await page.waitForTimeout(3000);

    
})

    