

// Example Program
// Primitive Types
let num1 = 42; // Number
let str1 = "Hello, World!"; // String
let bool1 = true; // Boolean

// Reference Types
let arr1 = [1, 2, 3]; // Array
let obj1 = { name: "John", age: 30 }; // Object

// Changing a primitive type does not affect the original value
let num2 = num1; // Copy the value
num2 = 100;
console.log("num1:", num1); // 42
console.log("num2:", num2); // 100

// Changing a reference type can affect the original value
let arr2 = arr1; // Reference the same array
arr2.push(4);
console.log("arr1:", arr1); // [1, 2, 3, 4]
console.log("arr2:", arr2); // [1, 2, 3, 4]

// Objects and reference types
let obj2 = obj1; // Reference the same object
obj2.age = 35;
console.log("obj1:", obj1); // { name: "John", age: 35 }
console.log("obj2:", obj2); // { name: "John", age: 35 }
