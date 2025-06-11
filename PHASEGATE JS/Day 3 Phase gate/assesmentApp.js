const prompt = require("prompt-sync")();

console.log("\n >>> Semicolon Assessment App >>>");

let game = true;

while (game) {
    console.log("Pick a number between 1 to 10 (0 to exit): ");
    let userInput = Number(prompt());

    switch (userInput) {

        case 0:
            console.log("Exiting Game app");
            return;

        case 1:
            console.log("Question1: What is the capital of Nigeria?");
            console.log("A: Lagos");
            console.log("B: France");
            console.log("C: Abuja");
            console.log("D: Kano");

            let ansQuestion1 = prompt();

            if (ansQuestion1 === "C" || ansQuestion1 === "c") {
                console.log("correct answer");
            } else {
                console.log("wrong ans");
            }

            break;

        case 2:
            console.log("Question2: What is 5 + 7?");
            console.log("A: 10");
            console.log("B: 12");
            console.log("C: 15");
            console.log("D: 9");

            let ansQuestion2 = prompt();

            if (ansQuestion2 === "B" || ansQuestion2 === "b") {
                console.log("correct answer");
            } else {
                console.log("wrong ans");
            }

            break;

        case 3:
            console.log("Question6: Which continent is Egypt located in?");
            console.log("A: Africa");
            console.log("B: Europe");
            console.log("C: Asia");
            console.log("D: South America");

            let ansQuestion3 = prompt();

            if (ansQuestion3 === "A" || ansQuestion3 === "a") {
                console.log("correct answer");
            } else {
                console.log("wrong ans");
            }

            break;

      
    }
}
