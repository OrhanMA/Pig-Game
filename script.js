'use strict';

let player1CurrentScore = 0;
let player1TotalScore = 0;
let player2CurrentScore = 0;
let player2TotalScore = 0;

let player1Turn = true;
let player2Turn = false;

hideDice();

function rollDice() {
  const dice = Math.trunc(Math.random() * 6) + 1;
  return dice;
}
// Le +1 permet d'éviter d'obtenir 0

const rollButton = document.querySelector('.btn--roll');
rollButton.addEventListener('click', function () {
  switch (rollDice()) {
    case 1:
      console.log('Dice is 1');
      hideDice();
      const dice1 = document.getElementById('dice1');
      dice1.style.display = 'block';
      if (player1Turn === true) {
        player1CurrentScore = 0;
        document.querySelector('#current--0').textContent = player1CurrentScore;
        setTurn();
      } else if (player2Turn === true) {
        player2CurrentScore = 0;
        document.querySelector('#current--1').textContent = player2CurrentScore;
        setTurn();
      }
      break;
    case 2:
      console.log('Dice is 2');
      hideDice();
      const dice2 = document.getElementById('dice2');
      dice2.style.display = 'block';
      if (player1Turn === true) {
        player1CurrentScore += 2;
        document.querySelector('#current--0').textContent = player1CurrentScore;
      } else if (player2Turn === true) {
        player2CurrentScore += 2;
        document.querySelector('#current--1').textContent = player2CurrentScore;
      }
      break;
    case 3:
      console.log('Dice is 3');
      hideDice();
      const dice3 = document.getElementById('dice3');
      dice3.style.display = 'block';
      if (player1Turn === true) {
        player1CurrentScore += 3;
        document.querySelector('#current--0').textContent = player1CurrentScore;
      } else if (player2Turn === true) {
        player2CurrentScore += 3;
        document.querySelector('#current--1').textContent = player2CurrentScore;
      }
      break;
    case 4:
      console.log('Dice is 4');
      hideDice();
      const dice4 = document.getElementById('dice4');
      dice4.style.display = 'block';
      if (player1Turn === true) {
        player1CurrentScore += 4;
        document.querySelector('#current--0').textContent = player1CurrentScore;
      } else if (player2Turn === true) {
        player2CurrentScore += 4;
        document.querySelector('#current--1').textContent = player2CurrentScore;
      }
      break;
    case 5:
      console.log('Dice is 5');
      hideDice();
      const dice5 = document.getElementById('dice5');
      dice5.style.display = 'block';
      if (player1Turn === true) {
        player1CurrentScore += 5;
        document.querySelector('#current--0').textContent = player1CurrentScore;
      } else if (player2Turn === true) {
        player2CurrentScore += 5;
        document.querySelector('#current--1').textContent = player2CurrentScore;
      }
      break;
    case 6:
      console.log('Dice is 6');
      hideDice();
      const dice6 = document.getElementById('dice6');
      dice6.style.display = 'block';
      if (player1Turn === true) {
        player1CurrentScore += 6;
        document.querySelector('#current--0').textContent = player1CurrentScore;
      } else if (player2Turn === true) {
        player2CurrentScore += 6;
        document.querySelector('#current--1').textContent = player2CurrentScore;
      }
      break;
  }
});

function hideDice() {
  const allDice = document.querySelectorAll('.dice');
  for (let i = 0; i < allDice.length; i++) {
    allDice[i].style.display = 'none';
  }
}

const holdScore = document.querySelector('.btn--hold');
holdScore.addEventListener('click', function () {
  if (player1Turn === true) {
    player1TotalScore += player1CurrentScore;
    player1CurrentScore = 0;
    document.querySelector('#score--0').textContent = player1TotalScore;
    document.querySelector('#current--0').textContent = 0;
    if (player1TotalScore >= 100) {
      document.querySelector('#name--0').textContent = 'Player 1 WON!';
    } else {
      setTurn();
    }
  } else if (player2Turn === true) {
    player2TotalScore += player2CurrentScore;
    player2CurrentScore = 0;
    document.querySelector('#score--1').textContent = player2TotalScore;
    document.querySelector('#current--1').textContent = 0;
    if (player2TotalScore >= 100) {
      document.querySelector('#name--1').textContent = 'Player 2 WON!';
    } else {
      setTurn();
    }
  }
});

const resetGame = document.querySelector('.btn--new');
resetGame.addEventListener('click', function () {
  player1Turn = true;
  player2Turn = false;
  document.querySelector('#score--0').textContent = 0;
  document.querySelector('#score--1').textContent = 0;
  document.querySelector('#current--0').textContent = 0;
  document.querySelector('#current--1').textContent = 0;
  player1CurrentScore = 0;
  player1TotalScore = 0;
  player2CurrentScore = 0;
  player2TotalScore = 0;
});

function setTurn() {
  player1Turn = !player1Turn;
  player2Turn = !player2Turn;
}
