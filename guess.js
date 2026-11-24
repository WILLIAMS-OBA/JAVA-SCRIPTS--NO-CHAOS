const prompt = require('prompt-sync')();

let attempt = 5, secret = 50;

while(attempt >= 1 ){
	
	let number = Number(prompt("Guess a number from 1 to 100: "))
	
	if(number == secret){
	attempt++
		
		console.log("Congrats you won!!!")
	}
	else{
	
	attempt--
	
	console.log(`Try again oga, you still have ${attempt} attempts`)
	
	
	
	}
	
}
