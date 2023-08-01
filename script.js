let choices = ["rock", "paper", "scissors"];

function getComputerChoice (){
    let randomReturn = Math.floor(Math.random()* choices.length);
    return choices[randomReturn]
}

function playRound(playerSelection, computerSelection) {   
    let winningCombinations ={
        rock: "scissors",
        paper: "rock",
        scissors: "paper"
    };
    if (!choices.includes(playerSelection)) {
        return "invalid input";
    }
    if (playerSelection === computerSelection) {
        return "tie";
    }
    if (winningCombinations[playerSelection] === computerSelection) {
        return "win";
    }
    else {
    return "lose";
    }
}

    let playerScore = 0;
    let computerScore = 0;
    const scoreDisplay = document.getElementById("results");
    const scoreProgressionDisplay = document.createElement('div');
    scoreProgressionDisplay.id = "scoreProgression";
    document.body.appendChild(scoreProgressionDisplay);
    let scoreProgression = [];


function updateScoreboard(playerScore, computerScore) {
    scoreDisplay.textContent = `Player: ${playerScore} - Computer: ${computerScore}`;
}

function announceWinner() {
    if (playerScore > computerScore){
        scoreDisplay.textContent = "Congratulations! You're the boss."
    } else if (playerScore < computerScore) {
        scoreDisplay.textContent = "Sorry, you lose. Try again."
    }
}

function handleClick(e) {
    const playerSelection = e.target.dataset.choice;
    const computerSelection = getComputerChoice();
    const roundResult = playRound(playerSelection,computerSelection)

    if (roundResult === ('win')){
        playerScore++;
    } else if (roundResult === ('lose')){
        computerScore++;
    }

    scoreProgression.push(`Player: ${playerScore} - Computer: ${computerScore}`);
    updateScoreboard(playerScore, computerScore);

    if (playerScore === 5 || computerScore ===5) {
        announceWinner();
        playerScore = 0;
        computerScore = 0;
        scoreProgression = [];
    }
}

function startGame() {
    const scoreDisplay = document.getElementById("results")
    updateScoreboard(playerScore, computerScore);

    const buttons = document.querySelectorAll('.choice');
    buttons.forEach(button => {
        button.addEventListener("click", handleClick);

        // Use arrow functions for event handlers
        button.addEventListener("mouseenter", (event) => {
            event.currentTarget.style.transform = "scale(1.1)";
        });

        button.addEventListener("mouseleave", (event) => {
            event.currentTarget.style.transform = "scale(1)";
        });
    });
}

startGame();