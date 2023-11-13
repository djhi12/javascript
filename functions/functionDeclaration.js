
// Here's the basic syntax for a function declaration:
function functionName(parameters) {
    // function body
    // code to be executed
    return returnValue; // optional
}


// Here's an example:
function addNumbers(a, b) {
    var sum = a + b;
    return sum;
}

var result = addNumbers(5, 3);
console.log(result); // Output: 8


// Example Program
// Function declaration
function greet(name) {
    // Function body
    var greeting = "Hello, " + name + "!";
    return greeting;
}

// Function call
var userName = "John";
var greetingMessage = greet(userName);

// Output
console.log(greetingMessage); // Output: Hello, John!
