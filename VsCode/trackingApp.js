
function trackingApp(){
let number = [0,1,2,3,4,5,6,7]
let new_array = [];

for(let index = 0; index < number.length; index++){
 if(number[index] > 0 && number[index] < 6){
    new_array.push(number[index])
}
    }
    return new_array;
}

console.log(trackingApp())