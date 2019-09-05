class Game {
  constructor() {
    this.diceTypes = [6,3];
    this.possibleZombieTypes = ['light', 'medium', 'dark'];
    this.players = [];
    this.currentPlayersTurn = 0;
    this.turnCounter = 0;
    this.movementCounter = null;
    this.diceRoll = this.diceRoll.bind(this);
  }

  diceRoll(diceType) {
    if (diceType !== 3) {
      var result = Math.floor(Math.random() * 6) + 1;
      $('.rollbox').text('roll ' + result)
      console.log('you rolled a ' + result);
      this.movementCounter = result;
      return result;
    }
    var result = Math.floor(Math.random() * diceType) + 1;
    $('.rollbox').text('roll ' + result);
    console.log('you rolled a ' + result);
    this.movementCounter = result;
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

  renderItems() {
    tileList['tile19'].item['shovel'] = 1;
    tileList['tile11'].item['shovel'] = 1;
    tileList['tile19'].domElement.append($('<div>').addClass('shovel'));
    tileList['tile11'].domElement.append($('<div>').addClass('shovel'));

    tileList['tile26'].item['torch'] = 1;
    tileList['tile28'].item['torch'] = 1;
    tileList['tile26'].domElement.append($('<div>').addClass('torch'));
    tileList['tile28'].domElement.append($('<div>').addClass('torch'));

    tileList['tile81'].item['bat'] = 1;
    tileList['tile73'].item['bat'] = 1;
    tileList['tile65'].item['bat'] = 1;
    tileList['tile57'].item['bat'] = 1;
    tileList['tile81'].domElement.append($('<div>').addClass('bat'));
    tileList['tile73'].domElement.append($('<div>').addClass('bat'));
    tileList['tile65'].domElement.append($('<div>').addClass('bat'));
    tileList['tile57'].domElement.append($('<div>').addClass('bat'));

    tileList['tile98'].item['batteries'] = 1;
    tileList['tile99'].item['batteries'] = 1;
    tileList['tile100'].item['batteries'] = 1;
    tileList['tile97'].item['batteries'] = 1;
    tileList['tile98'].domElement.append($('<div>').addClass('batteries'));
    tileList['tile99'].domElement.append($('<div>').addClass('batteries'));
    tileList['tile100'].domElement.append($('<div>').addClass('batteries'));
    tileList['tile97'].domElement.append($('<div>').addClass('batteries'));

    tileList['tile98'].item['shotgun'] = 1;
    tileList['tile99'].item['shotgun'] = 1;
    tileList['tile100'].item['shotgun'] = 1;
    tileList['tile97'].item['shotgun'] = 1;
    tileList['tile98'].domElement.append($('<div>').addClass('shotgun'));
    tileList['tile99'].domElement.append($('<div>').addClass('shotgun'));
    tileList['tile100'].domElement.append($('<div>').addClass('shotgun'));
    tileList['tile97'].domElement.append($('<div>').addClass('shotgun'));
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
