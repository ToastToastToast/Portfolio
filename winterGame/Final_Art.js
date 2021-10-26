var img;
var ballx = 400;
var bally = 300;
//boss variables
var ball2x = 200;
var ball2y = 100;
var ball3x = 600;
var ball3y = 300;
//
var ballSize = 40;
var score = 0;  
var pageNumber = 0; //the state of the game
var timer = 20; //timer for racing game
var timerW = 20; //Willows sound test
var timerT = 25; //Titan's Test
var timerM = 30; //Moon's test
var timerB = 50; //Boss timer

function preload(){
  backStart = loadImage("https://toasttoasttoast.github.io/art74/start.png");
  backpg1 = loadImage("https://toasttoasttoast.github.io/art74/backpg1.png");
  backBreezeIntro = loadImage("https://toasttoasttoast.github.io/art74/backpg2.png");
  backMoonIntro = loadImage("https://toasttoasttoast.github.io/art74/backpg3.png");
  backBruceIntro = loadImage("https://toasttoasttoast.github.io/art74/backpg4.png");
  backWillowIntro = loadImage("https://toasttoasttoast.github.io/art74/backpg5.png");
  backTitanIntro = loadImage("https://toasttoasttoast.github.io/art74/backpg6.png");
  backpg7 = loadImage("https://toasttoasttoast.github.io/art74/backpg7.png");
  backpg8 = loadImage("https://toasttoasttoast.github.io/art74/backpg8.png");
  backpg9 = loadImage("https://toasttoasttoast.github.io/art74/backpg9.png");
  backpg10 = loadImage("https://toasttoasttoast.github.io/art74/backpg10.png");
  backpg11 = loadImage("https://toasttoasttoast.github.io/art74/backpg11.png");
  backpg12 = loadImage("https://toasttoasttoast.github.io/art74/backpg12.png");
  backpg13 = loadImage("https://toasttoasttoast.github.io/art74/backpg13.png");
  backpg14 = loadImage("https://toasttoasttoast.github.io/art74/backpg14.png");
  backpg15 = loadImage("https://toasttoasttoast.github.io/art74/backpg15.png");
  backpg151 = loadImage("https://toasttoasttoast.github.io/art74/backpg15_1.png");
  backpg16 = loadImage("https://toasttoasttoast.github.io/art74/backpg16.png");
  backpg17 = loadImage("https://toasttoasttoast.github.io/art74/backpg17.png");
  backpg18 = loadImage("https://toasttoasttoast.github.io/art74/backpg18.png");
  backpg19 = loadImage("https://toasttoasttoast.github.io/art74/backpg19.png");
  backpg20 = loadImage("https://toasttoasttoast.github.io/art74/backpg20.png");
  backpg21 = loadImage("https://toasttoasttoast.github.io/art74/backpg21.png");
  backpg22 = loadImage("https://toasttoasttoast.github.io/art74/backpg22.png");
  backpg23 = loadImage("https://toasttoasttoast.github.io/art74/backpg23.png");
  backpg24 = loadImage("https://toasttoasttoast.github.io/art74/backpg24.png");
  backpg25 = loadImage("https://toasttoasttoast.github.io/art74/backpg25.png");
  backpg26 = loadImage("https://toasttoasttoast.github.io/art74/backpg26.png");
  backpg27 = loadImage("https://toasttoasttoast.github.io/art74/backpg27.png");
  backpg28 = loadImage("https://toasttoasttoast.github.io/art74/backpg28.png");
  backpg29 = loadImage("https://toasttoasttoast.github.io/art74/backpg29.png");
  backpg30 = loadImage("https://toasttoasttoast.github.io/art74/backpg30.png");
  backpg31 = loadImage("https://toasttoasttoast.github.io/art74/backpg31.png");
  backpg32 = loadImage("https://toasttoasttoast.github.io/art74/backpg32.png");
  backpg33 = loadImage("https://toasttoasttoast.github.io/art74/backpg33.png");
  backpg34 = loadImage("https://toasttoasttoast.github.io/art74/backpg34.png");
  backpg35 = loadImage("https://toasttoasttoast.github.io/art74/backpg35.png");
  
  
  //animals
  bunnyFace = loadImage("https://toasttoasttoast.github.io/art74/bunny.png");
  wolfu = loadImage("https://toasttoasttoast.github.io/art74/wolfu.png");
  breeze = loadImage("https://toasttoasttoast.github.io/art74/wolf1.png");

  //elements
  snowflake = loadImage("https://toasttoasttoast.github.io/art74/snowflake.png");
  soundwave = loadImage("https://toasttoasttoast.github.io/art74/sound.png");
  chicken = loadImage("https://toasttoasttoast.github.io/art74/chicken.png");
  bearprint = loadImage("https://toasttoasttoast.github.io/art74/bear.png");
  jaw = loadImage("https://toasttoasttoast.github.io/art74/jaw.png");
  apple = loadImage("https://toasttoasttoast.github.io/art74/apple.png");
  muffin = loadImage("https://toasttoasttoast.github.io/art74/muffin.png");
                    
}

