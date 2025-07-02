function student(){
let scores = [90, 60, 70,40,90,30]

let new_array = []

for(let index = 0; index < scores.length; index++){
    if(scores[index] >= 50){
        new_array.push(scores[index])
    }

}
return new_array;

}

console.log(student())