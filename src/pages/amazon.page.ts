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
    async searchResult(expAmazonTitle: String){
      await this.page.waitForLoadState();
      await this.page.locator('//h2[contains(text(),"Results")]').waitFor();
      await this.page.locator('//h2[contains(text(),"Results")]').textContent();
      
      // Capture screenshot with a single timestamped filename
      const timestamp = Date.now();
      await this.page.screenshot({ path: `Screenshots/Amazon_${timestamp}.png`, fullPage: true });
      // console.log(`Screenshot saved as Amazon_${timestamp}.png`);

      // Check if the page title contains "Amazon"
      const title = await this.page.title();
      expect(title).toBe(expAmazonTitle);
      
    }
    async buyProduct(context: BrowserContext, product: string){

      function getProductCode(url) {
        // Use a regular expression to match the ASIN pattern after "/dp/"
        const match = url.match(/\/dp\/([A-Z0-9]{10})/);
        return match ? match[1] : null;
      }
      

      await this.page.waitForLoadState();
      const productLabelLocator = this.page.locator(`//h2/a/span[text()="${product}"]`);
      const productName = await productLabelLocator.textContent();
      // console.log(productName);
      const productLink = this.page.locator(`//h2/a/span[text()="${product}"]/parent::a`);
      // console.log(await productLink.getAttribute('href'));

      const [newPage] = await Promise.all([

          context.waitForEvent('page'), productLink.click()

      ]);

      await newPage.waitForLoadState();
      
      console.log(await newPage.title());
      const newPageUrl = newPage.url();
      console.log(`Page URL: ${newPageUrl}`);

      const productCode = getProductCode(newPageUrl);

      console.log(`Product code: ${productCode}`);

      await newPage.locator(`//div[@data-csa-c-asin='${productCode}']/i[contains(@class,'inactive')]`).click();
      
      await newPage.locator("span#productTitle").waitFor();

      const productLable = newPage.locator("span#productTitle");

      console.log(productLable.textContent());

    }

    
}