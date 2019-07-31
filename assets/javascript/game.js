var answerKey = ["cowboys", "patriots", "eagles", "packers", "raiders", "giants", "browns", "steelers", "bears", "seahawks",
    "fortyniners", "broncos", "chiefs", "vikings", "redskins", "panthers", "saints", "dolphins", "jets", "bills", "cardinals", "lions",
    "falcons", "rams", "ravens", "colts", "texans", "chargers", "jaguars", "buccaneers", "bengals", "titans"];
var randomWord = "";
var hiddenWord = "";
var wins = 0;
var losses = 0;
var userGuess = "";
var guessedLetters = "";
var numGuesses = 10;

const audioContainer = document.getElementById("audioContainer");
const audioContainer2 = document.getElementById("audioContainer2");
const audioContainer3 = document.getElementById("audioContainer3");

var directionsText = document.getElementById("directions-text");
var userGuessText = document.getElementById("userguess-text");
var winsText = document.getElementById("wins-text");
var lossesText = document.getElementById("losses-text");
var leftText = document.getElementById("guessleft-text");
var hiddenArray = document.getElementById("hidden-text");
var guessArray = document.getElementById("array-text");

function setCharAt(str,index,chr) {
    if(index > str.length-1) return str;
    return str.substr(0,index) + chr + str.substr(index+1);
}
function checkForLetters(){
    if (randomWord.includes(userGuess))
    {
        for(var i=0;i<randomWord.length;i++){
            if (userGuess == randomWord[i]){
               hiddenWord = setCharAt(hiddenWord,i,userGuess);
            }
        }
    }
     else if ((hiddenWord.includes(userGuess)) || guessedLetters.includes(userGuess)) {
         console.log("letter already guessed");
         audioContainer.play();
     }
     else  {
         guessedLetters = guessedLetters + userGuess;
         numGuesses--;
         audioContainer2.play();
     }
}
function checkForWin(){
    if (hiddenWord === randomWord) {
        wins++;
        numGuesses = 10;
        guessedLetters = "";
        userGuess = "";
        hiddenWord = "";
        randomWord = answerKey[Math.floor(Math.random() * answerKey.length)];
        for (var i = 0; i < randomWord.length; i++) {
            hiddenWord = hiddenWord + "_";
        }
    }
}
function checkForLoss(){

    if (numGuesses === 0) {
        audioContainer3.play();
        losses++;
        numGuesses = 10;
        guessedLetters = "";
        userGuess = "";
        hiddenWord = "";
        randomWord = answerKey[Math.floor(Math.random() * answerKey.length)];
        for (var i = 0; i < randomWord.length; i++) {
            hiddenWord = hiddenWord + "_";
        }
    }
}
function updateScoreboard(){
    userGuessText.textContent = "You chose: " + userGuess;
    winsText.textContent = "wins: " + wins;
    lossesText.textContent = "losses: " + losses;
    leftText.textContent = "Guesses Left: " + numGuesses;
    hiddenArray.textContent = hiddenWord;
    guessArray.textContent = "Incorrect: " + guessedLetters;
}

randomWord = answerKey[Math.floor(Math.random() * answerKey.length)];
for (var i = 0; i < randomWord.length; i++) {
    hiddenWord = hiddenWord + "_";
}
hiddenArray.textContent = hiddenWord;
winsText.textContent = "wins: " + wins;
lossesText.textContent = "losses: " + losses;
userGuessText.textContent = "You chose: " + userGuess;
guessArray.textContent = "Incorrect: " + guessedLetters;


document.onkeyup = function (event) {
    userGuess = event.key.toLowerCase();

    checkForLetters();
    checkForWin();
    checkForLoss();
    updateScoreboard();
};