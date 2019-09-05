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
  game.renderItems();
}

function tileInfo(event) {
  var target = $(event.currentTarget).attr('id');
  game.players[game.getTurn()].moveInDirection(target);
  return game.players[game.getTurn()].location;
}
