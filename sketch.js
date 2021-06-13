var PLAY = 1;
var END = 0;
var gameState = PLAY;
var ground,boy
var score = 0;
var bgImg
var boy_moving
var  can, wood, bin
var bin2 , airplane, wrapper
var binsGroup
var sun,sunImg
var cansgroup,wrappersgroup,airplanesgroup;
var bonus, garbagetouch, fulltime;


function preload(){
  
  bgImg = loadImage("track.png")
  boy_moving = loadAnimation("walking_1.png", "walking_2.png", "walking_3.png", "walking_4.png")
  can= loadImage("waste.png")
  wood= loadImage("waste2.png")
  bin = loadImage("dustbin.png")
  //bin2 = loadImage("bin2.png")
  airplane = loadImage("waste4.png")
  wrapper = loadImage("waste3.png")  
  bgImg = loadImage("desert.jpg")
  sunImg = loadImage("sun.png")
  bin = loadImage("dustbin.png")
  bonus = loadSound("bonus.wav");
  garbagetouch = loadSound("garbagetouch.wav");
  fulltime = loadSound("fulltimeaudio.mp3");

  //bin2 = loadImage("bin2.png")
}

function setup() {
  createCanvas(1300, 650);
  ground = createSprite(650,590,1300,120);
  ground.shapeColor = '#654321'
  boy = createSprite(80,450,30,50)
  boy.addAnimation( "walkingboy", boy_moving)
  boy.scale = 0.3;
  sun = createSprite(90,70,60,60)
  sun.addImage(sunImg)
  sun.scale = 0.2
  //strips = createSprite(300,580,100,20)
  //strips.shapeColor = 'white'
  // wastesGroup = createGroup();
  binsGroup = createGroup();
  cansgroup = createGroup()
  wrappersgroup = createGroup()
  airplanesgroup = createGroup()
  
  
  
}

function draw() {
 background(bgImg);
 //strokeWeight(10)
 //stroke('black')
 spawnStrips();
 
 //spawnWaste();
 spawnBins();
 spawn_can();
 spawn_wrapper();
 spawn_airplane();
text("SCORE : " + score, 1200,50)

  
 
 drawSprites();
 }

 function spawnStrips(){
  if(frameCount % 30 === 0){
  var strips = createSprite(1300,590,100,20)
  strips.shapeColor = 'white'
  strips.velocityX = -9
  strips.depth = boy.depth;
  boy.depth = boy.depth + 1;
  }
}

function spawn_can(){
  if( frameCount %60 === 0){
  var cansprite = createSprite(1300,random(520,600),10,40);
  cansprite.addImage(can);
  cansprite.velocityX = -9;
  cansprite.scale = 0.04;
  cansprite.lifetime = 700;
  cansgroup.add(cansprite);
  }
  if (boy.isTouching(cansgroup)){
    cansgroup.visible = false;
    score = score + 2
    garbagetouch.play();
  }
}

function spawn_wrapper(){
  if( frameCount %60 === 0){
  var wrappersprite = createSprite(1300,random(520,600),10,40);
  wrappersprite.addImage(wrapper);
  wrappersprite.velocityX = -9;
  wrappersprite.scale = 0.04;
  wrappersprite.lifetime = 700;
  wrappersgroup.add(wrappersprite);
  }

  if (boy.isTouching(wrappersgroup)){
    wrappersgroup.visible = false;
    score = score + 2
    garbagetouch.play();
  }
  
}

function spawn_airplane(){
  if( frameCount %60 === 0){
  var airplanesprite = createSprite(1300,random(520,600),10,40);
  airplanesprite.addImage(airplane);
  airplanesprite.velocityX = -9;
  airplanesprite.scale = 0.04;
  airplanesprite.lifetime = 700;
  }
  airplanesgroup.add(airplanesprite);
  if (boy.isTouching(airplanesgroup)){
    airplanesgroup.visible = false;
    score = score + 2
    garbagetouch.play();
  }
}



 
 function spawnBins(){
   if(frameCount %160 === 0){
   var dustbin = createSprite(1300,520,20,20)
   dustbin.velocityX = -9
   var rand = Math.round(random(1,2))
   switch(rand){
     case 1 : dustbin.addImage(bin)
     break;
     //case 2 : dustbin.addImage(bin2)
     //break;
     default : break
   }
   dustbin.scale = 0.1
   dustbin.lifetime = 700
   binsGroup.add(dustbin);
   if(boy.isTouching(binsGroup)){
    binsGroup.visible = false;
    score = score + 5
    console.log("hi")
  }
  
 }

 
 }
















