'use strict';
// // brings in the readline module to access the command line
const readline = require('readline');
// // use the readline module to print out to the command line
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });
  var words = ["earth", "toothpaste", "popcorn", "haircut", "program", "stamp", "volcano", "glove", "bird", "crown",
        "house","mountain", "river", "spell", "exercise"];
//make an array of words
// var randomWord = words[Math.floor(Math.random()* randomWord.length)];
//pick a random word from the array
console.log("word");
//print the word


//replace every letter in the word I picked with a -
//print that


//add code here to ask the user for a letter
//print the letter back to the user
//get this to work


//take the letter that the user gave you and check
//if the word you picked has that letter


//if it has the letter, replace the - with the letter
//print the word with the letter replacing the dash -
let handleInput = function(letter){
    console.log (letter)
}
//pick the word before line 29
//and the function will happen in between lines 29-31

const getPrompt = () => {
    rl.question('letter ', (answer) => {
     handleInput (answer)
      getPrompt();
    });
  }
  getPrompt()