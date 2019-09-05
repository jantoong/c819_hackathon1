class Player {
  constructor(name) {
    this.name = name;
    this.domElement = null;
    this.playerID = null;
    this.items = {};
    this.location = null;
    this.locationDomElement = null;
    this.renderPlayer = this.renderPlayer.bind(this);
  }

  renderPlayer(startingLocation) {
    var target = startingLocation;
    this.domElement = $('<div>').attr('id', '' + this.name).addClass('playerIcon');
    this.domElement.css('background-image', 'url(../assets/player.png)');
    target.append(this.domElement);
    this.locationDomElement = this.domElement.parent;
    this.location = tileList['tile0'];
    }

  useItem(item) {
    if (this.items[item] === 0) {
      delete this.items[item];
    } else {
      this.items[item]--;
    }

    return item;
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
    for(var key in this.location.item) {
      this.items[key] = 1;
      delete this.location.item[key];
      this.location.domElement.find('.item').hide();
      $('.' + this.name).append($('<div>').addClass(key));
    }
  }
}

class Zombie extends Player {
  constructor(name) {
    super(name);
    this.zombieType = null;
  }

  renderZombie(startingLocation) {
    var target = startingLocation;
    this.domElement = $('<div>').attr('id', '' + this.name).addClass('zombieIcon');
    this.domElement.css('background-image', 'url(../assets/zombie.png)');
    target.append(this.domElement);
    this.locationDomElement = this.domElement.position();
  }

  checkPlayer() {
    if(this.locationDomElement.find('.playerIcon')) {
      console.log('true');
      var currentPlayer
    } else {
      console.log('false');
    }
  }

  eatPlayer() {

  }
}
