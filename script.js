//import {startConfetti, stopConfetti, removeConfetti} from './confetti.js';

const playerScoreEL = document.getElementById('playerScore')
const playerChoiceEL = document.getElementById('playerChoice')
const computerScoreEL = document.getElementById('computerScore')
const computerChoiceEL = document.getElementById('computerChoice')
const resultText = document.getElementById('resultText');

const playerRock = document.getElementById('playerRock');
const playerPaper = document.getElementById('playerPaper');
const playerScissors = document.getElementById('playerScissors');
const playerLizard = document.getElementById('playerLizard');
const playerSpock = document.getElementById('playerSpock');

const computerRock = document.getElementById('computerRock');
const computerPaper = document.getElementById('computerPaper');
const computerScissors = document.getElementById('computerScissors');
const computerLizard = document.getElementById('computerLizard');
const computerSpock = document.getElementById('computerSpock');

const allGameIcons = document.querySelectorAll('.far');

const choices = {
  rock: { name: 'Rock', defeats: ['scissors', 'lizard'] },
  paper: { name: 'Paper', defeats: ['rock', 'spock'] },
  scissors: { name: 'Scissors', defeats: ['paper', 'lizard'] },
  lizard: { name: 'Lizard', defeats: ['paper', 'spock'] },
  spock: { name: 'Spock', defeats: ['scissors', 'rock'] },
};

const computerChoices = ['rock', 'paper', 'scissors', 'lizard', 'spock']; 

let computerChoice = '';
let playerScoreNumber = 0;
let computerScoreNumber = 0;
let confettiModule;

function resetSelected() {
  allGameIcons.forEach(icon => {
    icon.classList.remove('selected');
  });
  import('./confetti.js')
  .then(module => {
    module.stopConfetti();
    module.removeConfetti();
  });
}

function resetAll() {
  playerScoreNumber = 0;
  computerScoreNumber = 0;
  playerScoreEL.textContent = playerScoreNumber;
  computerScoreEL.textContent = computerScoreNumber;
  playerChoiceEL.textContent = '';
  computerChoiceEL.textContent = '';
  resultText.textContent = '';
  resetSelected();
}

// Check results, increase score, update resultTExt
function updateScore(playerChoice) {
  if (playerChoice === computerChoice) {
    resultText.textContent = "It's a tie!¯\\_(ツ)_/¯";
  } else {
    const choice = choices[playerChoice];
    if (choice && choice.defeats.includes(computerChoice)) {
      playerScoreNumber++;
      import('./confetti.js')
        .then(module => {
          module.startConfetti();
          resultText.textContent = 'You Won! Weee...';
          playerScoreEL.textContent = playerScoreNumber;
        });
    } else {
      computerScoreNumber++;
      resultText.textContent = 'Aww, you lost!';
      computerScoreEL.textContent = computerScoreNumber;
    }
  }
}

function checkResult(playerChoice) {
  resetSelected();
  computerRandomChoice();
  updateScore(playerChoice)
}

function computerRandomChoice() {
  const computerChoiceNum = Math.floor(Math.random() * 5);
  computerChoice = computerChoices[computerChoiceNum];
  displayComputerChoice(computerChoice);
}

function displayComputerChoice(computerChoice) {
  //  Add selected styling and update player choice
  switch(computerChoice) {
    case 'rock':
        computerRock.classList.add('selected');
        computerChoiceEL.textContent = ' --- Rock';
        break;
    case 'paper':
      computerPaper.classList.add('selected');
      computerChoiceEL.textContent = ' --- Paper';
      break;
    case 'scissors':
      computerScissors.classList.add('selected');
      computerChoiceEL.textContent = ' --- Scissors';
      break;
    case 'lizard':
      computerLizard.classList.add('selected');
      computerChoiceEL.textContent = ' --- Lizard';
      break;
    case 'spock':
      computerSpock.classList.add('selected');
      computerChoiceEL.textContent = ' --- Spock';
      break;
    default:
        break;
  }

}

function select(playerChoice) {
  checkResult(playerChoice);
  //  Add selected styling and update player choice
  switch(playerChoice) {
    case 'rock':
        playerRock.classList.add('selected');
        playerChoiceEL.textContent = ' --- Rock';
        break;
    case 'paper':
      playerPaper.classList.add('selected');
      playerChoiceEL.textContent = ' --- Paper';
      break;
    case 'scissors':
      playerScissors.classList.add('selected');
      playerChoiceEL.textContent = ' --- Scissors';
      break;
    case 'lizard':
      playerLizard.classList.add('selected');
      playerChoiceEL.textContent = ' --- Lizard';
      break;
    case 'spock':
      playerSpock.classList.add('selected');
      playerChoiceEL.textContent = ' --- Spock';
      break;
    default:
        break;
  }

}

window.select = select;
window.resetAll = resetAll;

resetAll();