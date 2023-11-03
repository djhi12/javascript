
// Implicit Type Coercion:
5 + "5"; // Results in "55" (a string), as the number is coerced to a string for concatenation.
"3" * 2; // Results in 6 (a number), as the string is coerced to a number for multiplication.
true + 1; // Results in 2, as the boolean true is coerced to 1.


// Comparison Operators:
"5" == 5;  // true, because JavaScript coerces the string to a number for comparison.
0 == false; // true, because JavaScript coerces both 0 and false to boolean false for comparison.


// To avoid this type of coercion, you can use the strict equality operator ===:
"5" === 5; // false, because it checks both value and type.


// Boolean Coercion:
Boolean(0);     // false
Boolean("hello"); // true
if ("string") {  // true, because "string" is coerced to true in a boolean context.
    // Code here
}


// Example Program
// Type coercion examples
console.log(5 + "5");        // "55"
console.log("3" * 2);        // 6
console.log(true + 1);       // 2

// Comparison and strict comparison
console.log("5" == 5);       // true
console.log("5" === 5);      // false

// Boolean coercion
console.log(Boolean(0));     // false
console.log(Boolean("hello"));// true

// Conditional statement with type coercion
if ("string") {
    console.log("In the if block"); // This code will execute
} else {
    console.log("In the else block");
}

// Using explicit type conversion
var numString = "42";
var num = parseInt(numString);
console.log(num); // 42
