class Game {
  constructor() {
    this.diceTypes = [6,3];
    this.possibleZombieTypes = ['light', 'medium', 'dark'];
    this.players = [];
    this.zombies = [];
    this.currentPlayersTurn = 0;
    this.zzz;
    this.turnCounter = 0;
    this.movementCounter = null;
    this.diceRoll = this.diceRoll.bind(this);
    this.createNewPlayer = this.createNewPlayer.bind(this);
    this.zombieTurns = [];
    this.zombieMovementCounter = null;
  }

  diceRoll() {
    if (this.movementCounter !== null) {
      this.nextPlayersTurn();
    }
    var result = Math.floor(Math.random() * 6) + 1;
    $('.rollbox').text('roll ' + result);
    console.log('you rolled a ' + result);
    this.movementCounter = result;
    return result;
  }

  createZombies() {
    var zombie1 = new Zombie('zombie1');
    zombie1.zombieType = this.possibleZombieTypes[0];
    zombie1.location = tileList['tile35'];
    tileList['tile35'].entities.push(zombie1);
    zombie1.renderZombie($('#tile35'));

    var zombie2 = new Zombie('zombie2');
    zombie2.zombieType = this.possibleZombieTypes[0];
    zombie2.location = tileList['tile47'];
    tileList['tile47'].entities.push(zombie2);
    zombie2.renderZombie($('#tile47'));

    var zombie3 = new Zombie('zombie3');
    zombie3.zombieType = this.possibleZombieTypes[1];
    zombie3.location = tileList['tile61'];
    tileList['tile61'].entities.push(zombie3);
    zombie3.renderZombie($('#tile61'));

    var zombie4 = new Zombie('zombie4');
    zombie4.zombieType = this.possibleZombieTypes[1];
    zombie4.location = tileList['tile69'];
    tileList['tile69'].entities.push(zombie4);
    zombie4.renderZombie($('#tile69'));

    var zombie5 = new Zombie('zombie5');
    zombie5.zombieType = this.possibleZombieTypes[2];
    zombie5.location = tileList['tile77'];
    tileList['tile77'].entities.push(zombie5);
    zombie5.renderZombie($('#tile77'));

    var zombie6 = new Zombie('zombie6');
    zombie6.zombieType = this.possibleZombieTypes[2];
    zombie6.location = tileList['tile85'];
    tileList['tile85'].entities.push(zombie6);
    zombie6.renderZombie($('#tile85'));

    this.zombies.push(zombie1, zombie2, zombie3, zombie4, zombie5, zombie6);
  }

  createNewPlayer() {
    var playerNumber = this.players.length + 1;
    var newplayer = new Player('player' + playerNumber);
    var target = $('#tile0');
    tileList['tile0'].entities.push(newplayer);
    newplayer.renderPlayer(target);
    this.players.push(newplayer);
    $('.playerBoxContainer').append($('<div>').addClass('playerBox').addClass('player' + playerNumber).text('PLAYER' + playerNumber));

  }

