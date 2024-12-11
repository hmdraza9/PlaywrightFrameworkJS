// amazon.spec.js
const { test, expect } = require('@playwright/test');
const { AmazonClass } = require('../../pages/amazon.page');

const product = "Apple iPhone 13 (128GB) - Midnight";

test.beforeEach(() => {
  console.log("Before test");
});

test.afterEach(() => {
  console.log("After test");
});

// test('Navigate to Amazon.in', async ({ page }) => {
//   await page.goto('https://amazon.in/');
//   const url = await page.url();
//   expect(url).toContain('amazon');
// });

// test(`Search for product - ${product}`, async ({ page }) => {
//   const expAmazonTitle = "Amazon.in : iPhone";
//   await page.goto('https://amazon.in/');
//   const amazonTest = new AmazonClass(page); // Use 'amazonTest' object
//   await amazonTest.typeSearchText(product); // Pass the product as a parameter
//   await amazonTest.pressEnter();
//   await amazonTest.searchResult(expAmazonTitle);
// });

test(`Buy iPhone - ${product}`, async ({ page, context }) => {
  const expAmazonTitle = "Amazon.in : iPhone";
  await page.goto('https://amazon.in/');
  const amazonTest = new AmazonClass(page);
  await amazonTest.typeSearchText(product);
  await amazonTest.pressEnter();
  await amazonTest.searchResult(expAmazonTitle);
  await amazonTest.buyProduct(context, product);
});
