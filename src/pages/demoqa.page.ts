//DemoQAClass.page.ts
import { expect, type Page } from  '@playwright/test';
export class DemoQAClass{
    readonly page: Page
    constructor(page:Page){
        this.page=page
    }
    async navigateToPage(page){
      const url = page.url();
      expect(url).toContain('demoqa');    
    }

    
}