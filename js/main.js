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
  if (game.playerTurn) {
    if (game.movementCounter > 0) {
      var target = $(event.currentTarget).attr('id');
      game.players[game.getTurn()].moveInDirection(target);
      game.movementCounter--;
      if(game.movementCounter === 0) {
        game.playerTurn = false;
      }
      return game.players[game.getTurn()].location;
    }
  } else {
    if (game.zombieMovementCounter > 0) {
      if (game.zombieTurns[0].moves > 0) {
        var target = $(event.currentTarget).attr('id');
        game.zombieTurns[0].moveInDirection(target);
        game.zombieMovementCounter--;
        game.zombieTurns[0].moves--;
        return game.zombies[0].location;
      }
      if (game.zombieTurns[1].moves > 0) {
        var target = $(event.currentTarget).attr('id');
        game.zombieTurns[1].moveInDirection(target);
        game.zombieMovementCounter--;
        game.zombieTurns[1].moves--;
        if (game.zombieMovementCounter === 0) {
          game.playerTurn = true;
        }
        return game.zombies[1].location;
      }
    }
  }

}
