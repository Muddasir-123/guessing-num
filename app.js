#! /usr/bin/env node 
import inquirer from "inquirer";
let randomNumber = Math.floor(Math.random() * 10 + 1);
let answer = await inquirer.prompt([
    {
        name: "userGuessNumber",
        type: "number",
        message: "Guess a number for login between 1-10:",
    },
]);
if (isNaN(answer.userGuessNumber)) {
    console.log("Please select a valid number.");
}
else if (answer.userGuessNumber === randomNumber) {
    console.log(`Congratulations! You guessed correct number ${randomNumber}, and now you are logged in.`);
}
else {
    console.log(`Unfortunately, you entered the wrong number. The correct number was ${randomNumber}.`);
}
;
