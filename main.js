
// Fighters 🤦🏻‍♂️🔫

///////  ⬇️ Query Selectors
var classicBtn = document.querySelector('#classicBtn');
var difficultBtn = document.querySelector('#difficultBtn');
var changeGameBtn = document.querySelector('#changeGameBtn');
var resetBtn = document.querySelector('#resetBtn');
var viewYourClassic = document.querySelector('#classicFighters');
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
var winTag = document.querySelector('#winTag');
var computerWins = document.querySelector('#computerWins');

var newGame;

////// ⬇️ Event Listeners
classicBtn.addEventListener('click', viewClassic);
difficultBtn.addEventListener('click', viewDifficult);
viewYourClassic.addEventListener('click', classicFighters);
changeGameBtn.addEventListener('click', changeGame);
resetBtn.addEventListener('click', resetGame);
window.addEventListener('load', updatedWins);


///// ⬇️ functions

function randomGenerator(numberOfFighters) {
  return Math.floor(Math.random() * numberOfFighters);
}

// function leftSection() {
//   if(!newGame) {
//     return;
//   }
//   var wins = newGame.humanPlayer.retrieveWinsFromStorage();
//   playerSection.innerHTML = `
//   <p>Player: Human</p>
//   <p>Wins: ${wins}</p>
//  `;
// }

function viewClassic() {
  // event.preventDefault();
  newGame = new Game('classic');
  newGame.humanPlayer.retrieveWinsFromStorage();
  newGame.computerPlayer.retrieveWinsFromStorage();
  hide(classicBtn);
  hide(difficultBtn);
  show(viewYourClassic);
  hide(displayWinner);
  show(changeGameBtn);
  updatedWins();
  // winTag.innerText = `Wins: ${newGame.humanPlayer.wins}`;
  // computerWins.innerText = `Wins: ${newGame.computerPlayer.wins}`;
  header.innerText = 'Choose your fighter!';
}

function updatedWins() {
  if(localStorage.Human) {
    var humanWins = localStorage.Human
    winTag.innerText = `Wins: ${humanWins}`
  }
  if(localStorage.Computer) {
    console.log("hi");
    var hackerWins = localStorage.Computer
    computerWins.innerText = `Wins: ${hackerWins}`
  }
}

function changeGame() {
  hide(viewYourClassic);
  show(classicBtn);
  show(difficultBtn);
  hide(changeGameBtn);
  hide(showDifficultFighters);
}

function resetGame() {
  localStorage.clear();
  location.reload();
}

function viewDifficult() {
  hide(classicBtn);
  hide(difficultBtn);
  show(showDifficultFighters);
  show(changeGameBtn)
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
  computerFighterImg.src = newGame.fighters[newGame.computerPlayer.choice];
  hide(viewYourClassic);
  show(displayWinner);
  newGame.checkForWinner(event.target.id, newGame.computerPlayer.choice);
}

function computerChoice(numberOfFighters) {
  var opponentChoice = Object.keys(newGame.fighters);
  newGame.computerPlayer.choice = opponentChoice[randomGenerator(numberOfFighters)];
  console.log(newGame.computerPlayer.choice);
}

function render(completedGame) {
  if(completedGame.winner === 'Human') {
    header.innerText = 'You won 🥳';
  } else if(completedGame.winner === 'Computer') {
    header.innerText = 'Computer won 👾';
  } else {
    header.innerText = 'Its a tie!';
  }
}
