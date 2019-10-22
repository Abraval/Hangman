//declaring var-s

//array of names
var names = ["Dobby", "Harry", "Luna", "Albus", "Sirius", "Ginny", "Voldemort", "Draco"]

//we start the game with o wins and 13 guesses
var wins = 0;
document.querySelector("#winsText").innerHTML = wins;
var guesses = 10;

//array of letters already guessed
var lettersGuessed = [];
var currentWord;
var under = [];

function setGame() {
    currentWord = names[Math.floor(Math.random() * names.length)].toLowerCase();
    guesses = 10;
    under=[];
    for (i = 0; i < currentWord.length; i++) {
        under.push(" _ ");
    }
    document.querySelector("#underscores").innerHTML = under;
    document.querySelector("#guessesText").innerHTML = guesses;
    lettersGuessed = [];
    document.querySelector("#guessedLettersText").innerHTML = lettersGuessed;
    
}
 setGame();

// get user input
document.onkeyup = function (event) {
    if (guesses < 1) {
        alert("GAME OVER!")
        setGame();
        
        return;
    }

    
    var userInput = event.key;
    console.log(userInput)
    if ((userInput >= 'a' && userInput <= 'z') || (userInput >= 'A' && userInput <= 'Z')) {
        if (currentWord.indexOf(userInput) > -1) {
            for (var i = 0; i < currentWord.length; i++) {
                if (userInput === currentWord[i]) {
                    under[i] = userInput;
                    console.log(under);
                }
            }
            lettersGuessed.push(userInput);
            document.querySelector("#guessedLettersText").innerHTML = lettersGuessed;
            document.querySelector("#underscores").innerHTML = under;
            --guesses;
            document.querySelector("#guessesText").innerHTML = guesses;
        } else {
            lettersGuessed.push(userInput);
            document.querySelector("#guessedLettersText").innerHTML = lettersGuessed;
            --guesses;
            document.querySelector("#guessesText").innerHTML = guesses;
        }
        // var alert1 = setTimeout(function() {
        //     alert("YOU WON!");
        // }, 1000);
        if (under.includes(" _ ") == false) {
            var alert1 = setTimeout(function() {
                alert("YOU WON!");} , 200);
            alert1;
            wins++;
            document.querySelector("#winsText").innerHTML = wins;
            setGame();
               
        }


    }
    // if (currentWord = under && under.length > 1) {
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