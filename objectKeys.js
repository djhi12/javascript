
// Here's the basic syntax for using Object.keys():
Object.keys(object)


// Here's an example of how to use Object.keys():
var person = {
    firstName: "John",
    lastName: "Doe",
    age: 30
};

// Get an array of property names from the person object
var keys = Object.keys(person);

console.log(keys); // ["firstName", "lastName", "age"]


// Example Program
// Create an object representing a person
var person = {
    firstName: "John",
    lastName: "Doe",
    age: 30
};

// Get an array of property names from the person object
var keys = Object.keys(person);

console.log("Property names of the person object:");

// Iterate over the property names and access their values
for (var i = 0; i < keys.length; i++) {
    var propertyName = keys[i];
    var propertyValue = person[propertyName];
    console.log(propertyName + ": " + propertyValue);
}
