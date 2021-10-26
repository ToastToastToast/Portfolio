var img;
var ballx = 300;
var bally = 300;
var ballSize = 40;
var score = 0;
var gameState = "L1";

function preload(){
  back1 = loadImage("https://toasttoasttoast.github.io/art74/games/bedroom.png");
  money = loadImage("https://toasttoasttoast.github.io/art74/games/money.png");
  back2 = loadImage("https://toasttoasttoast.github.io/art74/games/shelves.png");
  jar = loadImage("https://toasttoasttoast.github.io/art74/games/jar.png");
  back3 = loadImage("https://toasttoasttoast.github.io/art74/games/forest.png");
  firefly = loadImage("https://toasttoasttoast.github.io/art74/games/firefly.png");
  back4 = loadImage("https://toasttoasttoast.github.io/art74/games/parent.png");
  sorry = loadImage("https://toasttoasttoast.github.io/art74/games/sorry.png");
  back5 = loadImage("https://toasttoasttoast.github.io/art74/games/foregiven.png");

}

function setup() {
  createCanvas(600,600);
  textAlign(CENTER);
  textSize(25);
  fill(225,225,225);
}//end of setup


function draw() {
  
  if(gameState == "L1"){
  levelOne();
  }
  if(gameState == "L2"){
    levelTwo();
  }
  if(gameState == "L3"){
    levelThree();
  }
  if(gameState == "L4"){
    levelFour();
  }
  
  text(("Score: " + score),width/2,40);
  
}//end of draw

function levelOne(){
  background(back1);
  text("Steal parents money", width/2, height-20);
  var distToBall = dist(ballx, bally, mouseX, mouseY);
  if(distToBall < ballSize/2){
    ballx = random(width);
    bally = random(height);
    score = score + 1;
  }
  if(score >= 10){
    gameState = "L2";
  }
  image(money, ballx-20, bally-20);
  ellipse(ballx, bally, 1, 1);
} //end of level 1

function levelTwo(){
  background(back2);
  text("buy some jars", width/2, height-20);
  var distToBall = dist(ballx, bally, mouseX, mouseY);
  if(distToBall < ballSize/2){
    ballx = random(width);
    bally = random(height);
    score = score + 1;
  }
  if(score >=20){
    gameState = "L3";
  }
  image(jar, ballx-50, bally-50);
  ellipse(ballx, bally, 1, 1);
} //end of level 2


function levelThree(){
  background(back3);
  text("catch fireflies", width/2, height-20);
  var distToBall = dist(ballx, bally, mouseX, mouseY);
  if(distToBall < ballSize/2){
    ballx = random(width);
    bally = random(height);
    score = score + 1;
  }
  if(score >= 30){
    gameState = "L4";
  }
  
  image(firefly, ballx-20, bally-20);
  ellipse(ballx, bally, 1, 1);
} //end of level 3



function levelFour(){
  background(back4);
  text("apologize", width/2, height-20);
  var distToBall = dist(ballx, bally, mouseX, mouseY);
  if(distToBall < ballSize/2){
    ballx = random(width);
    bally = random(height);
    score = score + 1;
  }
  if(score >= 50){
    background(0);
  }
  
  image(sorry, ballx-50, bally-50);
  ellipse(ballx, bally, 1, 1);
} //end of level 4
