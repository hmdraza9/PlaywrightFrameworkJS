//amazon.page.ts
import { BrowserContext, expect, type Page } from  '@playwright/test';
export class AmazonClass{
    readonly page: Page
    constructor(page:Page){
        this.page=page
    }
    async typeSearchText(){
       await this.page.type('input[name="field-keywords"]',"iPhone")
    }
    async pressEnter(){
       await this.page.keyboard.press('Enter');
    }

    
    async takeScreenshot(page: Page, name: string){

      // Capture screenshot with a single timestamped filename
      const timestamp = Date.now();
      await page.screenshot({ path: `Screenshots/${name}_${timestamp}.png`, fullPage: true });
      console.log(`Screenshot saved as Amazon_${timestamp}.png`);
      }

    async searchResult(expAmazonTitle: string){
      await this.page.waitForLoadState();
      await this.page.locator('//h2[contains(text(),"Results")]').waitFor();
      this.takeScreenshot(this.page, "Amazon");
      await this.page.locator('//h2[contains(text(),"Results")]').textContent();
      


      // Check if the page title contains "Amazon"
      const title = await this.page.title();
      expect(title).toBe(expAmazonTitle);
      
    }
    async buyProduct(context: BrowserContext, product: string){

      function getProductCode(url: string) {
        // Use a regular expression to match the ASIN pattern after "/dp/"
        const match = url.match(/\/dp\/([A-Z0-9]{10})/);
        return match ? match[1] : null;
      }

      await this.page.waitForLoadState();
      const productLabelLocator = this.page.locator(`//h2/a/span[text()="${product}"]`);
      const productName = await productLabelLocator.textContent();
      console.log(productName);
      const productLink = this.page.locator(`//h2/a/span[text()="${product}"]/parent::a`);

      const [productPage] = await Promise.all([

          context.waitForEvent('page'), productLink.click()

      ]);


      await productPage.waitForLoadState();
      const prdTitle = await productPage.title();
      console.log("Product page title: "+prdTitle);
      const productPageUrl = productPage.url();
      console.log(`Page URL: ${productPageUrl}`);

      const productCode = getProductCode(productPageUrl);

      console.log(`Product code: ${productCode}`);

      await productPage.locator(`//div[@data-csa-c-asin='${productCode}']/i[contains(@class,'inactive')]`).click();
      
      await productPage.locator("span#productTitle").waitFor();

      const productLable = await productPage.locator("span#productTitle").textContent();

      console.log(`Product name: ${productLable}`);

      const deliveryInfo = await productPage.locator("div#deliveryBlockMessage").textContent();

      console.log(`Delivery info: ${deliveryInfo}`);
      await this.page.waitForTimeout(5000);
      const [productPage2] = await Promise.all([
        context.waitForEvent('page'), productLink.click()
    ]);
    await productPage.waitForTimeout(5000);
      await productPage.close();
      await this.page.waitForTimeout(5000);

      //close current page and go back to main page
      await productPage2.close();
      
      const productCount: number = (await this.page.locator('//h2/a/span[contains(text(),"Apple iPhone 13 (128GB) - ")]').all()).length;
      console.log("Count: "+productCount);

      let products = await this.page.locator('//h2/a/span[contains(text(),"Apple iPhone 13 (128GB) - ")]').all();
      let productsLabel: any = [];
      for(let product of products){
        let prName = await product.textContent();
        console.log("Product name: "+prName);
        productsLabel.push(prName);
      }

      console.log("Product names: "+productsLabel);

    }

    
}