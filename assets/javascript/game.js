prompt("Press any key to start the game!");

//Game variables
    var alphabetArr = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "y", "x", "z"];

    var letter = alphabetArr[Math.floor(Math.random() * alphabetArr.length)];

    var playerGuess = 0;

    var ranLetter = ranLetter;

prompt("Guess What Letter I am Thinking of!");

element.onkeyup = function (event) {
    var playerGuess = keyWasPressed;
}


    if (playerGuess === ranLetter) {
        correct++;
        playerGuess = [];
    }

  var newGuess= alphabetArr[Math.floor(Math.random()*26)];
    ranLetter=newGuess;
    console.log("new guess is :" + newGuess);

