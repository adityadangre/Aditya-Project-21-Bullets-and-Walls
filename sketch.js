var wall, thikness;
var bullet;
var speed,weight, damage;

function setup() {
  createCanvas(1600,400);
  thikness=random(22,83);
  bullet=createSprite(50,200,40,10);
  bullet.shapeColor=("white");
  wall=createSprite(1200,200,thikness,height/2);
  wall.shapeColor=(80,80,80);
  bullet.depth=wall.depth;
  bullet.depth=bullet.depth+1;
  speed=random(223,321);
  weight=random(30,52);
  
}

function draw() {
  background("black"); 

  bullet.velocityX=speed;
  
  damage = (weight*speed*speed)/(thikness*thikness*thikness);
  
    if(hascollide(bullet,wall)===true){

      bullet.velocityX=0;
      
    if(damage>10){
      //red color
      wall.shapeColor=color(255,0,0);
    }
    else{
      //light green
      wall.shapeColor=color(0,255,0);
    }
  }

  drawSprites();
}
