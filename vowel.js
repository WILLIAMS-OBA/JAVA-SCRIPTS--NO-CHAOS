const prompt = require("Prompt-sync")();

let word = prompt("Enter a word: ");
    
let count = 0

let vowels="aeiouAEIOU"
    
for (char of word){

for (count_of_vowel in vowels){

if (char == count_of_vowel){

count+=1

return count

}

}

}
