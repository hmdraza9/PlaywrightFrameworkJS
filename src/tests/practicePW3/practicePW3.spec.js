const {expect, test} = require('playwright/test');

test.use({
    browserName: "chromium",
})

test.skip("Practice all locators in Playwright", async({page}) => {
   console.log("in test");
   await page.goto("https://www.google.com");
   await page.goto("https://demoqa.com/automation-practice-form");
});

test.only("Test file upload", async({page}) =>{
    await page.goto("https://commitquality.com/practice-file-upload");
    const handle = page.locator("input[type=file]");


    await handle.setInputFiles("/Users/hmdraza9/Documents/GitClones/PlaywrightFrameworkJS/README.md");
    page.once("dialog", (dialog) =>{
        console.log(dialog.message());
        dialog.accept();
    });

    await page.getByText('Submit').click();
});

test.skip("File downloading", async ({ page }) => {

    // Navigate to the page
    await page.goto("https://commitquality.com/practice-file-download");

    await page.waitForTimeout(3333);

    // Start waiting for the download event before triggering it
    const [download] = await Promise.all([
        page.waitForEvent("download"), // Wait for the download event
        page.locator("//button[text()='Download File']").click() // Trigger the download
    ]);
    await page.waitForTimeout(3333);

    // Save the downloaded file
    await download.saveAs("./Downloads/newFile-downloaded");
    await page.waitForTimeout(3333);
});
