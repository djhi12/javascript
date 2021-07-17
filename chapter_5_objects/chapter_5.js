/*
Object Literals
A Super Example
*/
const superman = {
    name: 'Superman',
    'real name': 'Clark Kent',
    height: 75,
    weight: 235,
    hero: true,
    villain: false,
    allies: ['Batman','Supergirl','Superboy'],
    fly() {
        return 'Up, up and away!';
    }
};

console.log(superman);



/*
Creating Objects
1. To create an object literal, simply enter a pair of curly braces.
*/

// The following example creates an empty object that is assigned to the variable spiderman :
const spiderman = {};

// It’s also possible to create an object using a constructor function.
// This example will also create an empty object:
// This method is not recommended.
const spiderman_1 = new Object();


/*
1. ES6 provided a shorthand method of creating objects if a property key is the same as a variable 
name that the property value is assigned to:
*/
const name = 'Iron Man';
const realName = 'Tony Stark';
// long way
const ironMan = { name: name, realName: realName };
// short ES6 way
const ironMan_1 = { name, realName };


/*
Accessing Properties
1. You can access the properties of an object using the dot notation that we’ve already seen in 
previous chapters. This will return the value of that property
*/
const superman_1 = {
    name: 'Superman',
    'real name': 'Clark Kent',
    height: 75,
    weight: 235,
    hero: true,
    villain: false,
    allies: ['Batman','Supergirl','Superboy'],
    fly() {
        return 'Up, up and away!';
    }
};

console.log(superman_1);
console.log(superman_1.name); // Superman

/*
1. You can also access an object’s properties using bracket notation ― the property is 
represented by a string inside square brackets, so needs to be placed inside single or double quotation marks:
*/
console.log(superman_1['name']); // Superman

/*
1. bracket notation has a few advantages: it's the only way to access nonstandard property 
and method names that don’t follow the variable naming rules. It also lets you evaluate an 
expression and use it as the property key:
*/
console.log(superman_1["real" + " " + "name"]); // the property is built using string concatenation) // Clark Kent

// If you try to access a property that doesn’t exist, undefined will be returned:
console.log(superman_1.city);


/*
Computed Properties
1. The ability to create objects with computed property keys was introduced in ES6. 
This means that JavaScript code can be placed inside square brackets and the property 
key will be the return value of that code.
*/
const hulk = { name: 'Hulk', ['catch' + 'Phrase']: 'Hulk Smash!' };
console.log(hulk);

// If we take a look at the hulk object, we can see the property key is named 'catchPhrase':
// {name: "Hulk", catchPhrase: "Hulk Smash!"}
console.log(hulk);


/*
1. The value of a property has always been allowed to be a JavaScript expression.
*/

/*
1. In the example below a ternary operator is used to return a true or false value for the 
hero property depending on the value of the bewitched variable:
*/
const bewitched = true;
const captainBritain = { name: 'Captain Britain', hero: bewitched ? false : true };
console.log(captainBritain); // {name: "Captain Britain", hero: false}

// The new Symbol date type can also be used as a computed property key:
const name_1 = Symbol('name');
const supergirl = { [name_1]: 'Supergirl' };
console.log(supergirl); // {Symbol(name): "Supergirl"}

// You can access the property using the square bracket notation:
console.log(supergirl[name_1]); // Supergirl


// A new property can be added to an object using a symbol as a key if the square bracket notation is used:
const realName_1 = Symbol('real name');
console.log(supergirl[realName_1] = 'Kara Danvers'); // Kara Danvers
 

/*
1. The symbols used for property keys are not limited to being used by only one object - 
they can be reused by any other object:
*/

/*
const daredevil = Symbol('name_2');
const daredevil_1 = { [name_3]: 'Daredevil', [realName]: 'Matt Murdoch'};
console.log(daredevil_1); // name_3 is not defined
*/


/*
Calling Methods
1. To call an object’s method we can also use dot or bracket notation.
2. Calling a method is the same as invoking a function, so parentheses need to be placed after the method name:
*/
const superman_2 = {
    name: 'Superman',
    'real name': 'Clark Kent',
    height: 75,
    weight: 235,
    hero: true,
    villain: false,
    allies: ['Batman','Supergirl','Superboy'],
    fly() {
        return 'Up, up and away!';
    }
};

console.log(superman_2);
console.log(superman_2.name); // Superman
console.log(superman_2.fly()); // Up, up and away!
console.log(superman_2['fly']()); // Up, up and away!


/*
Checking if Properties or Methods Exist
1. The in operator can be used to check whether an object has a particular property.
*/

// So, for example, we can check if the superman object has a property called city using this code:
console.log('city' in superman); // false
console.log('name' in superman); // true

