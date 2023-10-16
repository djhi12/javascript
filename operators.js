
// Arithmetic Operators
let a = 5;
let b = 2;

console.log(a + b); // 7
console.log(a - b); // 3
console.log(a * b); // 10
console.log(a / b); // 2.5
console.log(a % b); // 1
console.log(a ** b); // 25


// Comparison Operators
let x = 5;
let y = '5';

console.log(x == y);  // true (loose equality)
console.log(x === y); // false (strict equality)
console.log(x != y);  // false (loose inequality)
console.log(x !== y); // true (strict inequality)
console.log(x > 3);    // true
console.log(x <= 4);   // true


// Logical Operators
let isSunny = true;
let isWarm = true;

console.log(isSunny && isWarm); // true
console.log(isSunny || isWarm); // true
console.log(!isSunny);           // false


// Assignment Operators
let total = 10;
total += 5; // total is now 15


// Other Operators
let age = 20;
let canVote = age >= 18 ? "Yes" : "No";
console.log(canVote); // "Yes"

console.log(typeof age); // "number"
