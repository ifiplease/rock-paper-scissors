// let choices = ["rock", "paper", "scissors"];

// function getComputerChoice (){
//     let randomReturn = Math.floor(Math.random()* choices.length);
//     return choices[randomReturn]
// }
//     function playRound(playerSelection, computerSelection) {
//         playerSelection = playerSelection.toLowerCase();
        
//         let winningCombinations ={
//             rock: "scissors",
//             paper: "rock",
//             scissors: "paper"
//         };
//         if (!choices.includes(playerSelection)) {
//             return "invalid input";
//         }
//         if (playerSelection === computerSelection) {
//             return "It's a tie!";
//         }
//         if (winningCombinations[playerSelection] === computerSelection) {
//             return "You win!" + playerSelection + "beats" + computerSelection
//         }
//         else 
//         return "You lose!" + computerSelection + "beats" + playerSelection
//     }

//     function game() {
//         let playerScore = 0;
//         let computerScore = 0;

//         for (let i= 0; i < 5; i++) {
//             let computerSelection = getComputerChoice();
//             console.log(computerSelection);

//             while (true) {
//                 playerSelection = prompt('Enter your choice (rock, paper, or scissors):');
//                 if (choices.includes(playerSelection)) {
//                     break;
//                 } else {
//                     console.log("Invalid input. Please try again.");}
//             }
                
//             let roundResult = playRound(playerSelection,computerSelection);
//             console.log(roundResult);

//             if (roundResult.includes('win')){
//                 playerScore++;
//             } else if (roundResult.includes('lose')){
//                 computerScore++;
//             }
//         }

//         if (playerScore > computerScore){
//             console.log("Congratulations! You're the boss.")
//         } else if (playerScore < computerScore) {
//             console.log("Sorry, you lose. Try again.")
//         }
//     }
// game();