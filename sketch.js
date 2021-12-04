var PLAY=1;
var END=0;
var gameState = 1;
var runningNaruto, jumpingNaruto, deadNaruto;
var badSasuke;
var bridge, invisibleGround;

var score = 0;

function preload(){
runningNaruto = loadAnimation ("narutoRun.gif");
jumpingNaruto = loadImage ("jumpingNaruto.png");
standNaruto = loadImage ("narutoStand.png");
deadNaruto = loadImage ("deadNaruto.png");
badSasuke = loadImage ("badsasuke.png");
bridge = loadImage ("bridge.png");
}

function setup() {
    createCanvas(windowWidth,windowHeight);

    bridge=createSprite(width/2,200);
    bridge.addImage(bridge);
    bridge.velocityX= 4;
    
    Naruto = createSprite(50,height-70,20,50);
  
    Naruto.addAnimation("running", runningNaruto);
    Naruto.addImage("collided", deadNaruto);
    Naruto.setCollider('circle',0,0,350)
    Naruto.scale = 0.08
    Naruto.debug = false;

    invisibleGround = createSprite(width/2,height-10,width,125);  
    invisibleGround.shapeColor = "#f4cbaa";

    bridge = createSprite(width/2,height,width,2);
    bridge.addImage("bridge",bridge);
    bridge.x = width/2
    bridge.velocityX = -(6 + 3*score/100);

    score = 0;
}

function draw() {
    background(bridge);
    textSize(20);
    fill("black")
    text("Puntuación: "+ score,30,50);

    
  if (gameState===PLAY){
    score = score + Math.round(getFrameRate()/60);
    bridge.velocityX = -(6 + 3*score/100);

    trex.velocityY = trex.velocityY + 0.8

    if (ground.x < 0){
        ground.x = ground.width/2;
      }

      trex.collide(invisibleGround);

   spawnBadSasukes();
   if(badSasuke.isTouching(naruto)){  

    gameState = END;
}




  }
 
  if (gameState === END) {
    naruto.changeAnimation("dead",deadNaruto);
    bridge.velocityX = 0;
    naruto.velocityY = 0;
}
}

function spawnBadSasukes(){
    if(frameCount % 60 === 0) {
        var badSasukes = createSprite(600,height-95,20,30);
        badSasukes.setCollider('circle',0,0,45)
        
      
        badSasukes.velocityX = -(6 + 3*score/100);
        
}
}

