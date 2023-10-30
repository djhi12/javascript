
//
let name = "John";
console.log(typeof name); // Outputs "string"

let age = 30;
console.log(typeof age); // Outputs "number"


// Example Program
// Prompt the user for the length and width of a rectangle
let length = prompt("Enter the length of the rectangle:"); // Input is a string
let width = prompt("Enter the width of the rectangle:");   // Input is a string

// Convert the user input (strings) to numbers using parseFloat
length = parseFloat(length);
width = parseFloat(width);

// Check if the conversion was successful and the values are valid numbers
if (isNaN(length) || isNaN(width)) {
    console.log("Invalid input. Please enter valid numbers for length and width.");
} else {
    // Calculate the area of the rectangle
    let area = length * width;

    // Display the result to the user
    console.log("The area of the rectangle is: " + area);
}