// Alternatively, you could also check to see if the property or method doesn’t return undefined :
console.log(superman.city !== undefined); // false
console.log(superman.name !== undefined); // true
console.log(superman.name === undefined); // false
console.log(superman.name === 'Superman'); // true
console.log(superman.name === 'fly()'); // false
console.log(superman.weight === 235); // true


/*
1. As mentioned earlier, objects can inherit properties from other objects, so all objects 
have a method called hasOwnProperty() . This can be used to check whether an object has a 
property that is its own, rather than one that has been inherited from another object:
*/
console.log(superman.hasOwnProperty('city')); // false
console.log(superman.hasOwnProperty('name')); // true
console.log(superman.hasOwnProperty(235)); // false


/*
Finding all the Properties of an Object
1. We can loop through all of an object’s properties and methods by using a for in loop.
*/

// For example, to log all the properties of the superman object to the console, we could use:
for(const key in superman) {
    console.log(key + ": " + superman[key]);
}
/*
name: Superman
chapter_5.js:195 real name: Clark Kent
chapter_5.js:195 height: 75
chapter_5.js:195 weight: 235
chapter_5.js:195 hero: true
chapter_5.js:195 villain: false
chapter_5.js:195 allies: Batman,Supergirl,Superboy
chapter_5.js:195 fly: fly() {
        return 'Up, up and away!';
    }
*/

/*
Object.keys()
1. The Object.keys() method will return an array of all the keys of any object that is provided 
as an argument. We can then iterate over this array to access all the keys of an object:
*/
for(const key of Object.keys(superman)) {
    console.log(key);
}
/*
name
chapter_5.js:217 real name
chapter_5.js:217 height
chapter_5.js:217 weight
chapter_5.js:217 hero
chapter_5.js:217 villain
chapter_5.js:217 allies
chapter_5.js:217 fly
*/


/*
Object.values()
1.ES2017 also adds some the Object.values() that works in the same way, but returns an array of 
all the object's value:
*/

for(const value of Object.values(superman)) {
    console.log(value);
}
/*
["Batman", "Supergirl", "Superboy"]0: "Batman"1: "Supergirl"2: "Superboy"length: 3__proto__: Array(0)
chapter_5.js:236 ƒ fly() {
        return 'Up, up and away!';
    }
*/


/*
1. Object.entries() is also part of ES2017 and returns an array of key-value pairs. These 
key-value pairs are returned in arrays, but they can be destructured and accessed individually 
using the following notation:
*/
for(const [key,value] of Object.entries(superman)) {
    console.log(`${key}: ${value}`);
}
/*
name: Superman
chapter_5.js:253 real name: Clark Kent
chapter_5.js:253 height: 75
chapter_5.js:253 weight: 235
chapter_5.js:253 hero: true
chapter_5.js:253 villain: false
chapter_5.js:253 allies: Batman,Supergirl,Superboy
chapter_5.js:253 fly: fly() {
        return 'Up, up and away!';
*/


/*
Adding Properties
1. New properties and methods can be added to objects at any time in a program. This is done by 
simply assigning a value to the new property.
*/
const superman_3 = {
    name: 'Superman',
    'real name': 'Clark Kent',
    height: 75,
    weight: 235,
    hero: true,
    villain: false,
    allies: ['Batman','Supergirl','Superboy'],
    fly() {
        return 'Up, up and away!';
    }
};

console.log(superman_3);
// For example, if we wanted to add a new city property to our superman object, we would do it like so:
superman_3.city = 'Metropolis';
console.log(superman_3.city); // Metropolis


/*
Changing Properties
1. You can change the value of an object’s properties at any time using assignment. 
*/

// For example, we can change the value of the "real name" property like this:
superman_3['real name'] = 'Kal-El';
console.log(superman_3['real name']); // Kal-El


/*
Removing Properties
1. Any property can be removed from an object using the delete operator.
*/

// For example, if we wanted to remove the fly method from the superman object, we would enter the following:
delete superman_3.fly;
console.log(superman_3.fly); // undefined
console.log(superman_3);


/*
Nested Objects
1. It’s even possible for an object to contain other objects. These are known as nested objects.
*/
// Here’s an example of an object that contains a list of other objects. It has been assigned to the variable jla :
const jla = {
    superman: { realName: 'Clark Kent' },
    batman: { realName: 'Bruce Wayne' },
    wonderWoman: { realName: 'Diana Prince' },
    flash: { realName: 'Barry Allen' },
    aquaman: { realName: 'Arthur Curry' },
}

