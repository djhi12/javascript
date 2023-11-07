
// Here's how you can create an object in JavaScript:
var person = {
    firstName: "John",
    lastName: "Doe",
    age: 30,
    isStudent: false,
    address: {
        street: "123 Main St",
        city: "Anytown",
        state: "CA"
    },
    sayHello: function () {
        console.log("Hello, my name is " + this.firstName + " " + this.lastName);
    }
};


// You can access the properties and methods of an object using dot notation or square bracket notation:
console.log(person.firstName); // Outputs: "John"
console.log(person["lastName"]); // Outputs: "Doe"
person.sayHello(); // Calls the sayHello method and logs the message


// You can also add, modify, or delete properties of an object dynamically:
person.middleName = "William"; // Adding a new property
person.age = 31; // Modifying an existing property
delete person.isStudent; // Deleting a property


// Example Program
// Define a person object
var person = {
    firstName: "John",
    lastName: "Doe",
    age: 30,
    isStudent: false,
    address: {
        street: "123 Main St",
        city: "Anytown",
        state: "CA"
    },
    sayHello: function () {
        console.log("Hello, my name is " + this.firstName + " " + this.lastName);
    }
};

// Accessing properties
console.log("First Name: " + person.firstName);
console.log("Age: " + person.age);
console.log("City: " + person.address.city);

// Calling a method
person.sayHello();

// Modifying properties
person.age = 31;
console.log("Updated Age: " + person.age);

// Adding a new property
person.middleName = "William";
console.log("Middle Name: " + person.middleName);

// Deleting a property
delete person.isStudent;
console.log("Is Student: " + person.isStudent); // Outputs: undefined

// Looping through object properties
for (var key in person) {
    if (person.hasOwnProperty(key)) {
        console.log(key + ": " + person[key]);
    }
}
