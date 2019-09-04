class Player {
  constructor(name) {
    this.name = name;
    this.domElement = null;
    this.playerID = null;
    this.items = {};
    this.location = null;
    this.renderPlayer = this.renderPlayer.bind(this);
  }

  renderPlayer(startingLocation) {
    var target = startingLocation;
    this.domElement = $('<div>').attr('id', '' + this.name).addClass('player');
    this.domElement.css('background-image', 'url(../assets/player.png)');
    target.append(this.domElement);
    this.location = this.domElement.parent;
    }

  movePlayerDom(newLocationObj) {
    var positionObj = newLocationObj.position();
    this.domElement.css({ top: positionObj['top'], left: positionObj['left'] });
    this.location = positionObj;
  }

  useItem(item) {
    if (this.items[item] === 0) {
      delete this.items[item];
    } else {
      this.items[item]--;
    }

    return item;
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
}

class Zombie extends Player {
  constructor(name) {
    super(name);
    this.zombieType = null;
  }

  renderZombie(startingLocation) {
    var target = startingLocation;
    this.domElement = $('<div>').attr('id', '' + this.name).addClass('zombie');
    this.domElement.css('background-image', 'url(../assets/zombie.png)');
    target.append(this.domElement);
    this.location = this.domElement.position();
  }

  eatPlayer(player) {
    if(!player.items) {
      console.log(player.name + ' has been eaten!');
    }
    else if (player.items['shotgun']) {
      console.log(this.name + ' has been killed!');
      player.useItem('shotgun');
      this.domElement.hide();
    }
    else if (player.items['bat']) {
      console.log(player.name + ' uses the bat!');
      player.useItem('bat');
    }
    else if (player.items['shovel']) {
      console.log(player.name + ' uses the shovel!');
      player.useItem('shovel');
    }
    else if (player.items['bat']) {
      console.log(player.name + ' uses the torch!');
      player.useItem('torch');
    }
  }
}
