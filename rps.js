let playerScore = 0;
let computerScore = 0;

const container = document.querySelector('#container');
const options = document.querySelector('buttons');
const score = document.querySelector('h1');
score.textContent = `Player: ${playerScore} - Computer: ${computerScore}`

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
}

function gameScore() {
  if (playerScore < 5 || computerScore < 5) {
    score.textContent = `Player: ${playerScore} - Computer: ${computerScore}`;
  } else if (playerScore === 5) {
    resetGame();
    score.textContent = "YOU WIN! Play again.";
  } else if (computerScore === 5) {
    resetGame();
    score.textContent = "You LOSE! Play again.";
  }
}

function resetGame() {
    playerScore = 0;
    computerScore = 0;
}



window.addEventListener('keydown', function(e) {
    if (e.keyCode == 65) {
       playRound("rock", getComputerChoice()); 
    } else if (e.keyCode == 83) {
        playRound("paper", getComputerChoice()); 
    } else if (e.keyCode == 68) {
        playRound("scissors", getComputerChoice()); 
    }

    gameScore()

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

        gameScore()  
    })
});

//game();

// console.log(playRound(playerSelection, computerSelection));

// game(playRound(playerSelection, computerSelection));



// console.log(getComputerChoice(gestures));