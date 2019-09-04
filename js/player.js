class Player {
  constructor(name) {
    this.name = name;
    this.domElement = null;
    this.playerID = null;
    this.items = {};
    this.location = null;
  }

  renderPlayer(startingLocation) {
    this.domElement = $('<div>').attr('id', '' + this.name).addClass('player');
    this.domElement.css('background-image', 'url(../assets/player.png)');
    this.domElement.css({top: '50%', left: '50%'});
    $('body').append(this.domElement);
    this.location = this.domElement.position();
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
    switch (item) {
      case: 'torch'
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
}

class Zombie extends Player {
  constructor(name) {
    super('Zombie');
  }

  renderZombie(startingLocation) {
    this.domElement = $('<div>').attr('id', '' + this.name).addClass('zombie');
    this.domElement.css('background-image', 'url(../assets/zombie.png)');
    this.domElement.css({ top: '25%', left: '25%' });
    $('body').append(this.domElement);
    this.location = this.domElement.position();
  }

  eatPlayer(player) {
    if(!player.items) {
      console.log(player.name + ' has been eaten!');
    }
    else if (player.items['shotgun']) {
      console.log(this.name + ' has been killed!');
      player.useItem('shotgun')
      }
      this.domElement.hide();
      return;
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
