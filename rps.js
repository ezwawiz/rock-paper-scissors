let playerScore = 0;
let computerScore = 0;

function getComputerChoice() {
    const gestures = ["rock", "paper", "scissors"];
    let randomChoice = gestures[Math.floor(Math.random()*gestures.length)];
    return randomChoice;
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        console.log("TIE!")
    } else if (playerSelection == "rock" && computerSelection == "scissors") {
        console.log("YOU WIN! Rock beats scissors!");
        playerScore += 1;
    } else if (playerSelection == "paper" && computerSelection == "rock") {
        console.log("YOU WIN! Paper beats rock!");
        playerScore += 1;
    } else if (playerSelection == "scissors" && computerSelection == "paper") {
        console.log("YOU WIN! Scissors beats paper.");
        playerScore += 1;
    } else {
        console.log("You LOSE: " + playerSelection + " loses to " + computerSelection + ".");
        computerScore += 1;
    } 

    console.log(playerScore);
    console.log(computerScore);

    if ((playerScore == 5) || (computerScore == 5)) {
        playerScore = 0;
        computerScore = 0;
    } 
}

// function game() {
//     let playerSelection = prompt("What do you choose?");
//     let computerSelection = getComputerChoice();

//     playRound(playerSelection.toLowerCase(), computerSelection.toLowerCase());
// }



window.addEventListener('keydown', function(e) {
    if (e.keyCode == 65) {
       playRound("rock", getComputerChoice()); 
    } else if (e.keyCode == 83) {
        playRound("paper", getComputerChoice()); 
    } else if (e.keyCode == 68) {
        playRound("scissors", getComputerChoice()); 
    }
});

const buttons = document.querySelectorAll('button');
buttons.forEach((button) => {
    button.addEventListener('click', () => {
        if (button.id == 1) {
            playRound("rock", getComputerChoice()); 
         } else if (button.id == 2) {
             playRound("paper", getComputerChoice()); 
         } else if (button.id == 3) {
             playRound("scissors", getComputerChoice()); 
         }
    })
});

//game();

// console.log(playRound(playerSelection, computerSelection));

// game(playRound(playerSelection, computerSelection));



// console.log(getComputerChoice(gestures));