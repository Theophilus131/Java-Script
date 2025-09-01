
const display = document.getElementById("display");

function appendToDisplay(input){
    display.value += input;
}

function clearDisplay(){
    display.value = "";
}

function calculateResult(){
    try{
        const result = eval(display.value);
        display.value = result;
    }
    catch(error){
        alert("Invalid Expression");
    }   
}