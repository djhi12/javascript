
// 
function myFunction(parameter1, parameter2) {
    // Function logic here

    // Use the return statement to specify the value to be returned
    return someValue;
}


// Here's a simple example:
function addNumbers(a, b) {
    var sum = a + b;
    return sum;
}

var result = addNumbers(3, 5);
console.log(result); // Output: 8


// 
function absoluteValue(number) {
    if (number < 0) {
        return -number;
    } else {
        return number;
    }
}

console.log(absoluteValue(-5)); // Output: 5
console.log(absoluteValue(3));  // Output: 3


// Example Program
// Function to calculate the area of a rectangle
function calculateRectangleArea(length, width) {
    // Check if the parameters are valid (non-negative)
    if (length < 0 || width < 0) {
        // If invalid, return an error message
        return "Invalid input: Length and width must be non-negative numbers.";
    }

    // Calculate the area using the formula: area = length * width
    var area = length * width;

    // Return the calculated area
    return area;
}

// Example usage of the function
var length = 5;
var width = 8;
var areaResult = calculateRectangleArea(length, width);

// Display the result
console.log("Length: " + length);
console.log("Width: " + width);
console.log("Area: " + areaResult);

