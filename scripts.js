let playerWins = 0;
let computerWins = 0;

function playerSelection() {
    let playerQuestion = prompt("Rock, Paper, or Scissors?");
    let playerQuestionLower = playerQuestion.toLowerCase();
    return playerQuestionLower;
}

function computerSelection() {
    let computerPicks = ["rock", "paper", "scissors"]
    return computerPicks[Math.floor(Math.random()*computerPicks.length)];
}

function gameRound(playerSelection, computerSelection) {
    if (playerSelection === "rock" && computerSelection === "scissors") {
        ++playerWins;
        alert("Rock beats Scissors! You Win!");
    } else if (playerSelection === "rock" && computerSelection === "paper") {
        ++computerWins;
        alert("Rock gets covered by Paper! You Lose!");
    } else if (playerSelection === "rock" && computerSelection === "rock") {
        alert("Rock can't smash Rock! It's a tie!");
    } else if (playerSelection === "paper" && computerSelection === "scissors") {
        ++computerWins;
        alert("Paper gets cut by Scissors! You Lose");
    } else if (playerSelection === "paper" && computerSelection === "paper") {
        alert("Paper can't cover Paper! It's a tie!");
    } else if (playerSelection === "paper" && computerSelection === "rock") {
        ++playerWins;
        alert("Paper covers Rock! You win!");
    } else if (playerSelection === "scissors" && computerSelection === "scissors") {
        alert("Scissors can't cut Scissors! It's a tie!");
    } else if (playerSelection === "scissors" && computerSelection === "rock") {
        ++computerWins;
        alert("Scissors gets smashed by Rock! You Lose!");
    } else if (playerSelection === "scissors" && computerSelection === "paper") {
        ++playerWins;
        alert("Scissors cuts Paper! You win!");
    } else {
        alert("What?");
    }
}


while (playerWins < 6 || computerWins < 6) {
    gameRound(playerSelection(), computerSelection());
    console.log(playerWins, computerWins);
    if (playerWins === 5 || computerWins === 5) {
        break;
    }
}


// gameRound(playerSelection(), computerSelection());


/* 
if (playerSelection === "rock" && computerSelection === "scissors") {
        alert("Rock beats Scissors! You Win!");
    } else if (playerSelection === "rock" && computerSelection === "paper") {
        alert("Rock gets covered by Paper! You Lose!");
    } else if (playerSelection === "rock" && computerSelection === "rock") {
        alert("Rock can't smash Rock! It's a tie!");
    } else if (playerSelection === "paper" && computerSelection === "scissors") {
        alert("Paper gets cut by Scissors! You Lose");
    } else if (playerSelection === "paper" && computerSelection === "paper") {
        alert("Paper can't cover Paper! It's a tie!");
    } else if (playerSelection === "paper" && computerSelection === "rock") {
        alert("Paper covers Rock! You win!");
    } else if (playerSelection === "scissors" && computerSelection === "scissors") {
        alert("Scissors can't cut Scissors! It's a tie!");
    } else if (playerSelection === "scissors" && computerSelection === "rock") {
        alert("Scissors gets smashed by Rock! You Lose!");
    } else if (playerSelection === "scissors" && computerSelection === "paper") {
        alert("Scissors cuts Paper! You win!");
    } else {
        alert("What?");
    }


    if (playerSelection === "rock" && computerSelection === "scissors") {
        ++playerWins;
        alert("Rock beats Scissors! You Win!");
    } else if (playerSelection === "rock" && computerSelection === "paper") {
        ++computerWins;
        alert("Rock gets covered by Paper! You Lose!");
    } else if (playerSelection === "rock" && computerSelection === "rock") {
        alert("Rock can't smash Rock! It's a tie!");
    } else if (playerSelection === "paper" && computerSelection === "scissors") {
        ++computerWins;
        alert("Paper gets cut by Scissors! You Lose");
    } else if (playerSelection === "paper" && computerSelection === "paper") {
        alert("Paper can't cover Paper! It's a tie!");
    } else if (playerSelection === "paper" && computerSelection === "rock") {
        ++playerWins;
        alert("Paper covers Rock! You win!");
    } else if (playerSelection === "scissors" && computerSelection === "scissors") {
        alert("Scissors can't cut Scissors! It's a tie!");
    } else if (playerSelection === "scissors" && computerSelection === "rock") {
        ++computerWins;
        alert("Scissors gets smashed by Rock! You Lose!");
    } else if (playerSelection === "scissors" && computerSelection === "paper") {
        ++playerWins;
        alert("Scissors cuts Paper! You win!");
    } else {
        alert("What?");
    }
*/