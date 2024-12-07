const { test, expect, chromium } = require('@playwright/test');
import { UtilClass } from '../../Utils/utils';
const XLSX = require('xlsx'); // Importing the xlsx library

//const readFromExcel = (filePath) => {
//    // Read the Excel file
//    const workbook = XLSX.readFile(filePath);
//
//    // Get the first sheet's name (default is 'Sheet1')
//    const sheetName = workbook.SheetNames[0];
//
//    // Get the sheet
//    const sheet = workbook.Sheets[sheetName];
//
//    // Convert the sheet to JSON
//    const data = XLSX.utils.sheet_to_json(sheet, { header: 1 });
//
//    return data;
//};


test("Open multiple contexts and pages", async () => {
    // Launch the browser
    const browser = await chromium.launch({ headless: false }); // Set headless to false for debugging

    // Create two browser contexts
    const context1 = await browser.newContext();
    const context2 = await browser.newContext();

    // Create pages in each context
    const page1 = await context1.newPage();
    const page2 = await context2.newPage();

    // Navigate both pages to Google
    await page1.goto("http://www.google.com");
    await page2.goto("http://www.google.com");

    // Add any assertions or interactions here
    console.log("Both pages navigated successfully!");

//    page1.close();

    // Close the browser after actions are complete
//    await browser.close();
});


//test('Read data from Excel', async () => {
//    // Path to the Excel file you want to read
//    const filePath = 'output.xlsx';  // Assuming the Excel file was saved as 'output.xlsx'
//
//    // Read data from Excel
//    const data = readFromExcel(filePath);
//
//    // Log the data
//    console.log('Data read from Excel:', data);
//
//    // Example assertion: check that data has rows
//    if (data.length > 1) {
//        console.log('Data is valid');
//    } else {
//        console.log('Data is invalid');
//    }
//});
//
//// Function to write data to Excel
//const writeToExcel = (data) => {
//    // Create a new workbook
//    const wb = XLSX.utils.book_new();
//
//    // Convert data to a worksheet
//    const ws = XLSX.utils.aoa_to_sheet(data);
//
//    // Append the worksheet to the workbook
//    XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');
//
//    // Write the workbook to a file
//    XLSX.writeFile(wb, 'output.xlsx');
//};
//
//test('Write data to Excel', async () => {
//    // Sample data to write to Excel
//    const data = [
//        ['ID', 'Name', 'Age'],
//        [1, 'Alice', 30],
//        [2, 'Bob', 25],
//        [3, 'Charlie', 35],
//    ];
//
//    // Write data to Excel
//    writeToExcel(data);
//
//    console.log('Data written to Excel successfully!');
//});