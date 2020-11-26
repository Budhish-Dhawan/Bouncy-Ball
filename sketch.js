const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine,world;
var ground, ball;

function setup() {
  createCanvas(400,400);

  //creating a physics engine
  engine = Engine.create();
  //creating a physical world using the physics engine created
  world = engine.world;

  var options = {
    isStatic : true
  }
  //creating an ground
  ground = Bodies.rectangle(200, 390, 200, 20,options);
  //adding the ground to the world created
  World.add(world,ground);

  var ball_options = {
    restitution:0.8
  }
  //creating a ball
  ball = Bodies.circle(200, 100, 20, ball_options);
  //adding the ground to the world
  World.add(world, ball);

  
}

function draw() {
  background(0); 
  Engine.update(engine);

  rectMode(CENTER);
  fill("brown");
  rect(ground.position.x, ground.position.y, 400, 20);

  ellipseMode(RADIUS);
  fill("yellow");
  stroke("white");
  strokeWeight(3);
  ellipse(ball.position.x, ball.position.y, 20, 20);

  drawSprites();
}