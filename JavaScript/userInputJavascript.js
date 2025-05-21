const prompt = require("prompt-sync")();

let operator = prompt("chose + to add, - to subtract, / to divide and * to multiply :");

let left_operand = Number(prompt("enter a number: "));

let right_operand = Number(prompt("enter a number: "));

let ans = 0;

switch(operator){
 	 case '+' : 
		console.log("you choose add: ")
		ans = left_operand + right_operand
                  console.log(ans)
			break;
	case '-' : 
		console.log("you choose subtract: ")
		ans = left_operand - right_operand
                  console.log(ans)
			break;
	case '*' : 
		console.log("you choose multiply: ")
		ans = left_operand * right_operand
                  console.log(ans)
			break;
	case '/' : 
		console.log("you choose divide: ")
		ans = left_operand / right_operand
                  console.log(ans)
			break;


default: ans = "NaN"
	console.log(ans)
}