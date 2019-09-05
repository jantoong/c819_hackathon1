class Tile {
  constructor(id) {
    this.id = id;
    this.neighbors = tileNeighborLookup['tile' + this.id];
    this.domElement = null;
    this.item = [];
    this.entities = {};
  }

  getId(){
    return this.id;
  }

  checkDirections() {
    var directionArr = [];
    for (var direction in this.neighbors) {
      directionArr.push(this.neighbors[direction]);
    }
    return directionArr;
  }
}
