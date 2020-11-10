var monkey , monkey_running
var banana ,bananaImage, obstacle, obstaclesImage
var bananaGroup, obstacleGroup
var score = 0;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
   ground = createSprite (200,370,400,5);
   ground.shapeColor = "green"
  
  monkey = createSprite(70,300,20,20);
  monkey.addAnimation ("running", monkey_running);
  monkey.scale = 0.1;
  
  
  obstaclesGroup = new Group();
  bananaGroup = new Group();
  
  
 

  
}


function draw() {
  createCanvas (400,400);
  background ("lightgreen");
  
   ground.velocityX = -2
   ground.x = ground.width/2; 
  // console.log(ground.x);
  
  
    if (keyDown("space") && monkey.y >= 200) {
    monkey.velocityY = -3;
  }
  monkey.velocityY = monkey.velocityY + 0.3
  monkey.collide (ground);
 
  
   spawnObstacles();
   spawnBanana();
  
   score = score + Math.round(getFrameRate()/60);
  
  
  drawSprites();
  
  stroke("green");
  textSize(20);
  fill("green");
  text ("Survival Time :-  " + score, 100, 50)
}


    
  
function spawnObstacles(){
 if (frameCount % 300 === 0){
   var obstacle = createSprite(200,-310);
   obstacle.velocityX = 6;
  
   obstacle.y = Math.round(random(330,310));
   obstacle.addImage(obstacleImage);   
   obstacle.velocityX = -1;

   
    //assign scale and lifetime to the obstacle           
    obstacle.scale = 0.1;
    obstacle.lifetime = 300;
      monkey.depth = obstacle.depth + 1;
   
   //add each obstacle to the group
    obstaclesGroup.add(obstacle);
 }
}


function spawnBanana() {
   if (frameCount % 80 === 0){
   var banana = createSprite(200,-310);

  
  banana.y = Math.round(random(300,200));
  banana.addImage(bananaImage);   
  banana.velocityX = -1;

   
      
  banana.scale = 0.07;
  banana.lifetime = 300;
   monkey.depth = banana.depth + 1;
 
    bananaGroup.add (banana);
 }
}





