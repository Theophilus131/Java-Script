let array = [2, 3, 4, 5, 6];

/*
for(let index = 0; index < array.length; index++){

	console.log(array[index])
}


// similar to enhance for loop in java
for(let number of array){

	console.log(number)
}

*/

let obj = {
 color: "blue",

 age : 12,
 
 isValid : true
};


for(let key in obj){
	console.log(obj[key])
           };


	for(let index in array){
	console.log(" I am the index of the arr",   index)
	console.log(" I am the value of the arr",   [index])
};
