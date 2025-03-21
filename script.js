let humanScore = 0;
let computerScore = 0;

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

function getHumanChoice(){
    let choice = prompt("'rock', 'paper', or 'scissors'?").toLowerCase()
    if (choice == "rock"){
        return "rock";
    } else if (choice == "scissors"){
        return "scissors"
    } else {
        return "paper"
    }
}

function playRound(){
    comp = getComputerChoice()
    hum = getHumanChoice()

    if (comp == hum){
        console.log(comp + " vs " + hum + "! Draw!")
    } else if (comp == "rock"){
        if (hum == "paper"){
            console.log(comp + " vs " + hum + "! Loose!")
            ++computerScore
        } else {
            console.log(comp + " vs " + hum + "! Win!")
            ++humanScore

        }
    } else if (comp == "paper"){
        if (hum == "rock"){
            console.log(comp + " vs " + hum + "! Loose!")
            ++computerScore
        } else {
            console.log(comp + " vs " + hum + "! Win!")
            ++humanScore
        }
    } else if (comp == "scissors"){
        if (hum == "rock"){
            console.log(comp + " vs " + hum + "! Loose!")
            ++computerScore
        } else {
            console.log(comp + " vs " + hum + "! Win!")
            ++humanScore
        }
    }
}

function playGame(){
    playRound()
    playRound()
    playRound()
    playRound()

    console.log("Human: " + humanScore)
    console.log("Computer: " + computerScore)

    if (humanScore < computerScore){
        alert("You Lost!");
    }else if (humanScore > computerScore){
        alert("You Won!");
    } else {
        alert("ITS A DRAW!")
    }
}

playGame()