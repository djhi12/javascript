
// Variables
// Using var (not recommended)
var age = 30;

// Using let (for variables that can be reassigned)
let name = "John";

// Using const (for variables that should not be reassigned)
const pi = 3.1415;


// Constants
const pi2 = 3.1415;

let age = 30;
const name2 = "John";

if (age > 18) {
    let canVote = true;
    console.log(name2 + " can vote.");
} else {
    let canVote = false;
    console.log(name2 + " cannot vote.");
}


// Example Program
// Variables
let score = 0;
let playerName = "Alice";

// Constants
const maxScore = 100;

// Function to update the player's score
function updateScore(points) {
    score += points;
    if (score >= maxScore) {
        console.log(playerName + " has reached the maximum score of " + maxScore + "!");
    } else {
        console.log(playerName + "'s score is now " + score);
    }
}

// Initial output
console.log(playerName + " starts the game with a score of " + score);

// Playing the game
updateScore(20);
updateScore(30);
updateScore(50);

// Attempting to change the player's name (which is not allowed)
playerName = "Bob";

// Trying to update the score beyond the maximum (which will trigger the maximum score message)
updateScore(60);
