/*
Function Declarations 
1. To define a function literal we can use a function declaration:
2. This starts with the function keyword and is followed by the name of the function, which in this case is 
called ' hello ', followed by parentheses.
3. Following this is a block that contains the code for the function.
4. This is known as a named function as the function has a name: ' hello '.
*/

/*
function hello(){
    console.log('Hello World!'); 
}
hello();
*/

/*
Function Expressions
1. Another way of defining a function literal is to create a function expression. This assigns ananonymous 
function to a variable:
2. The function in this example is known as an anonymous function because it doesn't have a name; it is simply 
created, then assigned to the variable goodbye.
3. 
*/

/*
const goodbye = function(){
    console.log('Goodbye World!');
};
*/

/*
1. Alternatively, we can create a named function expression instead:
*/


const goodbye_1 = function bye(){
    console.log(bye());
};


/*
Function() Constructors
1. A function can also be declared using the constructor Function() . The body of the function is 
entered as a string, as shown in this example:
 */

//const hi = new Function('console.log("Hi World!");');

/*
Invoking a Function
1. Invoking a function is to run the code inside the function’s body. To invoke a function, simply 
enter its name, followed by parentheses. This is how we’d invoke the hello function:
*/


function hello(){
    console.log('Hello World!'); 
}
hello();

const goodbye_2 = function goodbye_2(){
    console.log('Goodbye World!'); 
};
goodbye_2();


/*
1. Remember: you need parentheses to invoke a function ― either by name or by reference to the 
variable it is assigned to.
2.  If you skip the parentheses, you are simply referencing the function itself rather than 
invoking it, as you can see here:
*/


//goodbye;


/*
1. All that has been returned is the function definition that the variable goodbye is pointing 
to, rather than running the code. This can be useful if you want to assign the function to another 
variable, like so:
*/

//seeya = goodbye;


/*
1. Now the variable seeya also points to the function called bye and can be used to invoke it:
*/

//seeya();


/*
Return Values
1. All functions return a value, which can be specified using the return statement, which comes 
after the return keyword.
2. A function that doesn’t explicitly return anything (such as all the examples we have seen 
so far) will return undefined by default.
*/

/*
1. The function in this example will return the string 'Howdy World!':
2. 
*/
function howdy(){
    return 'Howdy World!';
}
console.log(howdy());

/*
1. This means we can now assign a function invocation to a variable, and the value of that 
variable will be the return value of that function:
*/
const message = howdy();


/*
Parameters and Arguments
1. Parameters and arguments are terms that are often used interchangeably to represent values 
provided for the function as an input. 
2. There is a subtle difference though: any parameters a function needs are set when the 
function is defined. When a function is invoked, it is provided with arguments.
*/

/*
1. To see an example of a function that uses parameters, we'll create a function that squares numbers.
2. In the example that follows, the square function takes one parameter, x , which is the number to be squared.
3. In the body of the function, the name of the parameter acts like a variable equal to the value that 
is provided when the function is invoked.
4. As you can see, it is multiplied by itself and the result is returned by the function:
*/
function square(x){
    return x*x;
}

/*
1. When we invoke this function, we need to provide an argument, which is the number to be squared:
*/
console.log(square(4.5));


/*
1. You can use as many parameters as you like when defining functions. For example, the following 
function finds the mean of any three numbers:
*/
function mean(a,b,c){
    return (a+b+c)/3;
}
console.log(mean(1, 3, 6,));


/*
Variable Numbers of Arguments
1. Every function has a special variable called arguments . This is an array-like object that 
contains every argument passed to the function when it is invoked. 
2. We can create a simple function called arguments() that will return the arguments object 
so we can see what it contains:
*/
function arguments(){
    return arguments;
}
arguments('hello', NaN);
console.log(arguments());

arguments(1,2,3,4,5);
console.log(arguments());


/*
1. A much better option is to use the rest operator. This was introduced in ES6 and can be used 
to deal with multiple arguments by creating an array of arguments that are available inside the 
body of the function.
*/

