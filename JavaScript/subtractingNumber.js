const prompt = require("prompt-sync")();

function numberGeneration() {
    let firstNumber = Math.floor(Math.random() * 10);
    let secondNumber = Math.floor(Math.random() * 10);

    if (firstNumber < secondNumber) {
      let temp = firstNumber;
	firstNumber = secondNumber;
	secondNumber = temp;
    }

    console.log(firstNumber + " - " + secondNumber);
    return firstNumber - secondNumber;
}

let score = 0;

for (let i = 1; i <= 10; i++) {
    console.log("Question " + i + ": What is the result of:");


    let answer = numberGeneration();
    let userInput = Number(prompt("Enter your answer: "));

	if(userInput == answer){
	console.log("Correct!\n");
	score++;
	}

	else{ console.log("Wrong answer. The correct answer was: " + answer + "\n");}

   }
console.log("You got " + score + " out of 10 questions correct.");

