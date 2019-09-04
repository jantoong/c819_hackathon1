$(document).ready(drawBoard);

var tileIDCounter = 0;

function drawBoard() {
  var board = new CreateBoard();
  board.makeAllRings();
  createDOM();
}

function createDOM() {
  var game = new Game();
  game.createNewPlayer();
  game.createNewPlayer();
  game.createZombies();
}
