var eventLog;
var game = new Game();
var board = new BoardView();
var itemUsed;

$(document).ready(function(){
  eventLog = new EventLog($('.event_log'));
  game = new Game(eventLog);
  game.start();
});
