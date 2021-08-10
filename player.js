class Player {
  constructor(name, emoji) {
    this.name = name;
    this.emoji = emoji;
    this.wins = 0;
    this.choice = '';
  }

  saveWinsToStorage() {
  localStorage.setItem(this.name, this.wins);
  }

  retrieveWinsFromStorage() {
   var wins = localStorage.getItem(this.name);
   var parsedWins = JSON.parse(wins);
   if (!wins) {
    return this.wins = 0;
   }
   this.wins = parsedWins;
   return this.wins;
 }

  takeTurn() {
    if (this.name === 'Human') {
      return this.fighter;
    } else if (this.name === 'Computer') {
      var fighters = game.fighters;
      this.fighter = fighters[Math.floor(Math.random()*fighters.length)];
      return this.fighter;
    }
  }
}
