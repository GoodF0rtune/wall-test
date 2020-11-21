var car
var w1;
var wall, thick;
function setup() {
  createCanvas(800,400);
  car1 = createSprite(50,height/2,20,10);
  
  w1 = random(30,52);
  speed = random(223,321);
  car1.velocityX = (speed/15);
  thick = random(22,83);
  wall = createSprite(800,200,thick,height/2);
  if(crashTest(speed,w1) < 10){
    wall.shapeColor = 'green';
  }else{
    wall.shapeColor = 'red';
  }
}

function draw() {
  background(255,255,255);  
  drawSprites();
  if(car1.isTouching(wall)){
    car1.velocityX = 0;
  }
  text(crashTest(speed,w1),300,300);
}
function crashTest(carSpeed,carWeight) {
  return (0.3 * carWeight * carSpeed * carSpeed)/(thick * thick * thick);
}
