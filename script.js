let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
  const random = Math.floor(Math.random() * 3);
  switch(random) {
    case 0:
    return "Rock";
      break;
    case 1:
    return "Paper";
      break;
    case 2:
    return "Scissors";
      break;
  }
}

function getHumanChoice(){
  const input = prompt("Choose between Rock Paper Scissor").trim().toLowerCase();
  return input.charAt(0).toUpperCase() + input.slice(1);
}

function playRound(humanChoice, computerChoice) {
  if(humanChoice === computerChoice) {
    alert("Tie");
  } 
  else if (humanChoice == "Scissors") {
    if (computerChoice == "Rock") {
      alert("Computer won");
      computerScore++;
    } else {
      alert("Human won");
      humanScore++;
    }
  }
  else if (humanChoice == "Paper") {
    if (computerChoice == "Scissors") {
      alert("Computer won");
      computerScore++;
    } else {
      alert("Human won");
      humanScore++;
    }
  }
  else if (humanChoice == "Rock") {
    if (computerChoice == "Paper") {
      alert("Computer won");
      computerScore++;
    } else {
      alert("Human won");
      humanScore++;
    } 
  }
  
}

function playGame() {
  for (let i = 0; i < 5; i++) {
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection);
  }
}

playGame();

alert(`Human score is ${humanScore} and Computer score is ${computerScore}`);