//DemoQAClass.page.ts
import { expect } from  '@playwright/test';
import { UtilClass } from '../Utils/utils';
export class DemoQAClass{
    page
    constructor(page){
        this.page=page
    }


    async openDemoSite(){
      this.page.waitForLoadState();
    }


    async navigateFormPage(){

      await this.page.goto('https://demoqa.com/automation-practice-form');
      await this.page.waitForLoadState();
      expect(await this.page).toHaveTitle("DEMOQA");
      const cityDDL = await this.page.locator('#city');
      console.log("cityDDL is Visible: "+(await cityDDL.isVisible()));
      console.log("cityDDL is Enabled: "+(await cityDDL.isEnabled()));
      await expect(cityDDL).toHaveText("Select City");
      await expect(cityDDL).toHaveCount(1);
      await expect(this.page).toHaveURL("https://demoqa.com/automation-practice-form");
      await expect(cityDDL).toBeEnabled();
      const dob = await this.page.locator('#dateOfBirthInput');
      await expect(dob).toHaveValue(UtilClass.getTodayDateddMMMyyyy());
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


    async executeProgressBar(){
      await this.page.waitForLoadState();
      const url = this.page.url();
      expect(url).toContain('demoqa');
      console.log(`Current URL: ${url}`);
      await this.page.locator("//*[text()='Widgets']/parent::*/parent::*").click();
      await this.page.locator("//*[text()='Progress Bar']/parent::*").click();
      await this.page.locator("button#startStopButton").click();
      await this.page.waitForTimeout(500);
      const progressPercElement = this.page.locator("div#progressBar>div");
      const progressPerc = await progressPercElement.getAttribute("aria-valuenow");
      console.log(`Progress percentage: ${progressPerc}`);

      for(let i=0;i<5;i++){

        await this.page.waitForTimeout(500);
        const progressPerc = await progressPercElement.getAttribute("aria-valuenow");
        const time = Date.now();
        console.log(`Progress percentage: ${progressPerc}, time: ${time}`);

      }

    }
    async selectStateCity(){
      await this.page.locator('div.accordion>div:nth-child(2)').click();
      await this.page.waitForLoadState();
      await this.page.locator('//span[text()="Practice Form"]').click();
      await this.page.waitForLoadState();
      const url = this.page.url();
      expect(url).toContain('demoqa');
      console.log(`Current URL: ${url}`);
      await this.page.locator('div#state').waitFor();
      await this.page.locator('div#state').click();
      await this.page.keyboard.type('NCR');
      await this.page.keyboard.press('Enter');
      await this.page.locator('div#city').waitFor();
      await this.page.locator('div#city').click();
      await this.page.keyboard.type('Delhi');
      await this.page.keyboard.press('Enter');
      await this.page.waitForLoadState();
      await this.page.locator('button#submit').click();
    }

    async ddlFbdSite(){

      await this.page.locator('select#est_code').waitFor();
      await this.page.locator('select#est_code').selectOption({ label: 'District Court, Faridabad' });
      await this.page.locator('select#est_code').selectOption({ label: 'Select Court Complex' });
      await this.page.locator('select#est_code').selectOption({ label: 'District Court, Faridabad' });
      await this.page.locator('select#est_code').selectOption({ label: 'Select Court Complex' });
      await this.page.locator('select#est_code').selectOption({ label: 'District Court, Faridabad' });

    }
    
}