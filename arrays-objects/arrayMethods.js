
// push(element1, element2, ...):
let fruits1 = ["apple", "banana"];
fruits1.push("cherry", "date");
// fruits1 is now ["apple", "banana", "cherry", "date"]

// pop():
let fruits2 = ["apple", "banana", "cherry"];
let removedFruit = fruits2.pop();
// removedFruit is "cherry", fruits2 is now ["apple", "banana"]

// unshift(element1, element2, ...):
let fruits3 = ["banana", "cherry"];
fruits3.unshift("apple", "date");
// fruits3 is now ["apple", "date", "banana", "cherry"]

// shift():
let fruits4 = ["apple", "banana", "cherry"];
let removedFruit2 = fruits4.shift();
// removedFruit2 is "apple", fruits4 is now ["banana", "cherry"]

// concat(array1, array2, ...):
let firstArray = [1, 2];
let secondArray = [3, 4];
let combinedArray = firstArray.concat(secondArray);
// combinedArray is [1, 2, 3, 4]

// slice(start, end):
let fruits5 = ["apple", "banana", "cherry", "date"];
let subset = fruits5.slice(1, 3);
// subset is ["banana", "cherry"]

// splice(start, deleteCount, item1, item2, ...):
let fruits6 = ["apple", "banana", "cherry"];
let removedFruits2 = fruits6.splice(1, 1, "date");
// removedFruits2 is ["banana"], fruits6 is now ["apple", "date", "cherry"]

// forEach(callbackFunction):
let numbers = [1, 2, 3, 4, 5];
numbers.forEach(function (number) {
    console.log(number * 2);
});
// Outputs the doubled numbers.

// map(callbackFunction):
let numbers2 = [1, 2, 3, 4, 5];
let doubledNumbers = numbers2.map(function (number) {
    return number * 2;
});
// doubledNumbers is [2, 4, 6, 8, 10]

// filter(callbackFunction):
let numbers3 = [1, 2, 3, 4, 5];
let evenNumbers = numbers3.filter(function (number) {
    return number % 2 === 0;
});
// evenNumbers is [2, 4]

// Example Program
// Create an array of numbers
let numbers4 = [1, 2, 3, 4, 5];

// Add an element to the end of the array using push()
numbers4.push(6);

// Remove the last element from the array using pop()
let lastNumber = numbers4.pop();

// Add elements to the beginning of the array using unshift()
numbers4.unshift(0, 0);

// Remove the first element from the array using shift()
let firstNumber = numbers4.shift();

// Create a new array by mapping each element to its square
let squaredNumbers = numbers4.map(function (number) {
    return number * number;
});

// Create a new array by filtering for even numbers
let evenNumbers2 = numbers4.filter(function (number) {
    return number % 2 === 0;
});

// Sum all the elements in the array using reduce()
let sum = numbers4.reduce(function (accumulator, current) {
    return accumulator + current;
}, 0);

// Display the results
console.log("Original Numbers:", numbers4);
console.log("Last Number:", lastNumber);
console.log("First Number:", firstNumber);
console.log("Squared Numbers:", squaredNumbers);
console.log("Even Numbers:", evenNumbers2);
console.log("Sum of Numbers:", sum);
