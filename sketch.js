
const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

function preload() {
}

function setup(){
    var canvas = createCanvas(1200, 400);
    engine = Engine.create();
    world = engine.world;

    ground = new Ground(600, 400, 1200, 10);
    ground1 = new Ground(600, 350, 300, 10);

    polygon = new Polygon(200, 100, 30, 30);

//base layer
    block1 = new Box(600, 320, 30, 30);
    block2 = new Box(570, 320, 30, 30);
    block3 = new Box(540, 320, 30, 30);
    block4 = new Box(510, 320, 30, 30);
    block5 = new Box(630, 320, 30, 30);
    block6 = new Box(660, 320, 30, 30);
    block7 = new Box(690, 320, 30, 30);

//second layer
    block8 = new Box(600, 290, 30, 30);
    block9 = new Box(570, 290, 30, 30);
    block10 = new Box(540, 290, 30, 30);
    block11 = new Box(630, 290, 30, 30);
    block12 = new Box(660, 290, 30, 30);

//third layer
    block13 = new Box(600, 260, 30, 30);
    block14 = new Box(570, 260, 30, 30);
    block15 = new Box(630, 260, 30, 30);
    block16 = new Box(600, 230, 30, 30);

    launcher = new Slingshot(polygon.body, {x: 200, y: 100});

}

function draw(){
    //log(box.body.position.y);
    background('orange');
    Engine.update(engine);

    ground.display();
    ground1.display();

//base layer
    block1.display();
    block2.display();
    block3.display();
    block4.display();
    block5.display();
    block6.display();
    block7.display();

//second layer
    block8.display();
    block9.display();
    block10.display();
    block11.display();
    block12.display();

//third layer
    block13.display();
    block14.display();
    block15.display();
    block16.display();

    launcher.display();

    polygon.display();  
}

function mouseDragged(){
    Matter.Body.setPosition(polygon.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    launcher.fly();
}

function keyPressed(){
    if(keyCode === 32){
        launcher.reset(polygon.body);
    }
}