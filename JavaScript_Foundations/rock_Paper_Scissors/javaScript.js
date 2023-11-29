function randomNumber(number) {
    return Math.floor(Math.random() * number) + 1;
}

function getComputerChoice() {
    let computerNumber = randomNumber(3);
    let choice = "";

    switch (computerNumber) {
        case 1:
            choice = "rock";
            break;
        case 2:
            choice = "paper";
            break;
        case 3:
            choice = "scissors";
            break;
    }
    return choice;
}



function getPlayerChoice() {
    let playerChoice = prompt("rock, paper or scissors ?").toLowerCase();
    if ((playerChoice != "rock") && (playerChoice != "paper") && (playerChoice != "scissors"))  {
        alert("You have to choose rock, paper or scissors!");
        return getPlayerChoice();
    }
    return playerChoice;
}


function playRound(playerChoice, computerChoice) {
    let message = "";

    if(playerChoice === "rock") {
        if(computerChoice === "paper") {
            message = "You Lose! Paper beats Rock.";
        } else if(computerChoice === "scissors") {
            message = "You Win! Rock beats Scissors.";
        } else {
            message = "It`s a tie!";
        }
    } else if(playerChoice === "paper") {
        if(computerChoice === "rock") {
            message = "You Win! Paper beats Rock."
        } else if(computerChoice === "scissors") {
            message = "You Lose! Scissors beats Paper."
        } else {
            message = "It`s a tie!"
        }
    } else if(playerChoice === "scissors") {
        if(computerChoice === "rock") {
            message = "You Lose! Rock beats scissors."
        } else if(computerChoice === "paper") {
            message = "You Win! Scissors beats Paper."
        } else {
            message = "It`s a tie!"
        }
    }
    return message;
}



function game(){
    let playerScore = 0;
    let computerScore = 0;

    for (let i = 0; i < 5; i++){
        console.log("Round " + i)
        let computerChoice = getComputerChoice();
        let playerChoice = getPlayerChoice();
        let roundResult = playRound(playerChoice, computerChoice);   
        console.log(
            `Player: ${playerChoice} VS. Computer: ${computerChoice}`
        );
        console.log(roundResult);

        if (roundResult.search("You Win!") > -1) {
            playerScore++;
        } else if (roundResult.search("You Lose!") > -1) {
            computerScore++;
        }
    }

    console.log("*Final Results*");
    console.log(
        `PlayerScore: ${playerScore} & Computer Score: ${computerScore}`
    );

    if (playerScore < computerScore) {
        console.log("You Lose!");
    } else if (playerScore > computerScore) {
        console.log("You Win!");
    } else {
        console.log("It`s a tie!");
    }

}

game()


