var fixedRect , movingRect ;
function setup() {
  createCanvas(800,400);
 fixedRect =  createSprite(400, 200, 50, 50);
 movingRect = createSprite (200,200,50,50);
 rect1 = createSprite (200, 300, 50 , 50);
 rect2 = createSprite (200 , 400 , 50 , 50);
 rect3 = createSprite (50 , 100, 50 , 50);
 rect4 = createSprite (750, 100,50,50);
 rect3.velocityX = 5;
 rect4.velocityX = -5;
 rect3 . shapeColor = "red";
 rect4. shapeColor = "blue";
}

function draw() {
  background(0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;
if (isTouching (movingRect,fixedRect)){
  movingRect.shapeColor = "blue";
  fixedRect.shapeColor = "blue";
}
else{
  movingRect.shapeColor = "green"
  fixedRect.shapeColor = "green"

}
if (isTouching (movingRect,rect1)){
  movingRect.shapeColor = "blue";
  rect1.shapeColor = "blue";
}
else{
  movingRect.shapeColor = "green"
  rect1.shapeColor = "green"

}
bounceOff(rect3, rect4);
  drawSprites();
}
