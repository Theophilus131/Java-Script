const prompt = require("prompt-sync")();

let subtraction = 0;

function numberGeneration(firstNumber, secondNumber){

firstNumber = Math.floor(Math.random() * 10)
secondNumber = Math.floor(Math.random() * 10)


if (firstNumber < secondNumber){
let temp = firstNumber;
firstNumber = secondNumber;
secondNumber = temp;}

   console.log(firstNumber + " - " + secondNumber);
    return firstNumber - secondNumber;
}

let countAns = 0;

 for(let count = 1; count <= 10; count++){

console.log("Input " + count + ": the subtraction of these two numbers:\n");

 let answer = numberGeneration();
 let userinput = prompt("enter the answer to the question:" );
  

  if(answer == userinput){
  console.log("you entered the correct ans: ");
	countAns++;
}

else{console.log("you got it wrong, the answer to the question is: " + answer + "\n" );}
}

console.log("You got " + countAns + " out of 10 questions correct.");





