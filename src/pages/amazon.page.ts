//amazon.page.ts
import { expect, type Page } from  '@playwright/test';
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
    async searchResult(expAmazonTitle){
      await this.page.waitForLoadState();
      await this.page.locator('//h2[contains(text(),"Results")]').waitFor();
      await this.page.locator('//h2[contains(text(),"Results")]').textContent();
      
      // Capture screenshot with a single timestamped filename
      const timestamp = Date.now();
      await this.page.screenshot({ path: `Screenshots/Amazon_${timestamp}.png`, fullPage: true });
      console.log(`Screenshot saved as Amazon_${timestamp}.png`);

      // Check if the page title contains "Amazon"
      const title = await this.page.title();
      await expect(title).toBe(expAmazonTitle);
      
    }
}