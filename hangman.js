const PossibleWords = ["obdurate", "versimilitude", "dissonant", "obsequious", "capitulate", "deleterious", "enervate", "gregarious"];

let newGame = function(){

var randomIndex =parseInt(Math.random() * PossibleWords.length);
let word= PossibleWords[randomIndex];
console.log("Word Chosen :", word);



let clueString = "";
for (let i = 0; i < word.length; i++) {
    clueString += "_ ";
}
let clue = document.getElementById("clue");
clue.textContent = clueString;
}