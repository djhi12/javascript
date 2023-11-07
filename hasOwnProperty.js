
// Here's the basic syntax of how to use hasOwnProperty:
object.hasOwnProperty(propertyName)


// 
var person = {
    firstName: "John",
    lastName: "Doe"
};

// Check if the "firstName" property exists in the "person" object
var hasFirstName = person.hasOwnProperty("firstName");

// Check if the "age" property exists in the "person" object
var hasAge = person.hasOwnProperty("age");

console.log(hasFirstName); // true
console.log(hasAge);      // false


// Example Program
// Create an object representing a person
var person = {
    firstName: "John",
    lastName: "Doe",
    age: 30
};

// Check if the "firstName" property exists in the person object
var hasFirstName = person.hasOwnProperty("firstName");

// Check if the "age" property exists in the person object
var hasAge = person.hasOwnProperty("age");

// Check if the "gender" property exists in the person object
var hasGender = person.hasOwnProperty("gender");

// Output the results
console.log("Person Object:", person);
console.log("Does the person object have 'firstName' property?", hasFirstName); // true
console.log("Does the person object have 'age' property?", hasAge);               // true
console.log("Does the person object have 'gender' property?", hasGender);         // false
