var tileList = {};

class CreateBoard{
  constructor() {
    this.numberOfTilesInRings = [1, 4, 4, 16, 4, 24, 4, 32, 4, 4, 4];
    this.radius = null;
    this.translateXValues = [];
    this.translateYValues = [];
    this.rotateValues = [];
    this.baseRadius = 30;
    this.radiusDelta = 100;
  }

  calculateRadius(ringNumber) {
    this.radius = (this.baseRadius + this.radiusDelta * ringNumber) / 2;
    return this.radius;
  }

  calculateXValues(ringNumber) {
    var radiansDelta = 360 / this.numberOfTilesInRings[ringNumber] * Math.PI / 180;

    switch (ringNumber) {
      case 0:
        this.translateXValues = [0];
        break;
      case 4:
      case 8:
      case 9:
      case 10:
        this.translateXValues = [Math.SQRT2 / 2 * this.calculateRadius(ringNumber), -Math.SQRT2 / 2 * this.calculateRadius(ringNumber), -Math.SQRT2 / 2 * this.calculateRadius(ringNumber), Math.SQRT2 / 2 * this.calculateRadius(ringNumber)];
        break;
      default:
        for (var i = 0; i < this.numberOfTilesInRings[ringNumber]; i++) {
          this.translateXValues.push(Math.cos(radiansDelta * i) * this.calculateRadius(ringNumber));
        }
        break;
    }

    return this.translateXValues;
  }

  calculateYValues(ringNumber) {
    var radiansDelta = 360 / this.numberOfTilesInRings[ringNumber] * Math.PI / 180;

    switch (ringNumber) {
      case 0:
        this.translateYValues = [0];
        break;
      case 4:
      case 8:
      case 9:
      case 10:
        this.translateYValues = [Math.SQRT2 / 2 * this.calculateRadius(ringNumber), Math.SQRT2 / 2 * this.calculateRadius(ringNumber), -Math.SQRT2 / 2 * this.calculateRadius(ringNumber), -Math.SQRT2 / 2 * this.calculateRadius(ringNumber)];
        break;
      default:
        for (var i = 0; i < this.numberOfTilesInRings[ringNumber]; i++) {
          this.translateYValues.push(Math.sin(radiansDelta * i) * this.calculateRadius(ringNumber));
        }
        break;
    }

    return this.translateYValues;
  }

  calculateRotateValues(ringNumber) {
    var degreesDelta = 360 / this.numberOfTilesInRings[ringNumber];

    switch (ringNumber) {
      case 0:
        this.rotateValues = [0];
        break;
      case 4:
      case 8:
      case 9:
      case 10:
        this.rotateValues = [-45, 45, 135, -135];
        break;
      default:
        for (var i = 0; i < this.numberOfTilesInRings[ringNumber]; i++) {
          this.rotateValues.push((degreesDelta * i + 90) % 360);
        }
        break;
    }

    return this.rotateValues;
  }

  resetProperties() {
    this.radius = null;
    this.translateXValues = [];
    this.translateYValues = [];
    this.rotateValues = [];
  }

  makeTileRing(ringNumber) {
    for (var i = 0; i < this.numberOfTilesInRings[ringNumber]; i++) {
      var newTile = $('<div>').addClass('tile').attr('id', 'tile' + tileIDCounter).text(tileIDCounter);
      newTile.css('transform', 'translate(' + this.calculateXValues(ringNumber)[i] + 'px ,' + this.calculateYValues(ringNumber)[i] + 'px) rotate(' + this.calculateRotateValues(ringNumber)[i] + 'deg)');
      var newTileObj = new Tile(tileIDCounter);
      newTileObj.domElement = newTile;
      tileList['tile' + tileIDCounter] = newTileObj;
      $('#ring' + ringNumber).append(newTile);
      tileIDCounter++;
    }
  }

  makeAllRings() {
    for (var i = 0; i < this.numberOfTilesInRings.length; i++) {
      this.makeTileRing(i);
      this.resetProperties();
    }
  }
}
