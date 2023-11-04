// Declaring and Assigning Numbers:
let age = 30;
const pi = 3.14159;
var price = 9.99;

// Basic Arithmetic Operations:
let a = 10;
let b = 5;

let sum = a + b;
let difference = a - b;
let product = a * b;
let quotient = a / b;

// Modulo (Remainder) Operator:
let remainder = 10 % 3; // This will result in 1

// Increment and Decrement:
let count = 0;
count++; // Increment by 1
count--; // Decrement by 1

// Math Object:
let x = Math.sqrt(16); // Square root
let y = Math.pow(2, 3); // Exponentiation (2^3)
let z = Math.PI; // The value of Pi

// Parsing Numbers:
let strNum = "123";
let num = parseInt(strNum); // Converts to an integer
let floatNum = parseFloat("3.14"); // Converts to a floating-point number

// Number Validation:
let isHelloNaN = isNaN("Hello"); // true, not a valid number
let is42Finite = isFinite(42); // true, a finite number
let isInfinityFinite = isFinite(Infinity); // false, not a finite number

// Rounding Numbers:
let roundNum = Math.round(3.7); // Rounds to the nearest integer (4)
let floorNum = Math.floor(3.7); // Rounds down to the nearest integer (3)
let ceilNum = Math.ceil(3.2); // Rounds up to the nearest integer (4)

// Number Formatting:
let originalNum = 3.14159;
let formattedNum = originalNum.toFixed(2); // Result: "3.14"

// Random Numbers:
let random = Math.random(); // Random decimal between 0 and 1
let randomInt = Math.floor(Math.random() * (10 - 1 + 1)) + 1; // Random integer between 1 and 10

// Output the results
console.log("Sum:", sum);
console.log("Difference:", difference);
console.log("Product:", product);
console.log("Quotient:", quotient);
console.log("Remainder:", remainder);
console.log("Increment/Decrement:", count);
console.log("Square Root:", x);
console.log("Exponentiation:", y);
console.log("Pi Value:", z);
console.log("Parsed Number:", num);
console.log("Parsed Floating-Point Number:", floatNum);
console.log("Is 'Hello' a Number?", isHelloNaN);
console.log("Is 42 Finite?", is42Finite);
console.log("Is Infinity Finite?", isInfinityFinite);
console.log("Rounded to Nearest Integer:", roundNum);
console.log("Rounded Down:", floorNum);
console.log("Rounded Up:", ceilNum);
console.log("Formatted Number:", formattedNum);
console.log("Random Decimal:", random);
console.log("Random Integer:", randomInt);
