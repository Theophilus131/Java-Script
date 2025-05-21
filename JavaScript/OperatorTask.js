let left_operand = 10;

let right_operand = 12;
let operators = "-"; 
let ans = 0;

if(operators == ("+")){
ans = left_operand + right_operand

}
else if(operators == ("-")){
ans = right_operand - left_operand

}
else if(operators == ("*")){

ans = right_operand * left_operand
}
else if(operators == ("/")){

ans =right_operand / left_operand
} 
else{ 
ans = NaN
}

console.log(ans);