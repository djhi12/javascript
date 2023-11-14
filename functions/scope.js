
// Example of a global variable:
var globalVar = "I am global";

function exampleFunction() {
    console.log(globalVar);  // Accessing the global variable inside a function
}

exampleFunction();
console.log(globalVar);  // Accessing the global variable outside the function


// Example of local scope:
function exampleFunction() {
    var localVar = "I am local";
    console.log(localVar);
}

exampleFunction();
// console.log(localVar);  // This would result in an error because localVar is not defined outside the function


// Example of block scope:
if (true) {
    let blockVar = "I am block-scoped";
    console.log(blockVar);
}

// console.log(blockVar);  // This would result in an error because blockVar is not defined outside the block


// Example Program
// Global variable
var globalVar = "I am global";

function exampleFunction() {
    // Local variable
    var localVar = "I am local";

    // Accessing global and local variables
    console.log("Inside function:");
    console.log("Global variable: " + globalVar);
    console.log("Local variable: " + localVar);
}

// Call the function
exampleFunction();

// Try to access the local variable outside the function (will result in an error)
// console.log("Outside function: " + localVar); // Uncommenting this line will result in an error

// Access the global variable outside the function
console.log("Outside function: " + globalVar);
