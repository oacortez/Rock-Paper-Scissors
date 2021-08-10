class Game {
  constructor(gameType) {
    this.humanPlayer = new Player('Human', '👨🏻‍💻');
    this.ComputerPlayer = new Player('Computer', '👾');
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
     scissors: 'paper',
     paper: 'rock',
     rock: 'scissors'
      }
    }

  chooseFighter() {
   var humanFighter = this.humanPlayer.takeTurn(this);
   var computerFighter = this.computerPlayer.takeTurn(this);
   this.checkForWinner(humanFighter, computerFighter);
 }

  chooseGame() {
    if(this.gameType === 'classic') {
      this.fighters = ['rock', 'paper', 'scissors'];
    }
    if(this.gameType === 'difficult-selection-btn') {
      this.fighters = ['rock', 'paper', 'scissors', 'alien', 'lizard'];
    }
  }
  checkForWinner(human, computer) {
    if (this.winConditions[human].includes(computer)) {
      this.winner = this.humanPlayer.name;
      this.humanPlayer.wins++;
    } else if (this.winConditions[computer].includes(human)) {
      this.winner = this.computerPlayer.name;
      this.computerPlayer.wins++
    } else {
      this.winner = null;
    }
    this.humanPlayer.saveWinsToStorage();
    this.computerPlayer.saveWinsToStorage();
    render(this);
  }
  resetGame() {
    this.humanPlayer.fighter = undefined;
    this.computerPlayer.fighter = undefined;
    this.matchup = {humanPlayer: null, computerPlayer: null};
    this.winner = undefined;
    startNewGame();
  }
}
