document.onload = function(event){
    console.log("I'm loaded, brosky");
    document.prompt("Press any key to start the game!");
    
    
    var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "y", "x", "z"];
    
    var flowerTypeArr = ["carnation", "dahlila", "rose", "daisy", "lily", "orchids", "hydrangea", "iris", "daffodil", "buttercup", "lavender"]; 
    
    var flowerType = flowerTypeArr[Math.floor(Math.random() * flowerTypeArr.length)];
    
    var incorrectLetter = [];
    
    var correctLetter = [];
    
    var remainingGuesses = flowerType.length;
    
    var currentWord = [];

    var word;
    
    
    document.addEventListener("keyup", function(event){
        console.log("you pressed a key"+ event.key);
        var userG = event.key //we have whatever user guessed

        if (userG === flowerType.charAt(1)){
            //do something
        }

        //want to get the first character of what comp answer is THEN compare  to user
    });
    
    function initialize() {
        for (var x = 0; x < flowerType.length; x++ ){
            currentWord[x] = "_";
            word = currentWord.join(" ");
        

        }

    }



    initialize();
    
    
    function gameOver() {
        if (incorrectLetter){
            //do something
        }
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
    
}