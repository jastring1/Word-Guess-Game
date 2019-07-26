var answerKey = ["words", "letters", "theme"];
var randomWord;
var hiddenWord = "";
var wins = 0;
var losses = 0;
var userGuess;
var guessedLetters = "";
var numGuesses = 10;

var invalidSound = new Audio("buzzer.mp3");
var correctSound = new Audio("bell.mp3");


var directionsText = document.getElementById("directions-text");
var userGuessText = document.getElementById("userguess-text");
var winsText = document.getElementById("wins-text");
var lossesText = document.getElementById("losses-text");
var leftText = document.getElementById("guessleft-text");
var hiddenArray = document.getElementById("hidden-text");
var guessArray = document.getElementById("array-text");

randomWord = answerKey[Math.floor(Math.random() * answerKey.length)];
for (i = 0; i < randomWord.length; i++) {
    hiddenWord = hiddenWord + "_";
}
hiddenArray.textContent = hiddenWord;
winsText.textContent = "wins: " + wins;
lossesText.textContent = "losses: " + losses;
userGuessText.textContent = "You chose: " + userGuess;
guessArray.textContent = "Incorrect Letters: " + guessedLetters;


document.onkeyup = function (event) {
    userGuess = event.key;

    if ((hiddenWord.includes(userGuess)) || guessedLetters.includes(userGuess)) {
        console.log("letter already guessed");
    }
    else {
        if (randomWord.includes(userGuess) === false) {
            guessedLetters = guessedLetters + userGuess;
            numGuesses--;
        }
        if (randomWord.includes(userGuess)) {
        
            /*
            for (i = 0; i < randomWord.length; i++) {
                if (userGuess === randomWord[i]) {
                    hiddenWord[i] = randomWord[i];
                }
            }*/
        }


    }
    if (numGuesses === 0) {
        losses++;
        numGuesses = 10;
        guessedLetters = "";
        userGuess="";
        hiddenWord="";
        randomWord = answerKey[Math.floor(Math.random() * answerKey.length)];
        for (i = 0; i < randomWord.length; i++) {
            hiddenWord = hiddenWord + "_";
        }
        

    }



    userGuessText.textContent = "You chose: " + userGuess;
    winsText.textContent = "wins: " + wins;
    lossesText.textContent = "losses: " + losses;
    leftText.textContent = "Guesses Left: " + numGuesses;
    hiddenArray.textContent = hiddenWord;
    guessArray.textContent = "Incorrect Letters: " + guessedLetters;

};