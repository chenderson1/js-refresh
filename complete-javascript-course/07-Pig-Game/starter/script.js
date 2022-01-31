'use strict';

const dice = document.querySelector('.dice');
const btnNewGame = document.querySelector('.btn--new');
const btnRollDice = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.hold');
let playerOneTotalScore = document.querySelector('#score--0');
let playerOneCurrentScore = document.querySelector('#current--0');
let playerTwoTotalScore = document.querySelector('#score--1');
let playerTwoCurrentScore = document.querySelector('#current--1');
let randomDice;

btnRollDice.addEventListener('click', rollDice);
btnNewGame.addEventListener('click', gameRestart);

function gameRestart() {
  playerOneTotalScore.textContent = 0;
  playerTwoTotalScore.textContent = 0;
  dice.classList.add('hidden');
}

function rollDice() {
  randomDice = `dice-${Math.trunc(Math.random() * 6) + 1}.png`;
  dice.src = randomDice;
  dice.classList.remove('hidden');
}

// function didRollOne() {
//   if (randomNum === 1) {
//   }
// }
