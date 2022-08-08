function getComputerChoice() {
    let gestures = ["rock", "paper", "scissors"];
    let randomChoice = gestures[Math.floor(Math.random()*gestures.length)];
    return randomChoice;
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        console.log("TIE!")
    } else if (playerSelection == "rock" && computerSelection == "scissors") {
        console.log("YOU WIN! Rock beats scissors!");
    } else if (playerSelection == "paper" && computerSelection == "rock") {
        console.log("YOU WIN! Paper beats rock!");
    } else if (playerSelection == "scissors" && computerSelection == "paper") {
        console.log("YOU WIN! Scissors beats paper.");
    } else {
        console.log("You LOSE: " + playerSelection + " loses to " + computerSelection + ".");
    } 
}

function game() {
    for (let i=0; i<5;i++) {
        let playerSelection = prompt("What do you choose?");
        let computerSelection = getComputerChoice();
        playRound(playerSelection, computerSelection);
    }
    return
}

const computerSelection = getComputerChoice();

game();

// console.log(playRound(playerSelection, computerSelection));

// game(playRound(playerSelection, computerSelection));



// console.log(getComputerChoice(gestures));