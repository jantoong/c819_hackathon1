class Tile {
  constructor(id) { //id match array locations
    this.id = id;
    this.neighbors = tileNeighborLookup['tile' + this.id];
    this.domElement = null;
    this.item = [];
    this.entities = {};
  }
}

class Board {
  constructor(startingTile) {
    this.currentTileID = startingTile.id;
    this.currentTile = startingTile;
  }

  addTile(tile) {
    this.tileList.push(tile);
  }

  checkDirections() {
    var directionArr = [];
    for (var direction in this.currentTile.neighbors) {
      directionArr.push(direction);
    }
    return directionArr;
  }

  moveInDirection(direction) {
    var dArr = this.checkDirections();
    if (dArr.includes(direction)) {
      this.currentTile = this.tileList[this.currentTile.neighbors[direction]];
      this.currentTileID = this.currentTile.id;
      console.log(board.currentTile);
    } else {
      console.log('Cant move that way!');
    }
    this.currentTile.domElement.css('background-color', 'green');
  }
}
