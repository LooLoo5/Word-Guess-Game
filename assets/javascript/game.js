prompt("Press any key to start the game!");


    var alphabetArr = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "y", "x", "z"];

    var letter = alphabetArr[Math.floor(Math.random() * alphabetArr.length)];

    var incorrectLetter = [0];

    var correctLetter = [0];

    var remainingGuesses = 15;

    document.onkeyup = function(event){
        var userGuess= event.key;
    }

    for (var z = 0; z < alphabetArr; z++) {
        if (userGuess === letter);
        alert("Good Guess!")
    
    }

