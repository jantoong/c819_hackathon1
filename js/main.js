$(document).ready(drawBoard);

var tileIDCounter = 0;
var game = new Game();

function drawBoard() {
  var board = new CreateBoard();
  board.makeAllRings();
  createDOM();
  $('.rollbox').on('click', game.diceRoll);
  $('.tile').on('click', tileInfo);
}

function createDOM() {
  game.createNewPlayer();
  game.createNewPlayer();
  game.createZombies();
}

function tileInfo(event){
  var target = $(event.currentTarget).attr('id');
  console.log('this is '+target);
  return target;
}