console.log(jla);
/*
{superman: {…}, batman: {…}, wonderWoman: {…}, flash: {…}, aquaman: {…}}
aquaman: {realName: "Arthur Curry"}
batman: {realName: "Bruce Wayne"}
flash: {realName: "Barry Allen"}
superman: {realName: "Clark Kent"}
wonderWoman: {realName: "Diana Prince"}
*/

console.log(jla.superman); // {realName: "Clark Kent"} realName: "Clark Kent"

/*
The values in nested objects can be accessed by referencing each property name in order using 
either dot or bracket notation:
*/ 
console.log(jla.superman.realName); // Clark Kent

// You can even mix the different notations:
console.log(jla.aquaman['realName']); // Arthur Curry


/*
Objects are copied by reference
1. 
*/
const thor = { name: 'Thor' 
// more properties here
};

console.log(thor);
/*
{name: "Thor"}
name: "Thor"
*/

const cloneThor = thor;
console.log(cloneThor);
/*
{name: "Thor"}
name: "Thor"
*/

// We can see this, if we make a change to the name property of cloneThor :
cloneThor.name = 'Clor';
console.log(cloneThor); // {name: "Clor"} name: "Clor"

console.log(thor.name); // Clor

let a = 1;
let b = a;
console.log(b); // 1

b = 2;
console.log(b); // 2
console.log(a); // 1


/*
Objects as Parameters to Functions
1. An object literal can be passed as a parameter to a function. This is useful when there are 
a large number of parameters, as it allows the arguments to be provided by name and in any order. 
This means you don't have to remember the order to enter them when invoking a function.
*/
function greet({greeting,name,age}) {
    return `${greeting}! My name is ${name} and I am ${age} years old.`;
}

greet({ greeting: `What's up dude`, age: 10, name: `Bart` });
console.log(greet({ greeting: `What's up dude`, age: 10, name: `Bart` })); // What's up dude! My name is Bart and I am 10 years old.
document.getElementById('output').innerHTML = greet({ greeting: `What's up dude`, age: 10, name: `Bart` });



function greet_1({greeting = 'Hello', name, age = 18}) {
    return `${greeting}! My name is ${name} and I am ${age} years old.`;
}

console.log(greet_1({ name: 'Lisa', age: 8 })); // Hello! My name is Lisa and I am 8 years old.
// document.getElementById('output_1').innerHTML = greet_1({ name: 'Lisa', age: 8 }); 


/*
this
1. The keyword this refers to the object that it is within. It can be used inside methods 
to gain access to the object’s properties.
*/
const dice = {
    sides: 6,
    roll() {
        return Math.floor(this.sides * Math.random()) + 1;
    }
}
console.log(dice.roll()); // 2 changeable
console.log(dice.roll()); // 4 changeable
// document.getElementById('output_2').innerHTML = dice.roll();

// If we want to change the number of sides, all we need to do is modify the sides property:
dice.sides = 20;
console.log(dice.roll()); // 18 changeable
console.log(dice.roll()); // 18 changeable


/*
Namespacing
1. Naming collisions occur when the same variable or function name is used for different 
purposes by code sharing the same scope.

2. A solution to this problem is to use the object literal pattern to create a namespace 
for groups of related functions. This is done by creating an object literal that serves 
as the namespace, then adding any values as properties of that object, and any functions as methods.

3. 
*/
const myMaths = {
    square(x) {
        return x * x;
    },
    mean(array,callback) {
        if (callback) {
        array.map( callback );
        } 
        const total = array.reduce((a, b) => a + b);
        return total/array.length;
    }
};

console.log(myMaths.square(3)); // 9
console.log(myMaths.mean([1,2,3])); // 2


/*
Built-in Objects
1. JavaScript has a number of other built-in global objects that can be accessed from 
anywhere in a program. They provide a number of useful properties and methods that we’ll cover in this section.
*/


/*
JSON
1. 
*/
const batman = `{"name": "Batman",
"real name": "Bruce Wayne", 
"height": 74, 
"weight": 210, 
"hero": true, 
"villain": false, 
"allies": ["Robin",
"Batgirl",
"Superman"]}`;

console.log(batman);
console.log(JSON.parse());
// document.getElementById('batmanJSON').innerHTML = batman;


const batman_1 = '{"name": "Batman","real name": "Bruce Wayne","height": 74, "weight": 210, "hero": true, "villain": false, "allies": ["Robin","Batgirl","Superman"]}'
/*
parse()
*/
// The parse() method takes a string of data in JSON format and returns a JavaScript object:
JSON.parse(batman_1);
console.log(JSON.parse(batman_1));
// document.getElementById('batmanParseJSON').innerHTML = JSON.parse(batman_1);

/*

*/

