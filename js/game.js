class Game {
  constructor() {
    this.diceTypes = [6,3]
  }

  diceRoll(diceType) {
    var result = null;
    result = Math.floor(Math.random() * diceType) + 1;
    return result;
  }


}
