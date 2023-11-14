
// 
function functionName(parameter1, parameter2, /* ... */) {
    // function body
    // You can use parameter1, parameter2, and other parameters here
}


// 
let argument1 = "";
let argument2 = "";
functionName(argument1, argument2, /* ... */);


// 
// Function with two parameters
function addNumbers(a, b) {
    return a + b;
}

// Calling the function with arguments
let result = addNumbers(3, 5);
console.log(result); // Output: 8

// 
function greet(name = "Guest") {
    console.log("Hello, " + name + "!");
}

greet();           // Output: Hello, Guest!
greet("John");     // Output: Hello, John!


// Example Program
// Function to calculate the area of a rectangle
function calculateRectangleArea(length, width) {
    return length * width;
}

// Function to display the result
function displayArea(length, width, area) {
    console.log("The area of a rectangle with length " + length + " and width " + width + " is: " + area);
}

// Calling the functions
let rectangleLength = 5;
let rectangleWidth = 8;

let area = calculateRectangleArea(rectangleLength, rectangleWidth);

displayArea(rectangleLength, rectangleWidth, area);
