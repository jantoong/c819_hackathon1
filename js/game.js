class Game {
  constructor() {
    this.players = [];
    this.zombies = [];
    this.currentPlayer = null;
    this.movementCounter = null;
    this.zombieTurns = [];
    this.zombieMovementCounter = null;
    this.diceRoll = this.diceRoll.bind(this);
    this.createNewPlayer = this.createNewPlayer.bind(this);
    this.start = this.start.bind(this);
    this.tileClickHandler = this.tileClickHandler.bind(this);
  }

  start() {
    board.makeAllRings();
    this.createZombies();
    this.renderItems();
    $('.rollbox').on('click', this.diceRoll);
    $('#play_again_button').click(this.resetGame).click(this.hideWinModal);
    this.createNewPlayer();
    this.currentPlayer = this.players[0];
    $('.new_player').on('click', this.createNewPlayer);
    $('.tile').on('click', this.tileClickHandler);
    $('.event_log').append('<br>' + this.players[0].name + "'s turn to roll!");
    $('.player_box.player1').toggleClass('turn');
  }

  tileClickHandler(event) {
    var target = $(event.currentTarget).attr('id');

    for (var entity of tileList[target].entities) {
      for (var zombie of this.zombies) {
        if (entity === zombie) {
          $('.event_log').append('<br>' + "Can't go that way!");
          return;
        }
      }
    }

    if (this.movementCounter > 0) {
      var result = this.currentPlayer.moveInDirection(target);
      if (result) {
        this.movementCounter--;
      }
      if (this.movementCounter === 0) {
        this.moveZombies();
        this.advanceTurn();
      }
      return;
    }
  }

  diceRoll() {
    var result = Math.floor(Math.random() * 6) + 1;
    $('.rollbox').text('roll ' + result);
    $('.event_log').append('<br>' + 'You rolled a ' + result);
    this.movementCounter = result;
    return result;
  }

  createZombies() {
    var zombieStartingTile =
      ['tile35', 'tile47', 'tile61',
       'tile69', 'tile77', 'tile85',
       'tile41', 'tile29', 'tile25',
       'tile27'];
    var zombieCounter = 1;

    for (var tile of zombieStartingTile) {
      var newZombie = new Zombie('zombie' + zombieCounter);
      newZombie.location = tileList[tile];
      tileList[tile].entities.push(newZombie);
      newZombie.renderZombie($('#' + tile));
      this.zombies.push(newZombie)
    }
  }

  createNewPlayer() {
    var newPlayer = new Player('player' + (game.players.length + 1));
    $('.event_log').append('<br>' + newPlayer.name + ' has joined!');
    var target = $('#tile0');
    tileList['tile0'].entities.push(newPlayer);
    newPlayer.renderPlayer(target);
    this.players.push(newPlayer);
  }

  renderItems() {
    var itemStartingTiles = {
      'shovel': ['tile19', 'tile11'],
      'torch': ['tile26', 'tile28'],
      'bat': ['tile81', 'tile73', 'tile65', 'tile57'],
      'batteries' : ['tile97', 'tile98', 'tile99', 'tile100'],
      'shotgun': ['tile97', 'tile98', 'tile99', 'tile100']
    }

    for (var items in itemStartingTiles) {
      for (var tiles of itemStartingTiles[items]) {
        tileList[tiles].item[items] = 1
        tileList[tiles].domElement.append($('<div>').attr('id', items).addClass('board'));
      }
    }
  }

  advanceTurn() {
    $(this.currentPlayer.playerBoxDomElement).toggleClass('turn');
    if(this.currentPlayer === this.players[this.players.length-1]) {
      this.currentPlayer = this.players[0];
    } else {
      this.currentPlayer = this.players[this.players.indexOf(this.currentPlayer) + 1];
    }
    $('.event_log').append('<br>' + this.currentPlayer.name +"'s turn to roll!");
    $(this.currentPlayer.playerBoxDomElement).toggleClass('turn');
  }

  moveZombies() {
    var randomNumber = (Math.floor(Math.random()*6) + 1);
    for (var moveIndex = 0; moveIndex < randomNumber; moveIndex++){
      for (var index = 0; index < game.zombies.length; index++) {
        var directions = this.zombies[index].location.checkDirections();
        var randomDirection = directions[Math.floor((Math.random() * directions.length))];
        this.zombies[index].moveInDirection('tile' + randomDirection);
      }
    }
  }

  moveSpacesDom(playerObj, newLocationObj) {
    var positionObj = newLocationObj.position();
    playerObj.domElement.css({ top: positionObj['top'], left: positionObj['left'] });
    playerObj.location = positionObj;
  }

  killPlayer(player) {
    $('.event_log').append('<br>' + player.name + ' has been eaten!');
    player.domElement.remove();
    player.location.removeEntity(player);
    game.players.splice(game.players.indexOf(player),1);
    this.gameOverCheck();
  }

  gameOverCheck() {
    if(this.players.length === 0) {
      $('.event_log').append('<br>' + 'Game Over');
    }
  }

  userItemInput(player) {
    $('.item_use_modal').show();
    $('.event_log').append('<br>' + 'Choose an item to use');
    for(var item in player.items) {
      $('.item_use_modal').append($('<div>').attr('id', item).addClass('item_modal'));
      $('.item_modal').on('click', this.returnItemChosen);
    }
  }

  returnItemChosen(event) {
    $('.item_use_modal').hide();
    $('.item_use_modal').empty();
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
    $('.event_log').empty();
    game = new Game();
    board = new BoardView();
    $('.player_box_container').empty();
    $('.rollbox').off('click');
    $('.tile').off('click');
    $('#play_again_button').off('click');
    $('.new_player').off('click');
    tileIDCounter = 0;
    this.start();
  }
}
