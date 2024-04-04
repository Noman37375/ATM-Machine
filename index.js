#! /usr/bin/env node
import inquirer from "inquirer";
let currentBalance = 100000000;
let yourPin = 37375;
let correctPin = await inquirer.prompt([
    {
        type: "number",
        name: "pin",
        message: "Please enter your pin number",
    },
]);
if (correctPin.pin === yourPin) {
    console.log("You have entered Correct Pin");
    let mainMenu = await inquirer.prompt([
        {
            type: "list",
            name: "action",
            message: "What would you like to do?",
            choices: ["Check Balance", "Withdraw", "Fast Cash"],
        },
    ]);
    if (mainMenu.action === "Check Balance") {
        console.log(currentBalance);
    }
    else if (mainMenu.action === "Withdraw") {
        let withdrawAmount = await inquirer.prompt([
            {
                type: "number",
                name: "amount",
                message: "How much would you like to withdraw?",
            },
        ]);
        if (withdrawAmount.amount < currentBalance) {
            let remainingBalance = currentBalance - withdrawAmount.amount;
            console.log(`Your Remaining balance is$ ${remainingBalance}`);
        }
        else {
            console.log("You  don't have sufficient funds in your account.");
        }
    }
    else if (mainMenu.action == "Fast Cash") {
        let fastcash = await inquirer.prompt([
            {
                type: "list",
                name: "how_much",
                message: "Choose the  amount for Fast cash",
                choices: [100, 500, 1000, 10000],
            },
        ]);
        if (fastcash.how_much < currentBalance) {
            let remainingAmount = currentBalance - fastcash.how_much;
            console.log(`Your Remaining balance is$ ${remainingAmount}`);
        }
        else {
            console.log("You  don't have sufficient funds in your account.");
        }
    }
}
else {
    console.log("You have entered Wrong pin");
}
