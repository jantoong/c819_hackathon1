$(document).ready(drawBoard);

var tileIDCounter = 0;

function drawBoard() {
  var board = new CreateBoard();
  board.makeAllRings();
}
