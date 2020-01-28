var moving_rect;
var still_rect;





function setup() {
  createCanvas(800,400);
  moving_rect = createSprite(400, 200, 80, 30);
  still_rect = createSprite(200, 200, 50, 80);

  moving_rect.shapeColor = "maroon";
  still_rect.shapeColor = "green";
}

function draw() {
  background(255,255,255); 
  
  moving_rect.x = World.mouseX;
  moving_rect.y = World.mouseY;  

  console.log(moving_rect.width / 2 + still_rect.width / 2);

  if(moving_rect.width / 2 + still_rect.width / 2 >= moving_rect.x - still_rect.x && moving_rect.width / 2 + still_rect.width / 2 >= still_rect.x - moving_rect.x && moving_rect.height / 2 + still_rect.height / 2 >= moving_rect.y - still_rect.y && moving_rect.height / 2 + still_rect.height / 2 >= still_rect.y - moving_rect.y){

    moving_rect.shapeColor = "black";
    still_rect.shapeColor = "blue";
  }
   
  else{

    moving_rect.shapeColor = "maroon";
    still_rect.shapeColor = "green";
  }

 



  drawSprites();
}