class Player {
  constructor(name, eventLog) {
    this.eventLog = eventLog;
    this.name = name;
    this.domElement = null;
    this.playerID = null;
    this.items = {};
    this.location = null;
    this.locationDomElement = null;
    this.playerBoxDomElement = null;
    this.renderPlayer = this.renderPlayer.bind(this);
    this.useItem = this.useItem.bind(this);
  }

  renderPlayer(startingLocation) {
    var target = startingLocation;
    this.domElement = $('<div>').attr('id', '' + this.name).addClass('player_icon').text(this.name);
    this.domElement.css('background-image', 'url(../assets/player.png)');
    target.append(this.domElement);
    this.locationDomElement = this.domElement.parent;
    this.location = tileList['tile0'];
    this.playerBoxDomElement = $('<div>').addClass('player_box').addClass('player' + (game.players.length + 1)).text('Player ' + (game.players.length + 1)).appendTo($('.player_box_container'));
    }

  winCheck() {
    var locationId = this.location.getId()
    if (locationId === 0 && this.items['batteries']) {
      $('#win_message').text(this.name + ' has won!');
      game.displayWinModal();
      this.eventLog.append(this.name + ' has won!')

    }
  }

  moveInDirection(tileID) {
    var currentTile = this.location;
    var legalMovesArr = currentTile.checkDirections();
    var id = parseInt(tileID.slice(4));

    if (legalMovesArr.includes(id)) {
      this.domElement.detach();
      this.location.removeEntity(this);
      tileList['tile' + id].domElement.append(this.domElement);
      this.location = tileList['tile' + id];
      this.locationDomElement = tileList['tile' + id].domElement;
      this.location.addEntity(this);
      this.checkItem();
      this.winCheck();
      if(this.constructor === Zombie){
        this.eatPlayer();
      }
    } else {

      this.eventLog.append('Cant move that way!');

      return false;

    }
    return true;
  }

  checkItem() {
    if(this.constructor === Zombie) {
      return;
    }
    for(var key in this.location.item) {
      this.items[key] = 1;
      delete this.location.item[key];
      this.location.domElement.find('#' + key).hide();
      $('.' + this.name).append($('<div>').attr('id', key).addClass('player_item'));
    }
  }

  useItem(zombie) {
    if (itemUsed === 'shotgun') {
      this.eventLog.append(this.name + ' has killed a zombie!');

      this.location.domElement.find('.zombie_icon').remove();
      this.location.removeEntity(zombie);
    } else {

    }
    $('.' + this.name).find('#' + itemUsed).remove();

    var escapePower = {
      torch: 2,
      bat: 4,
      shovel: 3
    };
    var escapeSteps = escapePower[itemUsed]
    this.eventLog.append(this.name + ' has used a ' + itemUsed + '!');

    for (var index = 0; index < escapeSteps; index++) {
      var directions = this.location.checkDirections();
      var randomDirection = directions[Math.floor((Math.random() * directions.length))];
      this.moveInDirection('tile' + randomDirection);
    }

    this.items[itemUsed]--;
    if (this.items[itemUsed] === 0) {
      delete this.items[itemUsed];
      $('.' + this.name).find('#' + itemUsed).remove();
      return;
    }
  }

}

class Zombie extends Player {
  constructor(name) {
    super(name);
    this.zombieType = null;
    this.moves = null;
  }

  renderZombie(startingLocation) {
    var target = startingLocation;
    this.domElement = $('<div>').attr('id', '' + this.name).addClass('zombie_icon');
    this.domElement.css('background-image', 'url(../assets/zombie.png)');
    target.append(this.domElement);
    this.locationDomElement = this.domElement.position();
  }

  checkPlayer() {
    var returnArr = [];
    for (var entity of this.location.entities) {
      if (entity.constructor === Player) {
        returnArr.push(entity);
      }
    }
    return returnArr;
  }

  eatPlayer() {
    var playerArr = this.checkPlayer();
    if(playerArr.length > 0) {
      for(var player of playerArr) {
        if(Object.keys(player.items).length !== 0) {
          game.userItemInput(player);
          // setTimeout(function () { player.useItem(this) }, 2000);
        } else {
          game.killPlayer(player);
        }
      }
    }
  }

}
