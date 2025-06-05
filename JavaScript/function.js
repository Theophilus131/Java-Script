//1. function declaration
//2. function expression

/*
greet();

function greet(){
	
	let reply = "hello"
	return reply
};
*/

/*
const greet = function(){
 let reply = "hello"
 return reply
}
console.log(greet());
*/

let userName ="ugbo";
let number = 12;

const greet = function(numberOne, name){

let concat = numberOne +" "+name

	return concat  
};

console.log(greet(number, userName));