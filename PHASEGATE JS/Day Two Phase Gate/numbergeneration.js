const prompt = require("prompt-sync")();

let subtraction = 0;

function numberGeneration(firstNumber, secondNumber){

firstNumber = Math.floor(Math.random() * 10)

secondNumber = Math.floor(Math.random() * 10)

if (firstNumber > secondNumber)

console.log(firstNumber + "-" + secondNumber)

else (firstNumber < secondNumber)
	
 	subtraction = firstNumber - secondNumber;

return subtraction
}

let count = 0;

 for(let countAns = 1; countAns <= 10; countAns++){

 console.log("input the subtraction of this two numbers: " )
 let answer = numberGeneration();

 let userinput = prompt("enter the answer to the question: " )
  
  if(answer == userinput){
  console.log("you entered the correct ans: ");
	//countAns++;
}

else if(userinput != answer)
console.log("You got the answer wrong, try again: ")
 

}

	//console.log("your final score is " +countAns )




