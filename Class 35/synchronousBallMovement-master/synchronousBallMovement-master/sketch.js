var database, player, form, game, playerCount;
var gameState = 0


function setup(){
  database = firebase.database();
  createCanvas(500,500);
  game = new Game(); 
  game.getState(); 
  game.start();
}

function draw(){
  
}
