// src/app.js

// Function to handle form submission
function submitForm() {
    // Get references to the username input, password input, and loginInfo div
    const usernameInput = document.getElementById('username');
    const passwordInput = document.getElementById('password');
    const loginInfo = document.getElementById('loginInfo');

    // Extract values from the input fields
    const username = usernameInput.value;
    const password = passwordInput.value;

    // Check if the username contains only letters and the password length is greater than 4
    if (/^[a-zA-Z]+$/.test(username) && password.length > 4) {
        // Display a success message if the conditions are met
        loginInfo.innerHTML = 'Login successful';
    } else {
        // Display a failure message if the conditions are not met
        loginInfo.innerHTML = 'Login failed';
    }
}
