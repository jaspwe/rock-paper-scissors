let humanScore = 0;
let computerScore = 0;
const disout = document.querySelector(".display");
const humScrBoard = document.querySelector("#humanScore");
const comScrBoard = document.querySelector("#computerScore");

humScrBoard.textContent = humanScore;
comScrBoard.textContent = computerScore;
disout.textContent = "test";

function getComputerChoice(){
    let choice = Math.random();
    if (choice >= 0.33){
        if (choice >= 0.66){
            return "rock";
        } else {
            return "scissors";
        }
    } else {
        return "paper";
    }
}

function playRound(choice){
    comp = getComputerChoice()
    hum = choice;

    if (comp == hum){
        disout.textContent = comp + " vs " + hum + "! Draw!"
    } else if (comp == "rock"){
        if (hum == "scissors"){
            disout.textContent = comp + " vs " + hum + "! Loose!"
            ++computerScore
        } else {
            disout.textContent = comp + " vs " + hum + "! Win!"
            ++humanScore

        }
    } else if (comp == "paper"){
        if (hum == "rock"){
            disout.textContent = comp + " vs " + hum + "! Loose!"
            ++computerScore
        } else {
            disout.textContent = comp + " vs " + hum + "! Win!"
            ++humanScore
        }
    } else if (comp == "scissors"){
        if (hum == "paper"){
            disout.textContent = comp + " vs " + hum + "! Loose!"
            ++computerScore
        } else {
            disout.textContent = comp + " vs " + hum + "! Win!"
            ++humanScore
        }
    }
    humScrBoard.textContent = humanScore;
    comScrBoard.textContent = computerScore;
}

function playGame(){
    let round = 0;
    const buttons = document.querySelectorAll("button");
    buttons.forEach((button) => {
        button.addEventListener("click", function() {
            let choice = button.id;
            playRound(choice)
            round++;
            if (round == 5){
                endGame();
                round = 0;
            }
        });
    })
}

function endGame(){

    if (humanScore < computerScore){
        disout.textContent = "You Lost!";
    }else if (humanScore > computerScore){
        disout.textContent = "You Won!";
    } else {
        disout.textContent = "ITS A DRAW!";
    }
    humanScore = 0;
    computerScore = 0;
}

playGame();