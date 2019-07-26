var answerKey = ["words", "letters", "theme"];
var randomWord;
var hiddenWord;
var wins = 0;
var losses = 0;
var userGuess;
var guessedLetters = "";
var numGuesses = 10;

var directionsText = document.getElementById("directions-text");
var userGuessText = document.getElementById("userguess-text");
var winsText = document.getElementById("wins-text");
var lossesText = document.getElementById("losses-text");
var leftText = document.getElementById("guessleft-text");
var hiddenArray = document.getElementById("hidden-text");
var guessArray = document.getElementById("array-text");

var randomWord = answerKey[Math.floor(Math.random() * answerKey.length)];

document.onkeyup = function (event) {
    var userGuess = event.key;

    
};




userGuessText.textContent = "You chose: " + userGuess;
winsText.textContent = "wins: " + wins;
lossesText.textContent = "losses: " + losses;
leftText.textContent = "Guesses Left: " + numGuesses;
hiddenArray.textContent = hiddenWord;
guessArray.textContent = "Guessed Letters: " + guessedLetters;