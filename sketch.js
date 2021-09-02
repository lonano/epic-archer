const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var canvas;
var player,playerBase,playerArcher,arrow;
var computer,computerBase,computerArcher,computerArrow;

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  
   //Initialising Engine
  engine = Engine.create();
  world = engine.world;
	
   //Create Player Base and Computer Base Object
playerBase = new PlayerBase(300,random(450,height - 300),180,150);
player = new Player(285,playerBase.body.position.y - 153,50,180);
playerArcher = new PlayerArcher(340,playerBase.body.position.y - 180,120,120);
arrow =  new Arrow(340,playerBase.body.position.y - 180,50,50)

computerBase = new ComputerBase(width - 300,random(450,height - 300),180,150);
computer = new Computer(width - 285,computerBase.body.position.y - 153,50,180);
computerArcher = new ComputerArcher(width-340,computerBase.body.position.y - 180,120,120);
computerArrow =  new ComputerArrow(width-340,computerBase.body.position.y - 180,50,50);
 }

function draw() {

  background(180);

  Engine.update(engine);

  if(keyCode === 32){
   arrow.shoot(playerArcher.body.angle);
 }

  // Title
  fill("#FFFF");
  textAlign("center");
  textSize(40);
  text("EPIC ARCHERY", width / 2, 100);

   //Display Playerbase and computer base 
player.display();
playerBase.display();
playerArcher.display();
arrow.display();
   //display Player and computerplayer
computer.display();
computerBase.display();
computerArcher.display();
computerArrow.display();

}