function setup() {
  createCanvas(800,600);
  textAlign(CENTER);
  textSize(25);
  fill(0, 0, 0);
  setInterval(timeIt,1000);
  
  restart = createButton('restart');
  restart.position(0,577);
  restart.mousePressed(begin);
  
  redolvl = createButton('Back 1 pg.');
  redolvl.position(50,577);
  redolvl.mousePressed(redo);
}//end of setup


function draw() {
  
  if(pageNumber == 0){
   
    background(backStart);
  }
  if(pageNumber == 1){
  background(backpg1);
  }
  if(pageNumber == 2){
  background(backBreezeIntro);
  }
   if(pageNumber == 3){
  background(backMoonIntro);
  }
   if(pageNumber ==4){
  background(backBruceIntro);
  }
   if(pageNumber == 5){
  background(backWillowIntro);
  }
   if(pageNumber == 6){
  background(backTitanIntro);
  }
   if(pageNumber == 7){
  background(backpg7);
  }
   if(pageNumber == 8){
     levelOne();
    text(("Score: " + score),width-50,590);
  }
   if(pageNumber == 9){
  background(backpg9);
  }
   if(pageNumber == 10){
  background(backpg10);
  }
   if(pageNumber == 11){
  background(backpg11);
  }
   if(pageNumber == 12){
  background(backpg12);
  }
    if(pageNumber == 13){
  background(backpg13);
  }
    if(pageNumber == 14){  //the decisions 4
  background(backpg14);
  }
    if(pageNumber == 15){  //the race screen
    levelRace();
    text(("Score: " + score),width-50,590);
    text(timer, 760, 40);
  }
  if(pageNumber == 16){  // race lose
  background(backpg17);
  reset();
  }
 if(pageNumber == 17){   // race win
  background(backpg16);
reset();
  }
  if(pageNumber == 18){
  background(backpg18);
  score = 0;
  }
  if(pageNumber == 19){
    levelWillow();
    text(("Score: " + score),width-50,590);
    text(timerW, 760, 40);
  }
  if(pageNumber == 20){  // willow lose
  background(backpg20);
  reset();
  }
  if(pageNumber == 21){  // willow win
  background(backpg21);
  reset();
  }
  if(pageNumber == 22){
  background(backpg22);
  score = 0;
  }
   if(pageNumber == 23){
  levelTitan();
  fill(225,225,225);
  text(("Score: " + score),width-50,590);
  text(timerT, 760, 40);
  }
   if(pageNumber == 24){ // titan lose
  background(backpg24);
  reset();
  }
   if(pageNumber == 25){ // titan win
  background(backpg25);
  reset();
  }
   if(pageNumber == 26){
  background(backpg26);
 score = 0;
  }
   if(pageNumber == 27){
  levelMoon();
  text(("Score: " + score),width-50,590);
  text(timerM, 760, 40);
  }
   if(pageNumber == 28){ //Moon lose
  background(backpg28);
  reset();
  }
     if(pageNumber == 29){ // Moon win
  background(backpg29);
  reset();
  }
     if(pageNumber == 30){
  background(backpg30);
  score = 0;
  }
     if(pageNumber == 31){
  background(backpg31);
  }
     if(pageNumber == 32){
  bossBattle();
   text(("Score: " + score),width-50,590);
  text(timerB, 760, 40);
  }
  if(pageNumber ==33){ //boss loss
    background(backpg33);
    reset();
  }
  if(pageNumber == 34){ //boss win
    background(backpg34);
    reset();
  }
  if(pageNumber == 35){
    background(backpg35);
  }
  
  
  
}//end of draw

function keyPressed(){
  if(keyCode === RIGHT_ARROW){
    
    pageNumber = pageNumber + 1;
  }
  if(keyCode === LEFT_ARROW){
    if(pageNumber >= 0){
    pageNumber = pageNumber - 1;
    }
  }
  return false;
}//end of keyPressed
  
function begin(){
  pageNumber = 0;
  timer = 20;
  timerW = 20;
  timerT = 25;
  timerM = 30;
  timerB = 50;
  score = 0;
}

function redo(){
  timer = 10;
  timerW = 20;
  timerT = 25;
  timerM = 30;
  score = 0;
  timerB = 50;
  pageNumber--;
}

function reset(){
  timer = 10;
  timerW = 20;
  timerT = 25;
  timerM = 30;
  score = 0;
  timerB = 50;
}


function levelOne(){
  
  background(backpg8);
  text("Catch the rabbits", width/2, height-20);
  var distToBall = dist(ballx, bally, mouseX, mouseY);
  if(distToBall < ballSize/2){
    ballx = random(width);
    bally = random(height);
    score = score + 1;
  }
  if(score >= 10){
    pageNumber = 9;
  }
  image(bunnyFace, ballx-23, bally-23);
  ellipse(ballx, bally, 1, 1);
} //end of level 1

