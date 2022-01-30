'use strict';
// let message = (document.querySelector('.message').textContent =
//   'Correct number 🎉');
// console.log(message);
// document.querySelector('.number').textContent = 10;
// document.querySelector('.score').textContent = 20;
// document.querySelector('.guess').value = 23;

// click events
// let number = Number(document.querySelector('.number').textContent);
// number = 12;
let secretNumber = Math.trunc(Math.random() * 21);
const message = document.querySelector('.message');
const number = document.querySelector('.number');
let guess;
let score = 20;
let highScore;

document.querySelector('.check').addEventListener('click', checkGuess);
document.querySelector('.again').addEventListener('click', resetGame);

function checkGuess() {
  guess = Number(document.querySelector('.guess').value);
  console.log(guess);
  // if no number
  if (!guess) {
    message.textContent = 'No Number 🛑';
    // same number
  } else if (guess === secretNumber) {
    winGame();
    message.textContent = 'Correct Number! 🎉';
  }
  // too high
  else if (guess > secretNumber) {
    message.textContent = 'Too High 📈';
    decreaseScore();
  }
  // too low
  else {
    message.textContent = 'Too low 📉';
    decreaseScore();
  }
}
function decreaseScore() {
  score--;
  document.querySelector('.score').textContent = score;
  if (score < 0) {
    document.querySelector('.score').textContent = 0;
    disableBtn();
  }
  if (score <= 0) {
    message.textContent = 'You Lose ⚠️';
    disableBtn();
  }
}
function winGame() {
  document.querySelector('body').style.backgroundColor = 'green';
  number.style.width = '25rem';
  number.textContent = secretNumber;
  setHighscore();
  disableBtn();
}
function disableBtn() {
  document.querySelector('.check').disabled = true;
}

function resetGame() {
  //reset score
  score = 20;
  document.querySelector('.score').textContent = score;
  //reset number
  secretNumber = Math.trunc(Math.random() * 21);
  number.textContent = secretNumber;
  //reset message
  message.textContent = 'Start Guessing...';
  //reset guess
  document.querySelector('.guess').value = '';
  //bg color
  document.querySelector('body')``.style.backgroundColor = '#222';
  number.style.width = '15rem';
  //number width
  // enable btn check
  document.querySelector('.check').disabled = false;
  // hide number
  document.querySelector('.number').textContent = '?';
}
function setHighscore() {
  highScore = Number(document.querySelector('.highscore').textContent);
  if (score > highScore) {
    document.querySelector('.highscore').textContent = score;
  }
}
