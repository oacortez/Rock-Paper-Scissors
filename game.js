class Game {
  constructor(gameType) {
    this.humanPlayer = new Player('Human', '👨🏻‍💻');
    this.computerPlayer = new Player('Computer', '👾');
    this.gameType = gameType;
    this.fighters = {
      rock: "./assets/happy-rocks.png",
      paper: "./assets/happy-paper.png",
      scissors: "./assets/happy-scissors.png",
      alien: "./assets/ufo.png",
      lizard: "./assets/lizard.png"
    };
    this.winner = undefined;
    this.winConditions = {
     scissors: ['paper', 'lizard'],
     paper: ['rock', 'alien'],
     rock: ['scissors', 'lizard'],
     lizard: ['paper', 'alien'],
     alien: ['scissors', 'rock']
      }
    }


  chooseFighter() {
   var humanFighter = this.humanPlayer.takeTurn(this);
   var computerFighter = this.computerPlayer.takeTurn(this);
   this.checkForWinner(humanFighter, computerFighter);
 }


  checkForWinner(human, computer) {
    if (this.winConditions[human].includes(computer)) {
      this.winner = this.humanPlayer.name;
      this.humanPlayer.wins++;
      this.humanPlayer.saveWinsToStorage();
    } else if (this.winConditions[computer].includes(human)) {
      this.winner = this.computerPlayer.name;
      this.computerPlayer.wins++
      this.computerPlayer.saveWinsToStorage();
    } else {
      this.winner = null;
    }
    this.humanPlayer.saveWinsToStorage();
    this.computerPlayer.saveWinsToStorage();
    render(this);
    if(this.gameType === 'classic') {
      setTimeout(viewClassic, 2000)
    } else {
      setTimeout(viewDifficult, 2000)
    }
  }
}
