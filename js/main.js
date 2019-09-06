$(document).ready(drawBoard);

var tileIDCounter = 0;
var game = new Game();
var itemUsed;

function drawBoard() {
  var board = new CreateBoard();
  board.makeAllRings();
  createDOM();
  $('.rollbox').on('click', game.diceRoll);
  $('.tile').on('click', tileInfo);
  $('#play_again_button').click(game.resetGame).click(game.hideWinModal);
  $('.newPlayer').on('click', game.createNewPlayer);
}

function createDOM() {
  game.createZombies();
  game.renderItems();
}

function tileInfo(event) {
  var target = $(event.currentTarget).attr('id');
  //debugger;
  for(entity of tileList[target].entities) {
    if (entity.includes(game.zombies)){
      return;
    }
  }
  if (game.movementCounter > 0) {
  var result = game.players[game.getTurn()].moveInDirection(target);
  if(result){
    game.movementCounter--;
  }
  if(game.movementCounter === 0) {
    game.moveZombies();
  }
  return game.players[game.getTurn()].location;
  }
}
