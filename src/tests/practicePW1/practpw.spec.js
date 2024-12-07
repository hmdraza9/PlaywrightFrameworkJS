const { test, expect, chromium } = require('@playwright/test');
import { UtilClass } from '../../Utils/utils';
const XLSX = require('xlsx'); // Importing the xlsx library

const getAllUsers = async (page) => {
    const response = await page.request.get('https://jsonplaceholder.typicode.com/users');
    return response.json();  // Returns a promise of User[].
};
const getAllTodos = async (page) => {
    const response = await page.request.get('https://jsonplaceholder.typicode.com/todos');
    await page.pause();
    return response.json();  // Returns a promise of Todos[].
};

test('Execute API in PW', async ({ page }) => {

    const users = await getAllUsers(page);
    console.log("Users data:", users.length); // Logging users to check the response.
    const todos = await getAllTodos(page);
    console.log("Todos data:", todos.length); // Logging todos to check the response.

    //print todos where title contains 'commodi'
    let i=0;
    const keyWord = "commodi";
    while(i<todos.length){
        if(todos[i].title.includes(keyWord)){
            console.log(`Title with text '${keyWord}' `+todos[i].title);
            }
            i++;
        }
        i = 0;

    while(i<todos.length){
        if(todos[i].completed==true){
            console.log("Todo with completed = true: "+todos[i].title+", completed = "+todos[i].completed+", Task Id: "+todos[i].id);
            }
            i++;
        }
//    }

    // Example: Check that the users array has some data.
    expect(users.length).toBeGreaterThan(0); // Ensure users data is returned.

    console.log("ID: "+users[1].id);
    console.log("Name: "+users[1].name);
    console.log("User Name: "+users[1].username);
    console.log("Email: "+users[1].email);
    console.log("Street: "+users[1].address.street);
    console.log("Suite: "+users[1].address.suite);
    console.log("City: "+users[1].address.city);


});

test('Practice Promise in JS', async ({ page }) => {
    console.log("Start:", Date.now());

    const myPromise = new Promise((resolve, reject) => {
        setTimeout(() => {
            const success = false; // Change to true or false to test both paths
            if (success) {
                resolve("Task completed successfully!");
                console.log("Inside Promise: Task completed successfully!");
            } else {
                reject("Task failed");
                console.log("Inside Promise: Task failed!");
            }
        }, 7000);
    });

    try {
        const result = await myPromise; // Await the promise
        console.log(result); // Logs: "Task completed successfully!" after 2 seconds
    } catch (error) {
        console.error(error); // Logs: "Task failed" if rejected
    }

    console.log("End:  ", Date.now());
});


test('Concurrent page navigation', async () => {
    const browser = await chromium.launch();
    const context = await browser.newContext();

    const page1 = await context.newPage();
    const page2 = await context.newPage();
    const page3 = await context.newPage();

    await Promise.all([
        page1.goto('https://yahoo.com'),
        page2.goto('https://google.com'),
        page3.goto('https://bing.com'),
        page1.screenshot({path: "Screenshots/123.png", fullPage: true}),
        page2.screenshot({path: "Screenshots/234.png", fullPage: true}),
        page3.screenshot({path: "Screenshots/345.png", fullPage: true})
    ]);

    console.log('All pages loaded');
    await browser.close();
});

 // Function to simulate printing numbers with a delay
 const printNumbers = async (id) => {
     for (let i = 1; i <= 100; i++) {
         console.log(`Promise ${id} - Number: ${i}`);
        const randomDelay = Math.floor(Math.random() * (250 - 150 + 1)) + 150;
         await new Promise(resolve => setTimeout(resolve, randomDelay)); // Wait 200ms
     }
 };

 // Test method to run 3 promises concurrently
 test('Test multiple promises with concurrency', async () => {
     const promise1 = printNumbers(1);
     const promise2 = printNumbers(2);
     const promise3 = printNumbers(3);

     // Using Promise.all to run all promises concurrently
     await Promise.all([promise1, promise2, promise3]);

     console.log('All promises completed');
 });