function startRace(){
  pageNumber = pageNumber + 1;
}

/*function levelRace(){
  wolfuPosX=10;
  breezePosX=10;
  image(wolfu,wolfuPosX,580);
  image(breeze,breezePosX,560);
  setInterval(function(){breezePosX = breezePosX + 10;},1000);
  
  numP = random(10);
  if(keyPressed() == numP){
    wolfuPosX=10;
    numP = random(10);
  }
  text(numP, width/2, 20);
  
  if(breezePosX >= 750){
    pageNumber = 17;
  }
  if(wolfuPosX >= 750){
    pageNumber = 16;
  }
}//end of level race
*/  

function levelRace(){

  background(backpg15);
  text("Grab Snowflakes Quicker Than Breeze", width/2, height-20);
  var distToBall = dist(ballx, bally, mouseX, mouseY);
  if(distToBall < ballSize/2){
    ballx = random(width);
    bally = random(height);
    score = score + 1;
  }
  if(score >= 10){
    pageNumber = 17;
  }
  if(timer == 0){
    pageNumber++;
  }
  image(snowflake, ballx-20, bally-20);
  ellipse(ballx, bally, 1, 1);
} //end of level Race

function timeIt(){
  //breeze's timer
  if(timer > 0 && pageNumber == 15){
    timer--;
  }
   if(timer == 0){
    pageNumber++;
  }
  //willows timer
  if(timerW > 0 && pageNumber==19){
    timerW--;
  }
  if(timerW == 0){
    pageNumber++;
  }
  //Titan's Timer
  if(timerT > 0 && pageNumber == 23){
    timerT--;
  }
  if(timerT == 0){
    pageNumber++;
  }
  //Moon's Timer
  if(timerM > 0 && pageNumber == 27){
    timerM--;
  }
  if(timerM == 0){
    pageNumber++;
  }
  //Bears Timer
  if(timerB > 0 && pageNumber == 32){
    timerB--;
  }
  if(timerB == 0){
    pageNumber++;
  }
}

function levelWillow(){
  background(backpg19);
  text("Catch the hidden animal sounds", width/2, height-20);
  var distToBall = dist(ballx, bally, mouseX, mouseY);
  if(distToBall < ballSize/2){
    ballx = random(width);
    bally = random(height);
    score = score + 1;
  }
  if(score >= 15){
    pageNumber = 21;
  }
  if(timerW == 0){
    pageNumber++;
  }
  image(soundwave, ballx-30, bally-30);
  ellipse(ballx, bally, 1, 1);
} //end of level Willow

function levelTitan(){
  fill(252, 186, 3);
  background(backpg23);
  text("Slay the deer for food", width/2, height-20);
  var distToBall = dist(ballx, bally, mouseX, mouseY);
  if(distToBall < ballSize/2){
    ballx = random(width);
    bally = random(height);
    score = score + 1;
  }
  if(score >= 25){
    pageNumber = 25;
  }
  if(timerT == 0){
    pageNumber++;
  }
  image(chicken, ballx-20, bally-20);
  ellipse(ballx, bally, 1, 1);
} //end of level Titan

function levelMoon(){
  fill(0,0,0);
  background(backpg27);
  text("Sniff out the tracks", width/2, height-20);
  var distToBall = dist(ballx, bally, mouseX, mouseY);
  if(distToBall < ballSize/2){
    ballx = random(width);
    bally = random(height);
    score = score + 1;
  }
  if(score >= 38){
    pageNumber = 29;
  }
  if(timerM == 0){
    pageNumber++;
  }
  image(bearprint, ballx-30, bally-30);
  ellipse(ballx, bally, 2, 2);
} //end of level Moon

function bossBattle(){
  background(backpg32);
  text("Get the jaws, avoid biting the food", width/2, height-20);
  var distToBall = dist(ballx, bally, mouseX, mouseY);
  var distToBall2 = dist(ball2x, ball2y, mouseX, mouseY);
  var distToBall3 = dist(ball3x, ball3y, mouseX, mouseY);
  if(distToBall < ballSize/2){
    ballx = random(width);
    bally = random(height);
    score = score + 2;
  }
  if(distToBall2 < ballSize/2){
    ball2x = random(width);
    ball2y = random(height);
    score = score - 1;
  }
  if(distToBall3 < ballSize/2){
    ball3x = random(width);
    ball3y = random(height);
    score = score - 1;
  }
  if(score >= 28){
    pageNumber = 34;
  }
  if(timerB == 0){
    pageNumber++;
  }
  image(jaw, ballx-30, bally-30);
  image(apple, ball2x-30, ball2y-30);
  image(muffin, ball3x-30, ball3y-30);
  ellipse(ballx, bally, 2, 2);
  ellipse(ball2x, ball2y, 2, 2);
  ellipse(ball3x, ball3y, 2, 2);
} //end of level boss
