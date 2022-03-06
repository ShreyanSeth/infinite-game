var PLAY = 1;
var END = 0;
var gameState = PLAY;

var astronaut, astronautImage, galaxy_background, rock1Image, rock2Image, rock3Image, rock4Image,rocksGroup;

var score;


function preload(){
    astronautImage = loadImage("astronaut_character_clear.png");
    galaxyImage = loadImage("galaxy background.jpg")
    rock1Image = loadImage("rock_image1.png");
    rock2Image = loadImage("rock_image2.png");
    rock3Image = loadImage("rock_image3.png");
    rock4Image = loadImage("rock_image4.png");
}

function setup() {
    
createCanvas(windowWidth,windowHeight)    
    
    galaxy_background = createSprite(200,180,400,20);
    galaxy_background.addImage("galaxy_background", galaxyImage);
    
    astronaut = createSprite(50,160,20,50);
    astronaut.addImage("astronaut_character_clear", astronautImage);
    astronaut.scale = 0.4

    rocksGroup=new Group()
}

function draw() {
    background("white")
    galaxy_background.velocityX=-5
    if (galaxy_background.x < 0){
        galaxy_background.x = galaxy_background.width/2;
      }
    if(keyDown("up")) {
        astronaut.y=astronaut.y-10
    }

    if(keyDown("down")) {
        astronaut.y=astronaut.y+10
    }
    
     spawnRocks()

    drawSprites()
    if (rocksGroup.isTouching(astronaut)){
        textSize(30)
        text("Game Over",width/2,height/2)
        rocksGroup.setVelocityXEach(0)
        galaxy_background.velocityX=0
    }
       
    }
    function spawnRocks(){
        if (frameCount % 60 === 0){
          var rocks = createSprite(width,Math.round(random(50,height-50)),10,40);
          rocks.velocityX = -6
          
           //generate random obstacles
           var rand = Math.round(random(1,4));
           switch(rand) {
             case 1: rocks.addImage(rock1Image);
                     break;
             case 2: rocks.addImage(rock2Image);
                     break;
             case 3: rocks.addImage(rock3Image);
                     break;
             case 4: rocks.addImage(rock4Image);
                     break;
             
           }
          
           //assign scale and lifetime to the obstacle           
           rocks.scale = 0.3;
        
          
          //add each obstacle to the group
          rocksGroup.add(rocks)
        
        }
       }