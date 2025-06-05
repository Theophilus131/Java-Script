const prompt = require("prompt-sync")();

let counter = 1;
let Largest = 0;

 
 while(counter <= 10){

let number =Number(prompt(" Enter number  :"));
 
    if( number > Largest){

Largest = number;
}
  counter++;
}

console.log("The largest number in the group is: " + Largest);
