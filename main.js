// 1. First build this project in the terminal
// 2. Then attach it to the DOM
// 3. Work through the challenge together
// 4. As always whiteboard it and make a code plan
// 5. Translate from English to pseudo code then to JavaScript
// 6. Test
// 7. Present to class
// 8. Turn in the URL to your repo, once for each person in your group

// Input: Any letter
// _ _ _ _ _

// L (input)
// _ _ L L _ (return)

// H (input)

// H _ L L _

// E (input)

// H E L L _

// O (input)

// H E L L O

// create an array of words
var words = ["earth", "toothpaste", "popcorn", "haircut", "program", "stamp", "volcano", "glove", "bird", "crown",
        "house","mountain", "river", "spell", "exercise"];

//pick a random word from the words array
var word = words[Math.floor(Math.random() * words.length)];

//sets up the answerArray to show how many letters there are using _'s
var answerArray =[];
for (var i = 0; i < word.length; i++){
    answerArray[i] = "_";
}

//create a variable to hold the number of remainingLetters to be guessed
var remainingLetters = word.length;

// *********** THE MAIN GAME LOOP****************

//While there are letters left to guessed
while(remainingLetters > 0){
        //show the player their progress; how many letters the guessed
        // alert(answerArray.join(" ")); 
        //should run in terminal not browser

        // get a guess from the player
        // var guess = prompt("Guess a letter, or click Cancel to stop playing.");

        //if the guess is blank/nothing
        if(guess == null){
            //exit the game loop
            break;
            //if the guess is more than one letter or no letters
        }else if(guess.length !== 1){
            //alert them to guess a single letter only;
            alert("Please enter a single letter.");
            //valid guess
        }else{
            //update the game state with the guess
            for(var j = 0; j < word.length; j++){
                //if the letter they guessed is in the word
                //at that point in the index
                if(word[j] === guess){
                    //update the answer array with the letter they guessed at that point or index
                    answerArray[j] = guess;
                    //subtract one of the remaining letters
                    remainingLetters--;
                }
            }
        }
        //  ***************** END OF GAME LOOP *******************

        //let the player know the word
        alert(answerArray.join(" "));
        //congratulate the player
        alert("Good job! The answer was " + word);
    }
