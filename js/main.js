$(document).ready(drawBoard);

var tileIDCounter = 0;
var game = new Game();


function drawBoard() {
  var board = new CreateBoard();
  board.makeAllRings();
  createDOM();
}

function createDOM() {
  game.createNewPlayer();
  game.createNewPlayer();
  game.createZombies();
  game.renderItems();
}
