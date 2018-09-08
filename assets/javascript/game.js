

//Game variables
var alphabetArr = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "y", "x", "z"];

var letter = alphabetArr[Math.floor(Math.random() * alphabetArr.length)];

var playerGuess = [];

var computerChoice = letter;

console.log(letter);
//started to try a new "begining" comand
function startGame() {
    playerGuess[letter] = letter;
    document.getElementById("displayRandomLetter").innerHTML = letter;
    console.log(computerChoice);

    document.onkeyup = function (event) {
        event.key = computerChoice
        console.log("Bring on the letters")

        if (playerGuess === computerChoice) {
            correct++;
            playerGuess = [];
        } else {
            (playerGuess !== computerChoice)
        }

        var newGuess = alphabetArr[Math.floor(Math.random() * 26)];
        computerChoice = newGuess;
        console.log("new guess is :" + newGuess);

    }
};



startGame();

