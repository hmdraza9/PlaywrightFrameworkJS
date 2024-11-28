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
      await this.page.screenshot({ path: util.getCustomName("Google_", this.i++), fullPage: true });           //full screen snap
      await this.page.screenshot({ path: util.getCustomName("Google_viewPort_",this.i++), fullPage: false });
      const title = await this.page.locator("//title").textContent();

     await this.page.locator("textarea[name='q']").screenshot({ path: util.getCustomName("Google_Element_scr_", this.i++) }); //Element level screenshot

     //Mask sensitive info element, applies a strip of pink colour to element, that's it:
     await this.page.screenshot({
       path: util.getCustomName("Google_mask_", this.i++),
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