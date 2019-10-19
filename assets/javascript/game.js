//declaring var-s

//array of names
var names = ["Dobby", "Harry", "Luna", "Albus", "Sirius", "Ginny", "Voldemort", "Draco"]

//we start the game with o wins and 13 guesses
var wins = 0;
var guesses = 10;

//array of letters already guessed
var lettersGuessed = [];

//let's randomly pick a word

var currentWord = names[Math.floor(Math.random() * names.length)].toLowerCase();
console.log(currentWord);
console.log(currentWord.length);

//create a number of underscores based on number of letters
var under = [];

for (i = 0; i < currentWord.length; i++) {
    under.push("_");
}
console.log(under);
document.querySelector("#underscores").innerHTML = under;
document.querySelector("#guessesText").innerHTML = guesses;

// get user input
document.onkeyup = function (event) {
    if (guesses < 1) {
        alert("GAME OVER!")
        wins = 0;
        guesses = 10;
        currentWord = names[Math.floor(Math.random() * names.length)].toLowerCase();
        console.log(currentWord);
        under = [];
        for (i = 0; i < currentWord.length; i++) {
            under.push("_");
        }
        document.querySelector("#underscores").innerHTML = under;
        lettersGuessed = [];
        document.querySelector("#guessedLettersText").innerHTML = lettersGuessed;
        return;
    }
    var userInput = event.key;
    console.log(userInput)
    if ((userInput >= 'a' && userInput <= 'z') || (userInput >= 'A' && userInput <= 'Z')) {
        if (currentWord.indexOf(userInput) > -1) {
            for (var i = 0; i < currentWord.length; i++) {
                if (userInput === currentWord[i]) {
                    under[i] = userInput;
                    lettersGuessed.push(userInput);
                    
                    console.log(under);
                }
                document.querySelector("#guessedLettersText").innerHTML = lettersGuessed;
            }
            document.querySelector("#underscores").innerHTML = under;
            --guesses;
            document.querySelector("#guessesText").innerHTML = guesses;
        } else {
            lettersGuessed.push(userInput);
            document.querySelector("#guessedLettersText").innerHTML = lettersGuessed;
            --guesses;
            document.querySelector("#guessesText").innerHTML = guesses;
        }



    }
    // if ((currentWord = under) && (under.match(/[a-z]/i))) {
    //     alert("WINNER!")
    //     wins++;
    //     guesses = 10;
    //     currentWord = names[Math.floor(Math.random() * names.length)].toLowerCase();
    //     console.log(currentWord);
    //     under = [];
    //     for (i = 0; i < currentWord.length; i++) {
    //         under.push("_");
    //     }
    //     document.querySelector("#underscores").innerHTML = under;
    //     lettersGuessed = [];
    //     document.querySelector("#guessedLettersText").innerHTML = lettersGuessed;
    //     return;

    // }

    else {
        alert("Pick a letter!");

    }
}



//pseudo

//check if user input matches one of the letters in current words
    //if yes
//*replace corresponding underscore with the correct letter(s)
//*update guessed letters 
//*reduce remaining guesses by 1
    //if no
//*update guessed letters 
//*reduce remaining guesses by 1
    //if user presses a key that not a letter - display error alert

//do that until either:

    //the word is guessed than 
        //*increase wins by 1 
        //*display congratulation alert
        //*display a picture of character
        //reset the game
    //user runs out of guesses than
        //*display Game Over
        //*reset the game
        //---------------
       // .include or .index of
