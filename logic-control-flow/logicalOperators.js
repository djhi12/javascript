
// Logical AND (&&):
let x = true;
let y = false;

console.log(x && y); // Output: false


// Logical OR (||):
let a = true;
let b = false;

console.log(a || b); // Output: true


// Logical NOT (!):
let flag = true;

console.log(!flag); // Output: false


// Example with combined operators:
let a1 = true;
let b1 = false;
let c1 = true;

console.log((a1 && b1) || c1); // Output: true


// Example Program
// Authentication function
function authenticate(username, password) {
    // Sample valid credentials
    const validUsername = "user123";
    const validPassword = "pass456";

    // Check if both username and password are correct
    if (username === validUsername && password === validPassword) {
        return "Authentication successful!";
    } else if (username === validUsername) {
        return "Incorrect password!";
    } else if (password === validPassword) {
        return "Incorrect username!";
    } else {
        return "Invalid username and password combination.";
    }
}

// Example usage
let inputUsername = prompt("Enter your username:");
let inputPassword = prompt("Enter your password:");

let authenticationResult = authenticate(inputUsername, inputPassword);
console.log(authenticationResult);


