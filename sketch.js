const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1,box2,box3,box4,box5;
var bird;
function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(700,365,50,50);
    box2 = new Box(920,365,50,50);
    box3 = new Box(700,315,50,50);
    box4 = new Box(920,315,50,50);
    box5 = new Box(810,265,50,50);
    
    ground = new Ground(600,height,1200,20);

    bird = new Bird(400,200,50,50);
}

function draw(){
    background(0);
    Engine.update(engine);

    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();

    ground.display();
    bird.display();

    text(mouseX+ ", "+ mouseY,mouseX,mouseY);
}