  renderItems() {
    tileList['tile19'].item['shovel'] = 1;
    tileList['tile11'].item['shovel'] = 1;
    tileList['tile19'].domElement.append($('<div>').attr('id', 'shovel').addClass('board'));
    tileList['tile11'].domElement.append($('<div>').attr('id', 'shovel').addClass('board'));

    tileList['tile26'].item['torch'] = 1;
    tileList['tile28'].item['torch'] = 1;
    tileList['tile26'].domElement.append($('<div>').attr('id', 'torch').addClass('board'));
    tileList['tile28'].domElement.append($('<div>').attr('id', 'torch').addClass('board'));

    tileList['tile81'].item['bat'] = 1;
    tileList['tile73'].item['bat'] = 1;
    tileList['tile65'].item['bat'] = 1;
    tileList['tile57'].item['bat'] = 1;
    tileList['tile81'].domElement.append($('<div>').attr('id', 'bat').addClass('board'));
    tileList['tile73'].domElement.append($('<div>').attr('id', 'bat').addClass('board'));
    tileList['tile65'].domElement.append($('<div>').attr('id', 'bat').addClass('board'));
    tileList['tile57'].domElement.append($('<div>').attr('id', 'bat').addClass('board'));

    tileList['tile98'].item['batteries'] = 1;
    tileList['tile99'].item['batteries'] = 1;
    tileList['tile100'].item['batteries'] = 1;
    tileList['tile97'].item['batteries'] = 1;
    tileList['tile99'].domElement.append($('<div>').attr('id', 'batteries').addClass('board'));
    tileList['tile100'].domElement.append($('<div>').attr('id', 'batteries').addClass('board'));
    tileList['tile97'].domElement.append($('<div>').attr('id', 'batteries').addClass('board'));

    tileList['tile98'].item['shotgun'] = 1;
    tileList['tile99'].item['shotgun'] = 1;
    tileList['tile100'].item['shotgun'] = 1;
    tileList['tile97'].item['shotgun'] = 1;
    tileList['tile98'].domElement.append($('<div>').attr('id', 'shotgun').addClass('board'));
    tileList['tile99'].domElement.append($('<div>').attr('id', 'shotgun').addClass('board'));
    tileList['tile100'].domElement.append($('<div>').attr('id', 'shotgun').addClass('board'));
    tileList['tile97'].domElement.append($('<div>').attr('id', 'shotgun').addClass('board'));
  }

  getTurn() {
    return this.currentPlayersTurn;
  }

  nextPlayersTurn() {
    this.currentPlayersTurn = ++this.turnCounter % this.players.length;
    if (this.currentPlayersTurn === 0) {
      $('.player' + this.players.length).removeClass('turn');
    } else {
      $('.player' + this.currentPlayersTurn).removeClass('turn');
    }
    $('.player' + (this.currentPlayersTurn + 1)).addClass('turn');
  }

  // nextZombieTurn() {
  //   this.zombieTurns = [];
  //   $('.zombieIcon').css('background-color', 'transparent');
  //   var random = Math.floor(Math.random() * this.zombies.length);
  //   var random2 = Math.floor(Math.random() * this.zombies.length);
  //   while(random === random2) {
  //     random2 = Math.floor(Math.random() * this.zombies.length);
  //   }
  //   this.zombieTurns.push(this.zombies[random], this.zombies[random2]);
  //   console.log(this.zombieTurns);
  // }

  moveZombies() {
    //this.nextZombieTurn();
    for (var index = 0; index < 6; index++) {
      var directions = this.zombies[index].location.checkDirections();
      var randomDirection = directions[Math.floor((Math.random() * directions.length))];
      this.zombies[index].moveInDirection('tile' + randomDirection);
    }
  }

  moveSpacesDom(playerObj, newLocationObj) {
    var positionObj = newLocationObj.position();
    playerObj.domElement.css({ top: positionObj['top'], left: positionObj['left'] });
    playerObj.location = positionObj;
  }

  killPlayer(player) {
    console.log(player.name + ' has been eaten!');
    player.domElement.remove();
    player.location.removeEntity(player);
    game.players.splice(game.players.indexOf(player),1);
    this.gameOverCheck();
  }

  gameOverCheck() {
    if(this.players.length === 0) {
      console.log('GAME OVER');
    }
  }

  userItemInput(player) {
    $('.itemUseModal').show();
    for(var item in player.items) {
      $('.itemUseModal').append($('<div>').attr('id', item).addClass('itemModal'));
      $('.itemModal').on('click', this.returnItemChosen);
    }
  }

  returnItemChosen(event) {
    $('.itemUseModal').hide();
    itemUsed = $(event.currentTarget).attr('id')
  }

  displayWinModal() {
    $('#win_modal').removeClass('hidden');
  }

  hideWinModal() {
    $('#win_modal').addClass('hidden');
  }

  resetGame() {
    $('.tile').remove();
    game = new Game();
    $('.playerBoxContainer').empty();
    $('.rollbox').off('click');
    $('.tile').off('click');
    $('#play_again_button').off('click');
    tileIDCounter = 0;
    drawBoard();
  }
}
