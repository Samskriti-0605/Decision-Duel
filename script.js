const choices = document.querySelectorAll('.choice');
const playerScoreSpan = document.getElementById('player-score');
const computerScoreSpan = document.getElementById('computer-score');
const resultText = document.getElementById('result');
const resetButton = document.getElementById('reset');

let playerScore = 0;
let computerScore = 0;

const computerChoice = () => ['stone', 'paper', 'scissors'][Math.floor(Math.random() * 3)];

const determineWinner = (player, computer) => {
  if (player === computer) return 'It\'s a tie!';
  if (
    (player === 'stone' && computer === 'scissors') ||
    (player === 'paper' && computer === 'stone') ||
    (player === 'scissors' && computer === 'paper')
  ) {
    playerScore++;
    return 'You win!';
  }
  computerScore++;
  return 'Computer wins!';
};

choices.forEach(choice => {
  choice.addEventListener('click', () => {
    const playerChoice = choice.dataset.choice;
    const computerChoiceResult = computerChoice();
    const result = determineWinner(playerChoice, computerChoiceResult);

    playerScoreSpan.textContent = playerScore;
    computerScoreSpan.textContent = computerScore;
    resultText.textContent = `${result} (Player: ${playerChoice}, Computer: ${computerChoiceResult})`;
  });
});

resetButton.addEventListener('click', () => {
  playerScore = 0;
  computerScore = 0;
  playerScoreSpan.textContent = playerScore;
  computerScoreSpan.textContent = computerScore;
  resultText.textContent = 'Make your move!';
});
