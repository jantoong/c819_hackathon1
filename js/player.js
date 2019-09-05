class Player {
  constructor(name) {
    this.name = name;
    this.domElement = null;
    this.playerID = null;
    this.items = {};
    this.location = null;
    this.locationDomElement = null;
    this.renderPlayer = this.renderPlayer.bind(this);
    this.useItem = this.useItem.bind(this);
  }

  renderPlayer(startingLocation) {
    var target = startingLocation;
    this.domElement = $('<div>').attr('id', '' + this.name).addClass('playerIcon');
    this.domElement.css('background-image', 'url(../assets/player.png)');
    target.append(this.domElement);
    this.locationDomElement = this.domElement.parent;
    this.location = tileList['tile0'];
    }

  winCheck() {
    var locationId = this.location.getId()
    if (locationId === 0 && this.items['batteries']) {
      $('#win_message').text(this.name + ' has won!');
      game.displayWinModal();
      console.log(this.name + ' has won!')
    }
  }

  getLocation() {
    return this.location;
  }

  getItems() {
    return this.items;
  }

  getDomElement() {
    return this.domElement;
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
    } else {
      console.log('Cant move that way!');
    }
  }

  checkItem() {
    if(this.constructor === Zombie) {
      return;
    }
    for(var key in this.location.item) {
      this.items[key] = 1;
      delete this.location.item[key];
      this.location.domElement.find('#' + key).hide();
      $('.' + this.name).append($('<div>').attr('id', key).addClass('playerItem'));
    }
  }

  useItem(zombie) {
    if (this.items[itemUsed] === 0) {
      delete this.items[itemUsed];
    } else {
      this.items[itemUsed]--;
      switch(itemUsed) {
        case 'torch':
          console.log(this.name + ' has used a torch!');
          for(var index = 0; index < 2; index++) {
            var directions = this.location.checkDirections();
            var randomDirection = directions[Math.floor((Math.random()*directions.length))];
            this.moveInDirection('tile' +randomDirection);
          }
          break;
        case 'bat':
          console.log(this.name + ' has used a bat!');
          for (var index = 0; index < 4; index++) {
            var directions = this.location.checkDirections();
            var randomDirection = directions[Math.floor((Math.random() * directions.length))];
            console.log(randomDirection);
            this.moveInDirection('tile'+randomDirection);
          }
          break;
        case 'shovel':
          console.log(this.name + ' has used a shovel!');
          for (var index = 0; index < 3; index++) {
            var directions = this.location.checkDirections();
            var randomDirection = directions[Math.floor((Math.random() * directions.length))];
            this.moveInDirection('tile' +randomDirection);
          }
          break;
        case 'shotgun':
          console.log(this.name + ' has killed a zombie!');
          this.location.domElement.find('.zombieIcon').remove();
          this.location.removeEntity(zombie);
          break;
      }
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
    this.domElement = $('<div>').attr('id', '' + this.name).addClass('zombieIcon');
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
          setTimeout(function () { player.useItem(this) }, 2000);
        } else {
          game.killPlayer(player);
        }
      }
    }
  }

}
