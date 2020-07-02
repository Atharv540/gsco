var car,wall;
var speed,weight;
var deformation;

function setup() {
  createCanvas(1600,400);
  createSprite(400, 200, 50, 50);
  speed = random(55,90);
  weight = random(400,1500);
  car = createSprite(50,200,50,50);
  wall = createSprite(1500,200,60,height/2);
  wall.shapeColor = color(80,80,80);
  deformation = 0;
}

function draw() {
  background(255,255,255); 
  car.velocityX = speed;
  deformation = 0.5*weight*speed*speed/22500;
  Text("Deformation:  "+ deformation,800,50);




  drawSprites();
}