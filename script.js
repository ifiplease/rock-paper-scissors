function getComputerChoice (){
    let choices = ["rock", "paper", "scissors"];
    let randomReturn = Math.floor(Math.random()* choices.length);
    return choices[randomReturn]
}
    let computerSelection = getComputerChoice();
    console.log(computerSelection);

