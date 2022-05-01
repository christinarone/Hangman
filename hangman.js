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
var randomWord = words[Math.floor(Math.random()* words.length)];
//pick a random word from the array
console.log(randomWord);
//print the word


//replace every letter in the word I picked with a - dash
//print that
let s = ""
for (let i = 0; i < randomWord.length; i++){
    s += "_";
}
console.log(s);
let answer = s.split("")
// console.log (s[2]);

//add code here to ask the user for a letter
//print the letter back to the user
//get this to work


//take the letter that the user gave you and check
//if the word you picked has that letter


//if it has the letter, replace the - dash with the letter
//print the word with the letter replacing the dash -
let handleInput = function(letter){
    // console.log (letter)
    if(randomWord.includes(letter)){
        // console.log(s);
        for(let i = 0; i < randomWord.length; i++){
            if(randomWord[i] == letter){
                answer[i] = letter;
                // let str = s.slice();
                // str[i] = letter;
                //replace [method] a character in string js
                // need a counter to state how many moves are left
                // when the winner guesses the word; congrats!
                //option 1 if randomWord = current
                //option 2 if current doesn't have _ left; that means they guessed the letters.
                //I need to create logic for when they lose & when they win
            }
            
        }
        console.log(answer);
        let current = answer.join("");
        //it's a js method that will turn an array to a string
        console.log(current);
        //my logic goes here
    }
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
