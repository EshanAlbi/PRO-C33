var bg, snow;

function preload(){
  bg = loadImage("snow2.jpg")
  snow = loadAnimation("snow25.png", "Snow7.png");

}

function setup() {
  createCanvas(800,400);
  snowfall1 = createSprite(500,300,20,20);
  snowfall1.addAnimation("s",snow)
  snowfall1.scale = 0.2;

  snowfall2 = createSprite(600,200,20,20);
  snowfall2.addAnimation("s",snow)
  snowfall2.scale = 0.2;

  snowfall3 = createSprite(800,400,20,20);
  snowfall3.addAnimation("s",snow)
  snowfall3.scale = 0.2;

  snowfall4 = createSprite(100,400,20,20);
  snowfall4.addAnimation("s",snow)
  snowfall4.scale = 0.2;

  snowfall5 = createSprite(300,400,20,20);
  snowfall5.addAnimation("s",snow)
  snowfall5.scale = 0.2;

  snowfall6 = createSprite(100,200,20,20);
  snowfall6.addAnimation("s",snow);
  snowfall6.scale = 0.2;

}




function draw() {
  background(bg);  
  drawSprites();
}