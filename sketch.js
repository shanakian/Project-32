const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var block1, block2, block3, block4, block5, block6, block7, block8,  block9, block10, block11, block12, block13, block14, block15, block16;
var polygon;
var ground;
var sling;

function setup(){

    createCanvas(600,600);
    engine = Engine.create();
    world = Engine.world;

    ground = new Ground();

    polygon = new Polygon();

    //level one
    block1 = new Block(300, 275);
    block2 = new Block(330, 275);
    block3 = new Block(360, 275);
    block4 = new Block(390, 275);
    block5 = new Block(420, 275);
    block6 = new Block(450, 275);
    block7 = new Block(480, 275);
    block8 = new Block(510, 275);
    //level two
    block9 = new Block(330, 235);
    block10 = new Block(360, 235);
    block11 = new Block(390, 235);
    block12 = new Block(420, 235);
    //level three
    block13 = new Block(360, 195);
    block14 = new Block(390, 195);
    block15 = new Block(420, 195);
    //top
    block16 = new Block(390, 195);

}
function draw(){

    polygon.display();

    block1.display();
    block2.display();
    block3.display();
    block4.display();
    block5.display();
    block6.display();
    block7.display();
    block8.display();
    block9.display();
    block10.display();
    block11.display();
    block12.display();
    block13.display();
    block14.display();
    block15.display();
    block16.display();

    ground.display();

}