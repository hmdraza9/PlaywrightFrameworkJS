const { test, expect, chromium } = require('@playwright/test');
const { UtilClass } = require('../../Utils/utils');



const getAllUsers = async (page) => {
    const response = await page.request.get('https://jsonplaceholder.typicode.com/users');
    return response.json();  // Returns a promise of User[].
};
const getAllTodos = async (page) => {
    const response = await page.request.get('https://jsonplaceholder.typicode.com/todos');
//    await page.pause();
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

test('Practice Promise in JS', async () => {
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
    const browser0 = await chromium.launch();
    const browser1 = await chromium.launch();
    const browser2 = await chromium.launch();
    const context0 = await browser0.newContext();
    const context1 = await browser1.newContext();
    const context2 = await browser2.newContext();
    const context3 = await browser2.newContext();

    const page0 = await context0.newPage();
    await page0.waitForTimeout(5000);
    const page1 = await context1.newPage();
    await page1.waitForTimeout(5000);
    const page2 = await context2.newPage();
    await page2.waitForTimeout(5000);
    const page3 = await context3.newPage();
    await page3.waitForTimeout(5000);

    await Promise.all([
         page0.goto('https://www.google.com/search?q=page0'),
         page1.goto('https://www.google.com/search?q=page1'),
         page2.goto('https://www.google.com/search?q=page2'),
         page3.goto('https://www.google.com/search?q=page3'),
         page0.screenshot({path: UtilClass.getCustomName("123", 1), fullPage: true}),
         page1.screenshot({path: UtilClass.getCustomName("234", 1), fullPage: true}),
         page2.screenshot({path: UtilClass.getCustomName("345", 3), fullPage: true}),
         page3.screenshot({path: UtilClass.getCustomName("456", 3), fullPage: true})
    ]);

    console.log('All pages loaded');

    await page0.close();
    console.log('Page 0 closed');
    await page1.close();
    console.log('Page 1 closed');
    await page2.close();
    console.log('Page 2 closed');
    await page3.close();
    console.log('Page 3 closed');

    await context0.close();
    console.log('context 0 closed');
    await context1.close();
    console.log('context 1 closed');
    await context2.close();
    console.log('context 2 closed');
    await browser1.close();
    console.log('browser 1 closed');
    await browser2.close();
    console.log('browser 2 closed');
});

 // Function to simulate printing numbers with a delay
 const printNumbers = async (id, limit) => {
     for (let i = 1; i <= limit; i++) {
         console.log(`Promise ${id} - Number: ${i}`);
        const randomDelay = Math.floor(Math.random() * (250 - 150 + 1)) + 150;
         await new Promise(resolve => setTimeout(resolve, randomDelay)); // Wait 200ms
     }
 };

  //Test method to run 3 promises concurrently
 test('Test multiple promises with concurrency', async () => {
     const promise1 = printNumbers(1, 4);
     const promise2 = printNumbers(2, 5);
     const promise3 = printNumbers(3, 4);

     // Using Promise.all to run all promises concurrently
     await Promise.all([promise1, promise2, promise3]);

     console.log('All promises completed');
 });

