// choice from computer
function getcomputerChoice(){
    let randomIndex = ["rock","paper","scissors"]
    let mikey= Math.floor(Math.random()*randomIndex.length)
    return randomIndex[mikey];
}
// choices from user
function gethumanChoice(){
   let humanChoice = prompt("what do you want to choose??").toLowerCase();
   return humanChoice;
}
// setting results from computer and human choices to zero

let humanScore = 0;
let computerScore = 0;

// obtaining the result between the computer and human

function playRound(humanChoice,computerChoice){
    

    if (humanChoice === computerChoice){
        return " its a tie"
    } else if (( humanChoice === "rock" && computerChoice === "scissors") || (humanChoice === "scissors" && computerChoice === "paper") ||(humanChoice === "paper" && computerChoice === "rock")){
        humanScore++
        return "Your choice of " + humanChoice + "beats" + computerChoice 
    } else  {
        computerScore++
        return "Your choice of " + computerChoice + "beats" + humanChoice
    }
}

// writing  a function to play the game for 5 times

function playGame() {
    humanScore = 0; // Reset scores
    computerScore = 0;

    for (let i = 0; i < 5; i++) {
        let humanChoice = gethumanChoice();
        let computerChoice = getcomputerChoice();
        console.log(playRound(humanChoice, computerChoice));
    }

    // Final result
    if (humanScore > computerScore) {
        return "Congratulations! You win the game! 🎉";
    } else if (computerScore > humanScore) {
        return "You lost! Better luck next time. 🤖";
    } else {
        return "It's a tie game!";
    }
}

console.log(playGame());