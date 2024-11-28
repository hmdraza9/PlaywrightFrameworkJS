//google.page.ts
import { expect, type Page } from  '@playwright/test';
import { UtilClass } from '../Utils/utils';
export class GoogleClass{
    readonly page: Page;
    private i: number = 1;
    constructor(page:Page){
        this.page=page
    }
    
    async typeSearchText(searchTerm: any){
       await this.page.type('textarea[name="q"]',searchTerm)
    }
    async pressEnter(){
       await this.page.keyboard.press('Enter');
    }
    async searchResult(searchTerm: any){
      let util = new UtilClass();
      this.page.waitForLoadState();
      let fileName = "";
      await this.page.screenshot({ path: util.getCustomName("Google", this.i++), fullPage: true });           //full screen snap
      fileName = `Screenshots/Google_${Date.now()+"_"+(this.i++)}.png`;   // no fullscreen snap
      await this.page.screenshot({ path: fileName, fullPage: false });
      console.log(`Screenshot saved as ${fileName}`);
      const title = await this.page.locator("//title").textContent();

     await this.page.locator("textarea[name='q']").screenshot({ path: `Screenshots/Google_${Date.now()+"_"+(this.i++)}.png` }); //Element level screenshot

     //Mask sensitive info element, applies a strip of pink colour to element, that's it:
     await this.page.screenshot({
       path: `Screenshots/Google_Masked_${Date.now()+"_"+(this.i++)}.png`,
       mask: [this.page.locator('textarea[name="q"]')]
     });



        // Controlled quality/size of screenshots
      await this.page.screenshot({
          path: util.getCustomName("Google_quality_1_",this.i++),
          quality: 1,
          type: 'jpeg'
       });

      await this.page.screenshot({
        path: util.getCustomName("Google_quality_33_",this.i++),
          quality: 33,
          type: 'jpeg'
       });

      await this.page.screenshot({
        path: util.getCustomName("Google_quality_66_",this.i++),
          quality: 66,
          type: 'jpeg'
       });

      await this.page.screenshot({
        path: util.getCustomName("Google_quality_100",this.i++),
          quality: 100,
          type: 'jpeg'
       });
     //waiting for 5000ms
      console.log("Start:"+Date.now());
      await this.page.waitForTimeout(5000);
      console.log("End:  "+Date.now());

      console.log(title);
      const expTitle = `${searchTerm} - Google Search`;
      expect(title).toContain(expTitle);
      return this.page.innerText('//h3[contains(text(),"Playwright:")]');

    }
}