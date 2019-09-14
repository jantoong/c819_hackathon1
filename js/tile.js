class Tile {
  constructor(id) {
    this.id = id;
    this.neighbors = tileNeighborLookup[this.id];
    this.domElement = null;
    this.item = {};
    this.entities = [];
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

  getEntities() {
    return this.entities;
  }

  addEntity(entity) {
    this.entities.push(entity);
    return this.entities;
  }

  removeEntity(entity) {
    var removedEntity;
    for(var index = 0; index < this.entities.length; index++) {
      if(this.entities[index] === entity) {
        removedEntity = this.entities.splice(index, 1);
      }
    }
    return removedEntity
  }
}
