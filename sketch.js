var ball,img,paddle,img2;
function preload() {
  /* preload your images here of the ball and the paddle */
  img = loadImage ("paddle.png");
  img2 = loadImage ("ball.png");
}
function setup() {
  createCanvas(400, 400);
   /* create the Ball Sprite and the Paddle Sprite */
  ball = createSprite(20, 200, 10, 10);
  /* assign the images to the sprites */
  ball.addImage("ball", img2);
  ball.scale = 0.5;
  /* give the ball an initial velocity of 9 in the X direction */
  ball.velocityX = 9;

  paddle = createSprite(380, 200, 10, 10);
  paddle.addImage("paddleimg", img);
  
}

function movearound(){

 ball.velocityY=random(-8,8);

}

function draw() {
  background(205,153,0);
  randomVelocity();
  /* create Edge Sprites here */
  edges=createEdgeSprites();
  ball.bounceOff(edges[0]);
  
  ball.bounceOff(edges[2]);
  ball.bounceOff(edges[3]);
  ball.bounceOff(paddle,movearound);
  /* Allow the ball sprite to bounceOff the left, top and bottom edges only, leaving the right edge of the canvas to be open. */
  

  /* Allow the ball to bounceoff from the paddle */
  /* Also assign a collision callback function, so that the ball can have a random y velocity, making the game interesting */
 
   
  
  
  if(keyDown(UP_ARROW)){
     paddle.velocityY = -7;
  }
  
  if(keyDown(DOWN_ARROW)){
    paddle.velocityY = 7;
  }
  drawSprites();
  
}

function randomVelocity()
{
  /* this function gets called when the ball bounces off the paddle */
  
  /* assign the ball a random vertical velocity, so it bounces off in random direction */
}

