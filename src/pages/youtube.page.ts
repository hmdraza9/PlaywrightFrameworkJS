//youtube.page.ts
import { expect, type Page } from  '@playwright/test';
export class YoutubeClass{
    readonly page: Page
    constructor(page:Page){
        this.page=page
    }
    async typeSearchText(){
       await this.page.type('input[id="search"]',"playwright")
    }
    async pressEnter(){
       await this.page.keyboard.press('Enter');
    }
    async searchResult(){
      this.page.waitForLoadState();
      const fileName = `Screenshots/YouTube_${Date.now()}.png`;
      await this.page.screenshot({ path: fileName, fullPage: true });
      console.log(`Screenshot saved as ${fileName}`);
      const title = await this.page.locator("//title").textContent();
      console.log(title);
      expect(title).toContain("YouTube");
    }
}