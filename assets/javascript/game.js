prompt("Press any key to start the game!")

var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "y", "x", "z"];

var flowerTypeArr = ["carnation", "dahlila", "rose", "daisy", "lily", "orchids", "hydrangea", "iris", "daffodil", "buttercup", "lavender"]; 

var flowerType = flowerTypeArr[Math.floor(Math.random() * flowerTypeArr.length)];

var incorrectLetter = [];

var correctLetter = [];

var remainingGuesses = flowerType.length;

var currentWord = [];

document.addEventListener("keyup", function(event);

function initialize() {
    for (var x = 0; x < flowerType.length; x++ );
    currentWord[z] = "_";
}

function gameOver() {
    if (incorrectLetter)
}

function letter() {
    var letter = document.getElementById("letter").value;
  
    if (letter.length > 0) {
      for (var x = 0; x < flowerType.length; x ++) {
        if (flowerype[x] === letter) {
          currentWord[x] = letter;
        }
      }
    }
}  
