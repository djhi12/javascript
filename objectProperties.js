
// Object Literal
var person = {
    firstName: "John",
    lastName: "Doe"
};


// Accessing Properties
var firstName = person.firstName; // Using dot notation
var lastName = person["lastName"]; // Using square bracket notation


// Adding Properties
person.age = 30;


// Modifying Properties
person.firstName = "Jane";


// Deleting Properties
delete person.lastName;


// Object Methods
var person = {
    firstName: "John",
    lastName: "Doe",
    sayHello: function () {
        console.log("Hello, my name is " + this.firstName + " " + this.lastName);
    }
};

person.sayHello(); // Calls the sayHello method


// Property Enumeration
for (var key in person) {
    if (person.hasOwnProperty(key)) {
        console.log(key + ": " + person[key]);
    }
}


// Computed Property Names
var propertyName = "age";
person[propertyName] = 30; // Creates a property named "age" with a value of 30