/*
1. To use the rest operator, simply place three dots in front of the last parameter in a function 
declaration. This will then collect all the arguments entered into an array. 
*/
function rest(...args){
    return args;
}

/*
1. The args parameter is an actual array, and has access to the same methods. For example we 
can use a for-of loop to iterate over each value given as an argument:
*/
function rest(...args){
    for(arg of args){
        console.log(arg);
    }
}
rest(2,4,6,8)


/*
Improved Mean Function
1. We can use a rest parameter to improve our mean() function so it accepts any number of values:
*/
function mean_1(...values) {
    let total = 0;
    for(const value of values) {
        total += value;
    }
    return total/values.length;
}

console.log(mean_1(2,8,13,11,4,2)); //6.66666666666667


/*
Default Parameters
1. ES6 introduced a convenient way to specify default parameters for a function. These are values 
that will be used by the function if no arguments are provided when it is invoked.
2. To specify a default parameter, simply assign the default value to it in the function definition:
*/
function hello(name = 'World'){
    console.log(`Hello ${name}!`);
}

// Now if we call this function without an argument, it will use 'World' as the name parameter:
// We can override the default value, by specifying our own argument:
hello('Universe');


/*
1. Default parameters should always come after non-default parameters, otherwise default 
values will always have to be entered anyway. 
2. This function takes two arguments: the price of an item and the percentage discount to be applied. 
The store’s most common discount is 10%, so this is provided as a default value. This means that the 
amount argument can be omitted in most cases and a 10% discount will still be applied:
*/
function discount(price, amount = 10) {
    return price*(100 - amount) / 100;
}
/*
1. If a different discount is applied, the amount argument can be provided:
*/
console.log(discount(15, 20));



/*
Arrow Functions
1. These make declaring functions much more succinct by using less verbose syntax.
2. Arrow functions can be identified by the 'arrow' symbol, => that gives them their name. 
3. Arrow functions can be identified by the 'arrow' symbol, => that gives them their name. 
The parameters come before the arrow and the main body of the function comes after. 
4. Arrow functions can be identified by the 'arrow' symbol, => that gives them their name. 
The parameters come before the arrow and the main body of the function comes after. 
Arrow functions are always anonymous, so if you want to refer to them, you must assign them to a variable.
*/

// For example, the square function we wrote earlier can be written like so:
const square_1 = x => x*x;

//Multiple parameters need to go inside parentheses, for example, the following function adds two numbers together:
const add = (x,y) => x + y;


//If the function doesn't require any parameters, a pair of empty parentheses must go before the arrow:
const hello_1 = () => alert('Hello World!');


/*
1. Longer functions will still require curly braces to deliminate the body of the function and 
the return keyword at the end, as can be seen in this (rather simplistic) tax-calculating function:
*/
const tax = (salary) => {
    const taxable = salary - 8000;
    const lowerRate = 0.25 * taxable;
    taxable = taxable - 20000;
    const higherRate = 0.4 * taxable;
    return lowerRate + higherRate;
}
console.log(tax);


/*
Function Hoisting
1. Hoisting is the JavaScript interpreter’s action of moving all variable and function declarations 
to the top of the current scope, regardless of where they are defined.
2. Functions that are defined using a function declaration are automatically hoisted, meaning they 
can be invoked before they have been defined.
*/

// function is invoked at the start of the code
hoist();
// ...
// ... lots more code here
// ...
// function definition is at the end of the code
function hoist(){
    console.log('Hoist Me!');
}


/*
Variable Hoisting
1. Variable declarations that use the var keyword are automatically moved to the top of the current scope.
2. Variable assignment is not hoisted, however. This means that a variable assigned at the end of a 
function will have a value of undefined until the assignment is made:
*/

/* It’s better practice to use const and let to declare any variables at the beginning of a block so 
hoisting is unnecessary.
*/
console.log(name); // will return undefined before assignment
// variable is defined here
var name = 'Alexa';
console.log(name); // will return 'Alexa' after assignment