

//Game variables
    var alphabetArr = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "y", "x", "z"];

    var letter = alphabetArr[Math.floor(Math.random() * alphabetArr.length)];

    var playerGuess = [];

    var ranLetter = ranLetter;

    console.log(letter);
 //started to try a new "begining" comand
function startGame(){
    playerGuess[letter] = letter;
    document.getElementById("displayRandomLetter").innerHTML = letter;


 var computerChoice = alphabetArr[letter];


function.onkeyup = function(event) {
    var playerGuess = event.key;
}


    if (playerGuess === ranLetter) {
        correct++;
        playerGuess = [];
    }

  var newGuess= alphabetArr[Math.floor(Math.random()*26)];
    ranLetter=newGuess;
    console.log("new guess is :" + newGuess);
}
startGame();
