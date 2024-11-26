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
