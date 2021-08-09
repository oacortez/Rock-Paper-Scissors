///////  ⬇️ Query Selectors
var classicBtn = document.querySelector('#classicBtn');
var difficultBtn = document.querySelector('#difficultBtn');
var viewYourClassic = document.querySelector('#classicFighters')
var rockImgBtn = document.querySelector('#rock');
var paperImg = document.querySelector('#paper');
var scissorsImg = document.querySelector('#scissors');
var lizardImg = document.querySelector('#lizard');
var alienImg = document.querySelector('#alien');
var showDifficultFighters = document.querySelector('#showDifficultFighters');
var header = document.querySelector('h2');


////// ⬇️ Event Listeners
classicBtn.addEventListener('click', viewClassic);
difficultBtn.addEventListener('click', viewDifficult);


///// ⬇️ functions

function viewClassic() {
  event.preventDefault();
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
