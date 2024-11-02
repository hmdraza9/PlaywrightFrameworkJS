//DemoQAClass.page.ts
import { expect, type Page } from  '@playwright/test';
export class DemoQAClass{
    readonly page: Page
    constructor(page:Page){
        this.page=page
    }


    async openDemoSite(){
      await this.page.goto('/');
      this.page.waitForLoadState();
      const url = this.page.url();
    }


    async navigateFormPage(){
      await this.page.goto('/automation-practice-form');
      this.page.waitForLoadState();
      const url = this.page.url();
    }


    async verifyURL(){
      await this.page.waitForLoadState();
      const url = this.page.url();
      expect(url).toContain('demoqa');
    }


    async fillForm(){

      await this.page.locator('//input[@id="firstName"]').fill("FName");
      await this.page.locator('input#lastName').fill("LName");
      await this.page.locator('input#userEmail').fill("abc@abc.com");
      await this.page.locator('input#userNumber').fill("8888888888");
      await this.page.locator('input#userEmail').fill("abc@abc.com");
      

      // const hobbyXpath = '//label[text()="Sports"]/preceding-sibling::input[@type="checkbox"]';
      await this.page.locator('//label[text()="Sports"]/preceding-sibling::input[@type="checkbox"]').waitFor({ state: 'visible' });
      
      // Attempt to click, forcing if necessary
      await this.page.locator('//label[text()="Sports"]/preceding-sibling::input[@type="checkbox"]').click({ force: true });
      await this.page.locator('//label[text()="Music"]/preceding-sibling::input[@type="checkbox"]').click({ force: true });
      await this.page.locator('//label[text()="Reading"]/preceding-sibling::input[@type="checkbox"]').click({ force: true });

    }

    
}