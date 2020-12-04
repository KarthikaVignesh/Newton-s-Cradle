const Engine = Matter.Engine
const World = Matter.World
const Bodies = Matter.Bodies
var myEngine,myWorld


function setup() {
  createCanvas(600,600);
  myEngine = Engine.create();
  myWorld = myEngine.world;
  roof = new Roof();
  bob1 = new Bob(220,300)
  bob2 = new Bob(260,300)
  bob3 = new Bob(300,300)
  bob4 = new Bob(340,300)
  bob5 = new Bob(380,300)
  rope1 = new Rope(bob1.body,roof.body,-80)
  rope2 = new Rope(bob2.body,roof.body,-40)
  rope3 = new Rope(bob3.body,roof.body,0)
  rope4 = new Rope(bob4.body,roof.body,40)
  rope5 = new Rope(bob5.body,roof.body,80)
  Engine.run(myEngine)
  
}

function draw() {
  background(0);  
  Engine.update(myEngine)
  roof.display();
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();

}
function keyPressed(){
  if(keyCode === UP_ARROW){
    Matter.Body.applyForce(bob1.body,bob1.body.position,{x:-55,y:-55})
  }
}
