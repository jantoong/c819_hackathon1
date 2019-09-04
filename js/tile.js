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
}
