const { test, expect } = require('@playwright/test');

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
