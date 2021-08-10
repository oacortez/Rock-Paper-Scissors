
var newGame;

// Fighters 🤦🏻‍♂️🔫

///////  ⬇️ Query Selectors
var classicBtn = document.querySelector('#classicBtn');
var difficultBtn = document.querySelector('#difficultBtn');
var viewYourClassic = document.querySelector('#classicFighters')
var rockImg = document.querySelector('#rock');
var paperImg = document.querySelector('#paper');
var scissorsImg = document.querySelector('#scissors');
var lizardImg = document.querySelector('#lizard');
var alienImg = document.querySelector('#alien');
var showDifficultFighters = document.querySelector('#showDifficultFighters');
var header = document.querySelector('h2');
var playerSection = document.querySelector('#playerSection');
var computerSection = document.querySelector('#computerSection');
var displayWinner = document.querySelector('#displayWinner');
var playerFighterImg = document.querySelector('#playerFighterImg');
var computerFighterImg = document.querySelector('#computerFighterImg');


////// ⬇️ Event Listeners
classicBtn.addEventListener('click', viewClassic);
difficultBtn.addEventListener('click', viewDifficult);
viewYourClassic.addEventListener('click', classicFighters)
window.addEventListener('load', leftSection);
// window.addEventListener('load', rightSection);

///// ⬇️ functions

function randomGenerator(numberOfFighters) {
  return Math.floor(Math.random() * numberOfFighters);
}

function leftSection() {
  if(!newGame) {
    return;
  }
  var wins = newGame.humanPlayer.retrieveWinsFromStorage();
  playerSection.innerHTML = `
  <p>Player: Human</p>
  <p>Wins: ${wins}</p>
 `;
}

function viewClassic() {
  event.preventDefault();
  newGame = new Game('classic');
  hide(classicBtn);
  hide(difficultBtn);
  show(viewYourClassic);
  header.innerText = 'Choose your fighter!';
}

function viewDifficult() {
  hide(classicBtn);
  hide(difficultBtn);
  show(showDifficultFighters)
  header.innerText = 'Choose your fighter!';
}

function hide(element) {
  element.classList.add("hidden");
}

function show(element) {
  element.classList.remove("hidden");
}

function classicFighters(e) {
  if(event.target.id === 'classicFighters') {
    return;
  }
  playerFighterImg.src = newGame.fighters[event.target.id]
  newGame.humanPlayer.choice = event.target.id;
  computerChoice(3);
  computerFighterImg.src = newGame.fighters[newGame.ComputerPlayer.choice];
  hide(viewYourClassic);
  show(displayWinner);
}

function computerChoice(numberOfFighters) {
  var opponentChoice = Object.keys(newGame.fighters);
  newGame.ComputerPlayer.choice = opponentChoice[randomGenerator(numberOfFighters)];
  console.log(newGame.ComputerPlayer.choice);
}
