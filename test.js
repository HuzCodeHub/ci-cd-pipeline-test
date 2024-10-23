// Vulnerable JavaScript code

// Hardcoded credentials (vulnerability: sensitive data exposure)
const username = "admin";
const password = "password123"; // Bad practice: hardcoding passwords

// Using eval (vulnerability: possible code injection)
function runUserCode(userInput) {
    eval(userInput); // eval allows execution of arbitrary code, leading to security risks
}

// Insecure HTTP connection (vulnerability: insecure communication)
fetch('http://example.com/api/data') // Should use HTTPS instead of HTTP
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error('Error fetching data:', error));

// Lack of input validation (vulnerability: XSS and SQL injection)
function submitForm() {
    const userInput = document.getElementById('user-input').value;
    const query = `SELECT * FROM users WHERE name = '${userInput}'`; // Vulnerable to SQL injection
    console.log('Running query:', query);
}

// Usage of old, vulnerable libraries (example for Retire.js)
var express = require('express'); // If this is an old version, Retire.js will flag it

// Setting an insecure cookie (vulnerability: sensitive data exposure)
document.cookie = "sessionId=12345; path=/;"; // Missing 'secure' and 'HttpOnly' flags

// Insecure random number generation (vulnerability: weak cryptography)
function getRandomNumber() {
    return Math.random(); // Math.random() is not cryptographically secure
}

getRandomNumber();
