//google.page.ts
import { expect, type Page } from  '@playwright/test';
export class GoogleClass{
    readonly page: Page;
    private i: number = 0;
    constructor(page:Page){
        this.page=page
    }

    private getNumber(){
            this.i +=1;
            return this.i;
        }
    
    async typeSearchText(searchTerm){
       await this.page.type('textarea[name="q"]',searchTerm)
    }
    async pressEnter(){
       await this.page.keyboard.press('Enter');
    }
    async searchResult(searchTerm){
      this.page.waitForLoadState();
      let fileName = `Screenshots/Google_${Date.now()+"_"+this.getNumber()}.png`;
      await this.page.screenshot({ path: fileName, fullPage: true });           //full screen
      fileName = `Screenshots/Google_${Date.now()+"_"+this.getNumber()}.png`;   // no fullscreen
      await this.page.screenshot({ path: fileName, fullPage: false });
      console.log(`Screenshot saved as ${fileName}`);
      const title = await this.page.locator("//title").textContent();

     await this.page.locator("textarea[name='q']").screenshot({ path: `Screenshots/Google_${Date.now()+"_"+this.getNumber()}.png` }); //Element level screenshot

     //Mask sensitive info element, applies a strip of pink colour to element, that's it:
     await this.page.screenshot({
       path: `Screenshots/Google_Masked_${Date.now()+"_"+this.getNumber()}.png`,
       mask: [this.page.locator('textarea[name="q"]')]
     });
//
//      async getElementCount(): Promise<void> {
//          const elementCount: number = await this.page.locator('textarea[name="q"]').all().count();
//          console.log("Element count: " + elementCount);
//      }



        // Controlled quality/size of screenshots
      await this.page.screenshot({
          path: `Screenshots/Google_quality_1_${Date.now()+"_"+this.getNumber()}.png`,
          quality: 1,
          type: 'jpeg'
       });

      await this.page.screenshot({
          path: `Screenshots/Google_quality_33_${Date.now()+"_"+this.getNumber()}.png`,
          quality: 33,
          type: 'jpeg'
       });

      await this.page.screenshot({
          path: `Screenshots/Google_quality_66_${Date.now()+"_"+this.getNumber()}.png`,
          quality: 66,
          type: 'jpeg'
       });

      await this.page.screenshot({
          path: `Screenshots/Google_quality_100_${Date.now()+"_"+this.getNumber()}.png`,
          quality: 100,
          type: 'jpeg'
       });

      console.log(title);
      const expTitle = `${searchTerm} - Google Search`;
      expect(title).toContain(expTitle);
      return this.page.innerText('//h3[contains(text(),"Playwright:")]');
    }
}