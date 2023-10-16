
// Calculate the area of a circle
function calculateCircleArea(radius) {
    return Math.PI * Math.pow(radius, 2);
}

const circleRadius = 5;
const circleArea = calculateCircleArea(circleRadius);
console.log(`The area of a circle with a radius of ${circleRadius} is ${circleArea}`);


// Generate a random integer between a minimum and maximum value
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

const minRandom = 1;
const maxRandom = 100;
const randomValue = getRandomInt(minRandom, maxRandom);
console.log(`Random number between ${minRandom} and ${maxRandom}: ${randomValue}`);


// Calculate the sine and cosine of an angle (in radians)
const angleInRadians = Math.PI / 4;
const sineValue = Math.sin(angleInRadians);
const cosineValue = Math.cos(angleInRadians);
console.log(`Sine of ${angleInRadians} radians: ${sineValue}`);
console.log(`Cosine of ${angleInRadians} radians: ${cosineValue}`);
