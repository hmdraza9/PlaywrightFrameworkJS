//google.page.ts
import { expect, type Page } from  '@playwright/test';
export class GoogleClass{
    readonly page: Page
    constructor(page:Page){
        this.page=page
    }
    
    async typeSearchText(searchTerm){
       await this.page.type('textarea[name="q"]',searchTerm)
    }
    async pressEnter(){
       await this.page.keyboard.press('Enter');
    }
    async searchResult(searchTerm){
      this.page.waitForLoadState();
      const fileName = `Screenshots/Google_${Date.now()}.png`;
      await this.page.screenshot({ path: fileName, fullPage: true });
      console.log(`Screenshot saved as ${fileName}`);
      const title = await this.page.locator("//title").textContent();
      console.log(title);
      const expTitle = `${searchTerm} - Google Search`;
      expect(title).toContain(expTitle);
      return this.page.innerText('//h3[contains(text(),"Playwright:")]');
    }
}