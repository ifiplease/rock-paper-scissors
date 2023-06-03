function getComputerChoice (){
    let choices = ["rock", "paper", "scissors"];
    let randomReturn = Math.floor(Math.random()* choices.length);
    return choices[randomReturn]
}
    let computerSelection = getComputerChoice();
    console.log(computerSelection);

    function playRound(playerSelection, computerSelection) {
        playerSelection = playerSelection.toLowerCase();
        
        let winningCombinations ={
            rock: "scissors", paper: "rock", scissors: "paper"
        };
        if (playerSelection === computerSelection) {
            return "It's a tie!";
        }
        if (winningCombinations[playerSelection] === computerSelection) {
            
        }
    }

