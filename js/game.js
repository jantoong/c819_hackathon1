class Game {
  constructor() {
    this.diceTypes = [6,3];
    this.possibleZombieTypes = ['light', 'medium', 'dark'];
    this.players = [];
    this.currentPlayersTurn = null;
    this.turnCounter = 0;
  }

  diceRoll(diceType) {
    var result = null;
    result = Math.floor(Math.random() * diceType) + 1;
    return result;
  }

  createZombies() {
    var zombie1 = new Zombie('zombie1');
    zombie1.zombieType = this.possibleZombieTypes[0];
    zombie1.renderZombie($('#tile35'));

    var zombie2 = new Zombie('zombie2');
    zombie2.zombieType = this.possibleZombieTypes[0];
    zombie2.renderZombie($('#tile47'));

    var zombie3 = new Zombie('zombie3');
    zombie3.zombieType = this.possibleZombieTypes[1];
    zombie3.renderZombie($('#tile61'));

    var zombie4 = new Zombie('zombie4');
    zombie4.zombieType = this.possibleZombieTypes[1];
    zombie4.renderZombie($('#tile69'));

    var zombie5 = new Zombie('zombie5');
    zombie5.zombieType = this.possibleZombieTypes[2];
    zombie5.renderZombie($('#tile77'));

    var zombie6 = new Zombie('zombie6');
    zombie6.zombieType = this.possibleZombieTypes[2];
    zombie6.renderZombie($('#tile85'));
  }

  createNewPlayer() {
    var playerNumber = this.players.length + 1;
    var newplayer = new Player('Player' + playerNumber);
    var target = $('#tile0');
    newplayer.renderPlayer(target);
    this.players.push(newplayer);
  }

  getTurn() {
    return this.currentPlayersTurn;
  }

  nextPlayersTurn() {
    this.currentPlayersTurn = this.players[++this.turnCounter % this.players.length];
  }

  moveSpacesDom(playerObj, newLocationObj) {
    var positionObj = newLocationObj.position();
    playerObj.domElement.css({ top: positionObj['top'], left: positionObj['left'] });
    playerObj.location = positionObj;
  }

}
