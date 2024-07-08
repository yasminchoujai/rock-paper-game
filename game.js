// Variables to keep track of the scores
let humanScore = 0;
let computerScore = 0;

// Function to get computer's choice
function getComputerChoice() {
  const choices = ["rock", "paper", "scissors"];
  const randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
}

// Function to play a round
function playRound(humanChoice, computerChoice) {
  humanChoice = humanChoice.toLowerCase();
  let result = '';

  if (humanChoice === computerChoice) {
    result = "It's a tie!";
  } else if (
    (humanChoice === 'rock' && computerChoice === 'scissors') ||
    (humanChoice === 'paper' && computerChoice === 'rock') ||
    (humanChoice === 'scissors' && computerChoice === 'paper')
  ) {
    humanScore++;
    result = `You win! ${humanChoice} beats ${computerChoice}.`;
  } else {
    computerScore++;
    result = `You lose! ${computerChoice} beats ${humanChoice}.`;
  }

  document.getElementById('roundResult').textContent = result;
  document.getElementById('score').textContent = `Score: Human ${humanScore} - ${computerScore} Computer`;

  if (humanScore === 5 || computerScore === 5) {
    declareWinner();
  }
}

// Function to declare the winner
function declareWinner() {
  const winner = humanScore === 5 ? 'You win the game!' : 'Computer wins the game!';
  document.getElementById('winner').textContent = winner;

  // Disable buttons after game ends
  document.getElementById('rock').disabled = true;
  document.getElementById('paper').disabled = true;
  document.getElementById('scissors').disabled = true;
}

// Add event listeners to buttons
document.getElementById('rock').addEventListener('click', () => playRound('rock', getComputerChoice()));
document.getElementById('paper').addEventListener('click', () => playRound('paper', getComputerChoice()));
document.getElementById('scissors').addEventListener('click', () => playRound('scissors', getComputerChoice()));
