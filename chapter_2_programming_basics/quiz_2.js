
/*
1. This declares a variable called question and assigns the string 'What is 
Superman's real name?' to it.
 */
const question = "What is Superman's real name?";

/*
1. Next, we need to ask the question stored in the question variable, using a prompt dialog:
2. A prompt dialog allows the player to type in a response, which is then 
stored in the variable it is assigned to, which is answer in this case.
*/
const answer = prompt(question);

/* 
1. Finally, we use an alert dialog to display the player's answer using string 
interpolation to insert the value of answer into the template literal that is displayed in an alert box:
*/
alert('You answered' + ' ' + answer);
console.log(answer);


