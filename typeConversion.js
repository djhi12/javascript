
// Implicit Type Conversion (Coercion):
var x = 5; // x is a number
var y = "10"; // y is a string

var result = x + y; // JavaScript converts x to a string and then concatenates them
console.log(result); // "510"


// parseInt() and parseFloat(): 
var str = "42";
var num = parseInt(str); // Converts the string "42" to the number 42


// String(): 
var num = 42;
var str = String(num); // Converts the number 42 to the string "42"


// Number(): 
var str = "3.14";
var num = Number(str); // Converts the string "3.14" to the number 3.14


// Boolean(): 
var value = "Hello";
var bool = Boolean(value); // Converts a non-empty string to true


// Example Program
// Implicit Type Conversion
var x = 5; // x is a number
var y = "10"; // y is a string

var result = x + y; // JavaScript converts x to a string and then concatenates them
console.log("Implicit Type Conversion Result: " + result); // "Implicit Type Conversion Result: 510"

// Explicit Type Conversion
var strNum = "42"; // strNum is a string
var num = parseInt(strNum); // Convert the string "42" to the number 42

var numStr = 3.14; // numStr is a number
var str = String(numStr); // Convert the number 3.14 to the string "3.14"

var value = "Hello"; // value is a string
var bool = Boolean(value); // Convert a non-empty string to true

console.log("Explicit Type Conversion Results:");
console.log("String to Number: " + num); // 42
console.log("Number to String: " + str); // "3.14"
console.log("String to Boolean: " + bool); // true
