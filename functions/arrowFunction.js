
// Here's the basic syntax of an arrow function:
// ES6 Arrow Function
const add = (a, b) => {
    return a + b;
};


// 
// Shortened arrow function
const multiply = (a, b) => a * b;


// // Arrow function with a single parameter
const square = x => x * x;


// 
function TraditionalFunction() {
    this.value = 1;

    // Traditional function expression
    setTimeout(function () {
        this.value++;
        console.log(this.value); // Will log NaN, as this.value is undefined in this context
    }, 1000);
}

function ArrowFunction() {
    this.value = 1;

    // Arrow function
    setTimeout(() => {
        this.value++;
        console.log(this.value); // Will log 2, as the arrow function inherits 'this' from the enclosing scope
    }, 1000);
}

const traditionalInstance = new TraditionalFunction();
const arrowInstance = new ArrowFunction();


// Example Program
// Traditional function expression
function calculateAreaTraditional(length, width) {
    return length * width;
}

// Arrow function
const calculateAreaArrow = (length, width) => length * width;

// Test the functions
const length = 5;
const width = 3;

const areaTraditional = calculateAreaTraditional(length, width);
const areaArrow = calculateAreaArrow(length, width);

console.log(`Traditional Function: The area of the rectangle is ${areaTraditional}`);
console.log(`Arrow Function: The area of the rectangle is ${areaArrow}`);
