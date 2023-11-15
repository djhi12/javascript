
// 
// Function to determine the sign of a number
function checkNumberSign(number) {
    if (number > 0) {
        return 'Positive';
    } else if (number < 0) {
        return 'Negative';
    } else {
        return 'Zero';
    }
}

// Example usage
let num1 = 5;
console.log(`The sign of ${num1} is: ${checkNumberSign(num1)}`);

let num2 = -8;
console.log(`The sign of ${num2} is: ${checkNumberSign(num2)}`);

let num3 = 0;
console.log(`The sign of ${num3} is: ${checkNumberSign(num3)}`);
