var database;
var back_img, back_img1 ;
var gameState =0;
var playerCount = 0;
var allPlayers;
var score =0;
var player, form,game;
var player1,player2;
var players;
var fruits;
var fruitGroup;
var fruit1_img, fruit2_img, fruit3_img, fruit4_img, fruit5_img;
var player_img;
var player1score =0;
var player2score =0;

var obstacleGroup,obstacle,obstacleImage;

function preload(){
  back_img = loadImage("images/backgroundXp.jpg");
  back_img1 =  loadImage("images/newbck.jpeg");
  player_img = loadImage("images/basket2.png");
  fruit1_img = loadImage("images/cow.png");
  fruit2_img = loadImage("images/cow.png");

  fruitGroup = new Group();

  obstacleImage = loadImage("images/cow.png")
}
function setup() {
  createCanvas(1000, 600);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
  
}

function draw() {
  background(back_img);
  
   if (playerCount === 2) {
     game.update(1);
   }
   if (gameState === 1) {
     clear(); 
     game.play();
   }
   if (gameState === 2) {
    
     game.end();
   }
}