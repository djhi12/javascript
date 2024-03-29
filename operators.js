// Arithmetic Operators:
let a = 5;
let b = 2;

let sum = a + b; // sum is 7
let difference = a - b; // difference is 3
let product = a * b; // product is 10
let quotient = a / b; // quotient is 2.5
let remainder = a % b; // remainder is 1
a++; // a is now 6
b--; // b is now 1

// Assignment Operators:
let x = 10;
x += 5; // Equivalent to x = x + 5; x is now 15

// Comparison Operators:
let p = 5;
let q = "5";

p == q; // true (loose equality, type coercion)
p === q; // false (strict equality, different types)
p != q; // false (loose inequality, type coercion)
p !== q; // true (strict inequality, different types)
p > 3; // true
p < 3; // false

// Logical Operators:
let isTrue = true;
let isFalse = false;

isTrue && isFalse; // false
isTrue || isFalse; // true
!isTrue; // false

// Bitwise Operators (operate on binary representations of numbers):
let num1 = 5; // Binary: 0101
let num2 = 3; // Binary: 0011

num1 & num2; // Bitwise AND: 0001 (1 in decimal)
num1 | num2; // Bitwise OR: 0111 (7 in decimal)
num1 ^ num2; // Bitwise XOR: 0110 (6 in decimal)
~num1; // Bitwise NOT: 11111111111111111111111111111010 (in 2's complement, depends on the number of bits)
num1 << 1; // Left shift by 1: 1010 (10 in decimal)
num1 >> 1; // Right shift by 1: 0010 (2 in decimal)

// Conditional operation
if (num1 > num2) {
    console.log("num1 is greater than num2.");
} else {
    console.log("num1 is not greater than num2.");
}
