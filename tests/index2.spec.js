// tests/index2.spec.js

// Test suite for index2.spec.js - 1
describe('index2.spec.js file test suite - 1', () => {
    let usernameInput, passwordInput, loginButton, loginInfo;

    // Set up before each test
    beforeEach(() => {
        // Set the HTML content for testing
        document.body.innerHTML = window.__html__['src/index.html'];

        // Get references to HTML elements
        usernameInput = document.getElementById('username');
        passwordInput = document.getElementById('password');
        loginButton = document.getElementById('loginButton');
        loginInfo = document.getElementById('loginInfo');
    });

    // Test case: Display "Login successful" for "user", "password123"
    it('Display "Login failed" for "user","password123"', () => {
        usernameInput.value = 'user';
        passwordInput.value = 'password123';

        loginButton.click();
        expect(loginInfo.innerHTML).toBe('Login failed');
    });

});

// Test suite for index2.spec.js - 2
describe('index2.spec.js file test suite - 2 (two)', () => {
    let usernameInput, passwordInput, loginButton, loginInfo;

    // Set up before each test
    beforeEach(() => {
        // Set the HTML content for testing
        document.body.innerHTML = window.__html__['src/index.html'];

        // Get references to HTML elements
        usernameInput = document.getElementById('username');
        passwordInput = document.getElementById('password');
        loginButton = document.getElementById('loginButton');
        loginInfo = document.getElementById('loginInfo');
    });

    // Test case: Display "Login successful" for "user","password123"
    it('Display "Login successful" for "user","password123"', () => {
        usernameInput.value = 'user';
        passwordInput.value = 'password123';

        loginButton.click();
        expect(loginInfo.innerHTML).toBe('Login successful');
    });

});
