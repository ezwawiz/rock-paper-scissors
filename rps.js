function getComputerChoice(gestures) {
    let randomChoice = gestures[Math.floor(Math.random()*gestures.length)];
    return randomChoice;
}

function playRound(playerSelection, computerSelection) {
    if (computerSelection == "rock") {
        console.log("TIE!")
    } else if (computerSelection == "paper") {
        console.log("You LOSE. Paper beats rock!");
    } else if (computerSelection == "scissors") {
        console.log("YOU WIN! Rock beats paper.")
    }
}

function game() {
    for (let i=0; i<5;i++) {
        playRound(playerSelection, computerSelection);
    }
    return
}

let gestures = ["rock", "paper", "scissors"];

const playerSelection = "rock";
const computerSelection = getComputerChoice(gestures);

game(playRound(playerSelection, computerSelection));



console.log(getComputerChoice(gestures));