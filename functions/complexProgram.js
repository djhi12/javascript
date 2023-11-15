/*
In this program:

calculateRectangleArea is a function declared with the function keyword.

calculateRectanglePerimeter is a function expression assigned to a variable.

calculateCircleArea is an arrow function.

The main function is the entry point of the program, where we define parameters, call functions, and output results.

This example showcases various ways to define functions and demonstrates their usage in a simple program. Feel free to modify and expand upon it based on your needs! 
 */

// Function Declaration
function calculateRectangleArea(width, height) {
    return width * height;
}

// Function Expression
const calculateRectanglePerimeter = function (width, height) {
    return 2 * (width + height);
};

// Arrow Function
const calculateCircleArea = (radius) => Math.PI * radius ** 2;

// Main Program
function main() {
    // Parameters
    const rectangleWidth = 5;
    const rectangleHeight = 10;
    const circleRadius = 7;

    // Function Calls
    const rectangleArea = calculateRectangleArea(rectangleWidth, rectangleHeight);
    const rectanglePerimeter = calculateRectanglePerimeter(rectangleWidth, rectangleHeight);
    const circleArea = calculateCircleArea(circleRadius);

    // Output Results
    console.log("Rectangle Area:", rectangleArea);
    console.log("Rectangle Perimeter:", rectanglePerimeter);
    console.log("Circle Area:", circleArea);
}

// Execute the program
main();
