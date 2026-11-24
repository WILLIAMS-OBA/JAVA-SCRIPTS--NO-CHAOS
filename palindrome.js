const prompt = require("prompt-sync")()

let UserWord = prompt("Enter a word: ") ;

let letters = ""

for (character of UserWord){

    letters += character;

}

if (letters === UserWord){

console.log(UserWord, "is Palindrome")

}

else console.log(UserWord, " is not a palindrome")


console.log(typeof UserWord)
