#! /usr/bin/env node   
////////this lines means we execute over code in anywhere//////this line also called shabang.............
import inquirer from "inquirer";
const answer = await inquirer.prompt([
    { message: "ENTER YOUR FIRST NUMBER", type: "number", name: "firstNumber" },
    { message: "ENTER YOUR SECOND NUMBER", type: "number", name: "secondNumber" },
    {
        message: "Which Operation You Want To Perform",
        type: "list",
        name: "operation",
        choices: ["ADDITION", "SUBTRACTION", "MULTIPICATI", "DIVISION", "REMINDER"],
    },
]);
if (answer.operation === "ADDITION") {
    console.log(answer.firstNumber + answer.secondNumber);
}
else if (answer.operation === "SUBTRACTION") {
    console.log(answer.firstNumber + answer.secondNumber);
}
else if (answer.operation === "MULTIPICATION") {
    console.log(answer.firstNumber * answer.secondNumber);
}
else if (answer.operation === "DIVISION") {
    console.log(answer.firstNumber / answer.secondNumber);
}
else if (answer.operation === "REMINDER") {
    console.log(answer.firstNumber % answer.secondNumber);
}
else {
    console.log("ENTER YOUR NUMBER FIRST");
}
////to run the code in npm run these commands/////////////////
///////////////////////npm login//////////
//////////////////////your package name is o be unique//////////
///////////////npm publish/////////////////////
//////////////change version 1.0.1//////////
/////run the code in terminal///////////
//////// npx aiman-second-assigment-calculator@1.0.1/////////
////points/////////........
/////////////npm is used to install and manage packages//////
//////npx is a package runner ////////
/////////Versions/////////////////
//AGAR MINOR CHANGES KANI HA TO RIGHT DIGIT CHANGE////
/////////////AGAR MAJOR CHANGES KARNI HA TO MEANS AGAR FUNCTNALITY MA CHANGES KARNI HA TO RIGHT DIGIT CHANGE
