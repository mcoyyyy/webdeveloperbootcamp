//create secretNumber
var secretNumber = 4;
//ask user for guess
var stringGuess = prompt("Guess a number!");
var guess = Number(stringGuess);
//check if guess is right
if(guess == secretNumber){
  alert("Your guess is right!");
}
//check if guess is higher
else if (guess > secretNumber){
  alert("Too high. Guess again")
}
//check if huess is lower
else{
  alert("Too low. Guess again")
}
