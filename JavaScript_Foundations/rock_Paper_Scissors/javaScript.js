//bind html elements
const choiceBtns = document.querySelectorAll(".choiceBtn");
const playerScoreBoard = document.getElementById("playerScoreBoard");
const playerChoiceText = document.getElementById("playerChoiceText");
const computerScoreBoard = document.getElementById("computerScoreBoard");
const computerChoiceText = document.getElementById("computerChoiceText");
const roundMessage = document.getElementById("roundMessage");
const endgameMessage = document.getElementById("endgameMessage");
const resetBtn = document.getElementById("resetBtn");
const endgameModal = document.getElementById("endgameModal");

//bind listeners
resetBtn.addEventListener('click', resetGame)

// playerScore, computerScore and roundWinner variables 
let playerScore = 0;
let computerScore = 0; 
let roundWinner = "";
const startMessage = "First to score 5 points wins the game";
roundMessage.textContent = startMessage;

//function that returns a random number
function randomNumber(number) {
    return Math.floor(Math.random() * number) + 1;
}

//function that randomly returns ROCK, PAPER or SCISSORS
function getComputerChoice() {
    let computerNumber = randomNumber(3);
    let choice = "";

    switch (computerNumber) {
        case 1:
            choice = "ROCK";
            break;
        case 2:
            choice = "PAPER";
            break;
        case 3:
            choice = "SCISSORS";
            break;
    }
    return choice;
}

// function that plays one round
function playRound(playerChoice, computerChoice) {
    if(playerChoice === computerChoice) {
        roundWinner = "tie"
    }
    if(
        (playerChoice === "ROCK" && computerChoice === "SCISSORS") ||
        (playerChoice === "SCISSORS" && computerChoice === "PAPER") ||
        (playerChoice === "PAPER" && computerChoice === "ROCK")
    ) {
        playerScore++
        roundWinner = "player"
    }
    if(
        (computerChoice === "ROCK" && playerChoice === "SCISSORS") ||
        (computerChoice === "SCISSORS" && playerChoice === "PAPER") ||
        (computerChoice === "PAPER" && playerChoice === "ROCK") 
    ) {
        computerScore++
        roundWinner = "computer"
    }
}

function isGameOver() {
    return playerScore === 5 || computerScore === 5
}


choiceBtns.forEach(button => button.addEventListener("click", () => {
    let playerChoice = button.textContent;
    let computerChoice = getComputerChoice();
    playRound(playerChoice, computerChoice);
    updateHtml(playerChoice, computerChoice);
    if(isGameOver()) {
        setFinalMessage();
        // Pop up
        openEndgameModal();
    } else {
        //clear game message
        endgameMessage.textContent = "";
    }
}));

function updateHtml(playerChoice, computerChoice){
    playerChoiceText.textContent = playerChoice;
    computerChoiceText.textContent = computerChoice;
    if(roundWinner === "tie") {
        roundMessage.textContent = "It`s a tie!"
    } else if(roundWinner === "player") {
        roundMessage.textContent = "You won!"
    } else if(roundWinner === "computer") {
        roundMessage.textContent = "You lost!"
    }
    playerScoreBoard.textContent = `Player: ${playerScore}`;
    computerScoreBoard.textContent = `Computer: ${computerScore}`;    
}
 
function setFinalMessage() {
    return playerScore > computerScore
    ? (endgameMessage.textContent = "You beat the computer!")
    : (endgameMessage.textContent = "You lost to the computer!")
}

function resetGame () {
    playerScore = 0;
    computerScore = 0; 
    roundWinner = "";
    updateHtml("?", "?");
    closeEndgameModal();
    roundMessage.textContent = startMessage;
}

function openEndgameModal() {
    endgameModal.style.display = "flex";
  }
  
  function closeEndgameModal() {
    endgameModal.style.display = "none";

  }