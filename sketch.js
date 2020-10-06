var box1, box2;
function setup() {
  createCanvas(1200,800);
  box1 = createSprite(600,400, 50, 80);
  box1.shapeColor = "green";
  box1.debug = true;

  box2 = createSprite(400,200, 80, 30);
  box2.debug = true;
  box2.shapeColor = "green";
}

function draw() {
  background(0,0,0);
  box2.x = World.mouseX;
  box2.y = World.mouseY;
  console.log(box1.x -box2.x);
  if(box2.x - box1.x < box1.width/2 + box2.width &&
    box1.x - box2.x < box1.width/2 + box2.width &&
    box2.y - box1.y < box1.height/2 + box2.height &&
    box1.y - box2.y < box1.height/2 + box2.height)
  {
    box1.shapeColor = "red";
    box2.shapeColor = "red";
  }
  else
  {
    box1.shapeColor = "green";
    box2.shapeColor = "green";
  }
  drawSprites();
}
