// Creating Arrays:
let fruitsArray = ["apple", "banana", "cherry"];

// Accessing Elements:
let firstFruit = fruitsArray[0]; // "apple"

// Array Length:
let numFruits = fruitsArray.length; // 3

// Modifying Arrays:
fruitsArray.push("orange"); // Adds "orange" to the end.
fruitsArray.pop(); // Removes the last element.
fruitsArray.unshift("kiwi"); // Adds "kiwi" to the beginning.
fruitsArray.shift(); // Removes the first element.
fruitsArray.splice(1, 1, "grape"); // Replaces the second element with "grape".

// Iterating Over Arrays:
for (let i = 0; i < fruitsArray.length; i++) {
    console.log(fruitsArray[i]);
}

fruitsArray.forEach(function (fruit) {
    console.log(fruit);
});

// Array Methods:
let numbersArray = [1, 2, 3, 4, 5];
let doubledNumbers = numbersArray.map(function (num) {
    return num * 2;
});

let evenNumbers = numbersArray.filter(function (num) {
    return num % 2 === 0;
});

let sum = numbersArray.reduce(function (accumulator, current) {
    return accumulator + current;
}, 0); // Initial value of the accumulator is 0.

// Multidimensional Arrays:
let matrix = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];

// Array Destructuring:
let [firstFruitDestructured, secondFruitDestructured] = fruitsArray;
console.log(firstFruitDestructured); // "apple"
console.log(secondFruitDestructured); // "banana"
