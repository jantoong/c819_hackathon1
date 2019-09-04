class Tile {
  constructor(id, neighbors) { //id match array locations
    this.id = id;
    this.neighbors = neighbors;
    this.domElement = null;
    this.item = [];
    this.entities = {};
  }
}

class Board {
  constructor(startingTile) {
    this.currentTileID = startingTile.id;
    this.currentTile = startingTile;
    this.tileList = [];

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

class Shack extends Tile {
  winCheck();


}

winCheck


//batteries, shotgun, bat, torch, shovel,

tile21.item.push('batteries', 'shotgun');
entities['shotgun'] = 1;
entities['batteries'] = 1;
tile22.item.push('batteries', 'shotgun');
entities['shotgun'] = 1;
entities['batteries'] = 1;
tile23.item.push('batteries', 'shotgun');
entities['shotgun'] = 1;
entities['batteries'] = 1;
tile24.item.push('batteries', 'shotgun');
entities['shotgun'] = 1;
entities['batteries'] = 1;

tile15.item.push('shovel');
entities['shovel'] = 1;

tile9.item.push('shovel');
entities['shovel'] = 1;

tile18.item.push('bat');
entities['bat'] = 1;

tile12.item.push('bat');
entities['bat'] = 1;




var tile0 =
  new Tile('tile0', { 'up': 4, 'left': 3, 'right': 1, 'down': 2 });
var tile1 =
  new Tile('tile1', { 'up': 0, 'down': 5 });
var tile2 =
  new Tile('tile2', { 'up': 0, 'down': 6 });
var tile3 =
  new Tile('tile3', { 'up': 0,'down': 7 });
var tile4 =
  new Tile('tile4', { 'up': 0, 'down': 8 });
var tile5 =
  new Tile('tile5', { 'up': 1, 'down': 9 });
var tile6 =
  new Tile('tile6', { 'up': 2, 'down': 13 });
var tile7 =
  new Tile('tile7', { 'up': 3, 'down': 17 });
var tile8 =
  new Tile('tile8', { 'up': 4, 'down': 21 });
var tile9 =
  new Tile('tile9', { 'up': 5, 'left': 10, 'right': 24 });
var tile10 =
  new Tile('tile10', { 'left': 11, 'right': 9 });
var tile11 =
  new Tile('tile11', { 'left': 12, 'right': 10, 'down': 25 });
var tile12 =
  new Tile('tile12', { 'left': 13, 'right': 11 });
var tile13 =
  new Tile('tile13', { 'up': 6, 'left', 'right': 12 });
var tile14 =
  new Tile('tile14', { 'left': 15, 'right': 13, });
var tile15 =
  new Tile('tile15', { 'left': 16, 'right': 14, 'down': 26 });
var tile16 =
  new Tile('tile16', { 'left': 17, 'right': 15, });
var tile17 =
  new Tile('tile17', { 'up': 7, 'left': 18, 'right': 16, });
var tile18 =
  new Tile('tile18', { 'left': 19, 'right': 17 });
var tile19 =
  new Tile('tile19', { 'left': 20, 'right': 18, 'down': 27 });
var tile20 =
  new Tile('tile20', { 'left': 21, 'right': 19, });
var tile21 =
  new Tile('tile21', { 'up': 8, 'left': 22, 'right': 20 });
var tile22 =
  new Tile('tile22', { 'left': 23, 'right': 21 });
var tile23 =
  new Tile('tile23', { 'left': 24, 'right': 22, 'down': 28 });
var tile24 =
  new Tile('tile24', { 'left': 9, 'right': 23 });
var tile25 =
  new Tile('tile25', { 'up': 11, 'down': 32 });
var tile26 =
  new Tile('tile26', { 'up': 15, 'down': 38 });
var tile27 =
  new Tile('tile27', { 'up': 16, 'down': 44 });
var tile28 =
  new Tile('tile28', { 'up': 23, 'down': 50 });
var tile29 =
  new Tile('tile29', { 'left': 30, 'right': 52, 'down': 53 });
var tile30 =
  new Tile('tile30', { 'left': 31, 'right': 29 });
var tile31 =
  new Tile('tile31', { 'left': 32, 'right': 30 });
var tile32 =
  new Tile('tile32', { 'up': 25, 'left': 33, 'right': 31 });
var tile33 =
  new Tile('tile33', { 'left': 34, 'right': 32 });
var tile34 =
  new Tile('tile34', { 'left': 35, 'right': 33 });
var tile35 =
  new Tile('tile35', { 'left': 36, 'right': 34, 'down': 54 });
var tile36 =
  new Tile('tile36', { 'left': 37, 'right': 35 });
var tile37 =
  new Tile('tile37', { 'left': 38, 'right': 36 });
var tile38 =
  new Tile('tile38', { 'up': 26, 'left': 39, 'right': 37 });
var tile39 =
  new Tile('tile39', { 'left': 40, 'right': 38 });
var tile40 =
  new Tile('tile40', { 'left': 41, 'right': 39 });
var tile41 =
  new Tile('tile41', { 'left': 42, 'right': 40, 'down': 55 });
var tile42 =
  new Tile('tile42', { 'left': 43, 'right': 41 });
var tile43 =
  new Tile('tile43', { 'left': 44, 'right': 42 });
var tile44 =
  new Tile('tile44', { 'up': 27, 'left': 45, 'right': 43 });
var tile45 =
  new Tile('tile45', { 'left': 46, 'right': 44 });
var tile46 =
  new Tile('tile46', { 'left': 47, 'right': 45 });
var tile47 =
  new Tile('tile47', { 'up': 0, 'down': 5 });
var tile48 =
  new Tile('tile48', { 'up': 0, 'down': 6 });
var tile49 =
  new Tile('tile49', { 'up': 0, 'down': 7 });
var tile50 =
  new Tile('tile50', { 'up': 0, 'down': 8 });
var tile51 =
  new Tile('tile51', { 'up': 1, 'down': 9 });
var tile52 =
  new Tile('tile52', { 'up': 2, 'down': 12 });
var tile53 =
  new Tile('tile53', { 'up': 3, 'down': 15 });
var tile54 =
  new Tile('tile54', { 'up': 4, 'down': 18 });
var tile55 =
  new Tile('tile55', { 'up': 5, 'left': 10, 'right': 20 });
var tile56 =
  new Tile('tile56', { 'left': 11, 'right': 9 });
var tile57 =
  new Tile('tile57', { 'left': 12, 'right': 10 });
var tile58 =
  new Tile('tile58', { 'up': 6, 'left': 13, 'right': 11 });
var tile59 =
  new Tile('tile59', { 'left': 14, 'right': 12, 'down': 22 });
var tile60 =
  new Tile('tile60', { 'left': 15, 'right': 13, 'down': 22 });
var tile61 =
  new Tile('tile61', { 'up': 7, 'left': 16, 'right': 14 });
var tile62 =
  new Tile('tile62', { 'left': 17, 'right': 15, 'down': 23 });
var tile63 =
  new Tile('tile63', { 'left': 18, 'right': 16, 'down': 23 });
var tile64 =
  new Tile('tile64', { 'up': 8, 'left': 19, 'right': 17 });
var tile65 =
  new Tile('tile65', { 'left': 20, 'right': 18, 'down': 24 });
var tile66 =
  new Tile('tile66', { 'left': 9, 'right': 19, 'down': 24 });
var tile67 =
  new Tile('tile67', { 'left': 11, 'right': 10 });
var tile68 =
  new Tile('tile68', { 'left': 14, 'right': 13 });
var tile69 =
  new Tile('tile69', { 'left': 17, 'right': 16 });
var tile70 =
  new Tile('tile70', { 'left': 20, 'right': 19 });
var tile71 =
  new Tile('tile71', { 'left': 14, 'right': 13 });
var tile72 =
  new Tile('tile72', { 'left': 17, 'right': 16 });
var tile73 =
  new Tile('tile73', { 'left': 20, 'right': 19 });
var tile74 =
  new Tile('tile74', { 'left': 14, 'right': 13 });
var tile75 =
  new Tile('tile75', { 'left': 17, 'right': 16 });
var tile76 =
  new Tile('tile76', { 'left': 20, 'right': 19 });
var tile77 =
  new Tile('tile77', { 'left': 14, 'right': 13 });
var tile78 =
  new Tile('tile78', { 'left': 17, 'right': 16 });
var tile79 =
  new Tile('tile79', { 'left': 20, 'right': 19 });
var tile80 =
  new Tile('tile80', { 'left': 14, 'right': 13 });
var tile81 =
  new Tile('tile81', { 'left': 17, 'right': 16 });
var tile82 =
  new Tile('tile82', { 'left': 20, 'right': 19 });
var tile83 =
  new Tile('tile83', { 'left': 14, 'right': 13 });
var tile84 =
  new Tile('tile84', { 'left': 17, 'right': 16 });
var tile85 =
  new Tile('tile85', { 'left': 20, 'right': 19 });
var tile86 =
  new Tile('tile86', { 'left': 14, 'right': 13 });
var tile87 =
  new Tile('tile87', { 'left': 17, 'right': 16 });
var tile88 =
  new Tile('tile88', { 'left': 20, 'right': 19 });
var tile89 =
  new Tile('tile89', { 'left': 14, 'right': 13 });
var tile90 =
  new Tile('tile90', { 'left': 17, 'right': 16 });
var tile91 =
  new Tile('tile92', { 'left': 20, 'right': 19 });
var tile93 =
  new Tile('tile93', { 'left': 17, 'right': 16 });
var tile94 =
  new Tile('tile94', { 'left': 20, 'right': 19 });
var tile95 =
  new Tile('tile95', { 'left': 14, 'right': 13 });
var tile96 =
  new Tile('tile96', { 'left': 17, 'right': 16 });
var tile97 =
  new Tile('tile97', { 'left': 20, 'right': 19 });
var tile98 =
  new Tile('tile98', { 'left': 14, 'right': 13 });
var tile99 =
  new Tile('tile99', { 'left': 17, 'right': 16 });
var tile100 =
  new Tile('tile100', { 'left': 20, 'right': 19 });
var tile89 =


var board = new Board(tile0);

board.addTile(tile0);
board.addTile(tile1);
board.addTile(tile2);
board.addTile(tile3);
board.addTile(tile4);
board.addTile(tile5);
board.addTile(tile6);
board.addTile(tile7);
board.addTile(tile8);
board.addTile(tile9);
board.addTile(tile10);
board.addTile(tile11);
board.addTile(tile12);
board.addTile(tile13);
board.addTile(tile14);
board.addTile(tile15);
board.addTile(tile16);
board.addTile(tile17);
board.addTile(tile18);
board.addTile(tile19);
board.addTile(tile20);
board.addTile(tile21);
board.addTile(tile22);
board.addTile(tile23);
board.addTile(tile24);
board.addTile(tile25);
board.addTile(tile0);
board.addTile(tile1);
board.addTile(tile2);
board.addTile(tile3);
board.addTile(tile4);
board.addTile(tile5);
board.addTile(tile6);
board.addTile(tile7);
board.addTile(tile8);
board.addTile(tile9);
board.addTile(tile10);
board.addTile(tile11);
board.addTile(tile12);
board.addTile(tile13);
board.addTile(tile14);
board.addTile(tile15);
board.addTile(tile16);
board.addTile(tile17);
board.addTile(tile18);
board.addTile(tile19);
board.addTile(tile20);
board.addTile(tile21);
board.addTile(tile22);
board.addTile(tile23);
board.addTile(tile24);
board.addTile(tile25);
board.addTile(tile0);
board.addTile(tile1);
board.addTile(tile2);
board.addTile(tile3);
board.addTile(tile4);
board.addTile(tile5);
board.addTile(tile6);
board.addTile(tile7);
board.addTile(tile8);
board.addTile(tile9);
board.addTile(tile10);
board.addTile(tile11);
board.addTile(tile12);
board.addTile(tile13);
board.addTile(tile14);
board.addTile(tile15);
board.addTile(tile16);
board.addTile(tile17);
board.addTile(tile18);
board.addTile(tile19);
board.addTile(tile20);
board.addTile(tile21);
board.addTile(tile22);
board.addTile(tile23);
board.addTile(tile24);
board.addTile(tile25);
board.addTile(tile0);
board.addTile(tile1);
board.addTile(tile2);
board.addTile(tile3);
board.addTile(tile4);
board.addTile(tile5);
board.addTile(tile6);
board.addTile(tile7);
board.addTile(tile8);
board.addTile(tile9);
board.addTile(tile10);
board.addTile(tile11);
board.addTile(tile12);
board.addTile(tile13);
board.addTile(tile14);
board.addTile(tile15);
board.addTile(tile16);
board.addTile(tile17);
board.addTile(tile18);
board.addTile(tile19);
board.addTile(tile20);
board.addTile(tile21);
board.addTile(tile22);
board.addTile(tile23);
board.addTile(tile24);
board.addTile(tile25);


tile0.domElement = $('.0');
tile1.domElement = $('.1');
tile2.domElement = $('.2');
tile3.domElement = $('.3');
tile4.domElement = $('.4');
tile5.domElement = $('.5');
tile6.domElement = $('.6');
tile7.domElement = $('.7');
tile8.domElement = $('.8');
tile0.domElement = $('.9');
tile1.domElement = $('.10');
tile2.domElement = $('.11');
tile3.domElement = $('.12');
tile4.domElement = $('.13');
tile5.domElement = $('.14');
tile6.domElement = $('.15');
tile7.domElement = $('.16');
tile8.domElement = $('.17');
tile0.domElement = $('.18');
tile1.domElement = $('.19');
tile2.domElement = $('.20');
tile3.domElement = $('.21');
tile4.domElement = $('.22');
tile5.domElement = $('.23');
tile6.domElement = $('.24');