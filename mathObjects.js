
// Math.PI: Represents the mathematical constant π (pi), which is approximately 3.14159.
console.log(Math.PI); // Outputs 3.141592653589793


// Math.E: Represents the base of the natural logarithm, approximately 2.71828.
console.log(Math.E); // Outputs 2.718281828459045


// Math.abs(x): Returns the absolute value of a number x.
console.log(Math.abs(-5)); // Outputs 5


// Math.round(x): Rounds a number to the nearest integer.
console.log(Math.round(4.7)); // Outputs 5
console.log(Math.round(4.2)); // Outputs 4


// Math.floor(x): Rounds a number down to the nearest integer.
console.log(Math.floor(4.7)); // Outputs 4


// Math.ceil(x): Rounds a number up to the nearest integer.
console.log(Math.ceil(4.2)); // Outputs 5


// Math.max(x, y, ...): Returns the largest of the provided numbers.
console.log(Math.max(5, 2, 8, 1)); // Outputs 8


// Math.min(x, y, ...): Returns the smallest of the provided numbers.
console.log(Math.min(5, 2, 8, 1)); // Outputs 1


// Math.pow(x, y): Returns x raised to the power of y.
console.log(Math.pow(2, 3)); // Outputs 8


// Math.sqrt(x): Returns the square root of x.
console.log(Math.sqrt(16)); // Outputs 4


// Math.random(): Returns a random floating-point number between 0 (inclusive) and 1 (exclusive).
console.log(Math.random());


// To generate random integers within a specific range, you can use Math.random() in combination with other methods. For example, to generate a random integer between 1 and 10:
const randomInt = Math.floor(Math.random() * 10) + 1;
console.log(randomInt);


// Example Program
// Calculate the area of a circle given its radius
function calculateCircleArea(radius) {
    return Math.PI * Math.pow(radius, 2);
}

const circleRadius = 5;
const circleArea = calculateCircleArea(circleRadius);
console.log(`The area of a circle with a radius of ${circleRadius} is ${circleArea.toFixed(2)}`);

// Generate a random number between 1 and 10
const randomInt2 = Math.floor(Math.random() * 10) + 1;
console.log(`Random number between 1 and 10: ${randomInt2}`);

// Find the square root of a number
const numberToSquareRoot = 25;
const squareRoot = Math.sqrt(numberToSquareRoot);
console.log(`The square root of ${numberToSquareRoot} is ${squareRoot}`);

// Calculate the factorial of a number
function calculateFactorial(n) {
    if (n === 0 || n === 1) {
        return 1;
    } else {
        return n * calculateFactorial(n - 1);
    }
}

const factorialNumber = 5;
const factorialResult = calculateFactorial(factorialNumber);
console.log(`The factorial of ${factorialNumber} is ${factorialResult}`);

// Calculate the absolute difference between two numbers
const num1 = 10;
const num2 = 6;
const absoluteDifference = Math.abs(num1 - num2);
console.log(`The absolute difference between ${num1} and ${num2} is ${absoluteDifference}`);
