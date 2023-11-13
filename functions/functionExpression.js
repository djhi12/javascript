
// 
var myFunction = function (parameters) {
    // code to be executed
};


// Here's an example:
var greet = function (name) {
    console.log("Hello, " + name + "!");
};

greet("John"); // Output: Hello, John!


// Example Program
// Function expression to add two numbers
var add = function (a, b) {
    return a + b;
};

// Function expression to subtract two numbers
var subtract = function (a, b) {
    return a - b;
};

// Function expression to multiply two numbers
var multiply = function (a, b) {
    return a * b;
};

// Function expression to divide two numbers
var divide = function (a, b) {
    // Check if b is not zero to avoid division by zero
    if (b !== 0) {
        return a / b;
    } else {
        return "Cannot divide by zero!";
    }
};

// Example usage of the calculator functions
var num1 = 10;
var num2 = 5;

console.log("Addition: " + add(num1, num2));
console.log("Subtraction: " + subtract(num1, num2));
console.log("Multiplication: " + multiply(num1, num2));
console.log("Division: " + divide(num1, num2));
