const { test, chromium } = require('@playwright/test');
const fs = require('fs'); // Import fs correctly
const path = require('path'); // Import path correctly
const XLSX = require('xlsx'); // Importing the xlsx library

// Log file path
console.log("__dirname: "+__dirname);
const logFilePath = path.join(__dirname, '../../../Logs/app.log');

// Custom logger
const logToFile = (message) => {
    const timestamp = new Date().toISOString();
    const logMessage = `${timestamp} - ${message}\n`;

    // Append log message to the file
    fs.appendFile(logFilePath, logMessage, (err) => {
        if (err) {
            console.error('Failed to write to log file', err);
        }
    });
};

// Function to read from an Excel file
const readFromExcel = (filePath) => {
    try {
        const workbook = XLSX.readFile(filePath);
        const sheetName = workbook.SheetNames[0];
        const sheet = workbook.Sheets[sheetName];
        const data = XLSX.utils.sheet_to_json(sheet, { header: 1 });
        return data;
    } catch (err) {
        console.error('Error reading Excel file:', err);
        logToFile(`Error reading Excel file: ${err.message}`);
        return [];
    }
};

// Function to write data to an Excel file
const writeToExcel = (data) => {
    try {
        const wb = XLSX.utils.book_new();
        const ws = XLSX.utils.aoa_to_sheet(data);
        XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');
        XLSX.writeFile(wb, path.join(process.cwd(), 'Data', 'output.xlsx'));
    } catch (err) {
        console.error('Error writing to Excel file:', err);
        logToFile(`Error writing to Excel file: ${err.message}`);
    }
};

test.beforeEach(async () => {
    console.log("I am in before each fixture");
    logToFile("I am in before each fixture");
});

test.afterEach(async () => {
    console.log("I am in after each fixture");
    logToFile("I am in after each fixture");
});

test.only("Open multiple contexts and pages", async () => {
    const browser = await chromium.launch(); // Launch the browser
    const context1 = await browser.newContext();
    const context2 = await browser.newContext();
    const page1 = await context1.newPage();
    const page2 = await context2.newPage();

    // Navigate both pages
    await page1.goto("http://www.google.com");
    await page2.goto("https://www.google.com/photos/about/");
    await page1.getByRole('button', { name: "I'm Feeling Lucky" }).click();

    console.log("Both pages navigated successfully!");
    logToFile("Both pages navigated successfully!");

    // Log attributes of page1 and browser
    const pageAttributes = Object.getOwnPropertyNames(Object.getPrototypeOf(page1));
    // console.log('Attributes and methods of page:', pageAttributes);
    logToFile(`Attributes and methods of page: ${JSON.stringify(pageAttributes)}`);

    const browserAttributes = Object.getOwnPropertyNames(Object.getPrototypeOf(browser));
    // console.log('Attributes and methods of browser:', browserAttributes);
    logToFile(`Attributes and methods of browser: ${JSON.stringify(browserAttributes)}`);

    await page1.close();
    await page2.close();
    await browser.close();
});

test('Read data from Excel', async () => {
    const filePath = path.join(process.cwd(), 'Data', 'output.xlsx');
    const data = readFromExcel(filePath);

    console.log('Data read from Excel:', data);
    logToFile(`Data read from Excel: ${JSON.stringify(data)}`);

    if (data.length > 1) {
        console.log('Data is valid');
        logToFile('Data is valid');
    } else {
        console.log('Data is invalid');
        logToFile('Data is invalid');
    }
});

test('Write data to Excel', async () => {
    const data = [
        ['ID', 'Name', 'Age'],
        [1, 'Alice', 30],
        [2, 'Bob', 25],
        [3, 'Charlie', 35],
    ];

    writeToExcel(data);
    console.log('Data written to Excel successfully!');
    logToFile('Data written to Excel successfully!');
});
