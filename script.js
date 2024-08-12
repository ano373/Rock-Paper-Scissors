let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
  const random = Math.floor(Math.random() * 3);
  switch(random) {
    case 0:
    return "Rock";
    case 1:
    return "Paper";
    case 2:
    return "Scissors";
  }
}
const div = document.createElement("div");


const buttons = document.querySelectorAll("button");
buttons.forEach((button) => {
    button.addEventListener("click", function(e)  {
        humanChoice = e.target.className;
        computerChoice = getComputerChoice();
        playRound(humanChoice,computerChoice);
        
        
        const buttonCon = document.querySelector(".button-container");
        buttonCon.insertAdjacentElement('afterend', div);
        div.textContent= "computer: "+ computerScore + " human: " + humanScore;
    });
    });






function playRound(humanChoice, computerChoice) {
  if(humanChoice === computerChoice) {
    alert("Tie");
  } 
  else if (humanChoice == "scissors") {
    if (computerChoice == "Rock") {
      computerScore++;
    } else {
      humanScore++;
    }
  }
  else if (humanChoice == "paper") {
    if (computerChoice == "Scissors") {
      computerScore++;
    } else {
      humanScore++;
    }
  }
  else if (humanChoice == "rock") {
    if (computerChoice == "Paper") {
      computerScore++;
    } else {
      humanScore++;
    } 
  }
  
}


function playGame() {
 
}




alert(`Human score is ${humanScore} and Computer score is ${computerScore}`);