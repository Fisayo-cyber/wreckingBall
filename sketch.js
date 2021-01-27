const Engine = Matter.Engine
const Bodies = Matter.Bodies
const Constraint = Matter.Constraint
const World = Matter.World

var ground
var engine, world
var bob, chain
var boxes = []
function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  Engine.run(engine)
  bob = new Bob(400, 400, 25)
  chain = new Chain(bob.body, {
    x: 400,
    y: 0
  })
  ground = new Ground(400, 800, 800, 20)

  //make many rows
  for(k = 770; k > 300; k= k - 40){
    //makes one row of blocks
    for (i = 500; i < 700; i = i + 60){
      boxes.push(new Block(i, k, 60, 40) )
    }
  }
}

function draw() {
  background(0);
  bob.display()
  chain.display()
  // boxes = [box1,box2,box3....]
  //boxes[0].display()
  //boxes[1].display()
  //boxes[2].display()
  for (i = 0; i < boxes.length; i++){
    boxes[i].display()
    
  }

  ground.display()
}

function mouseDragged() {
  Matter.Body.setPosition(bob.body, {
    x: mouseX,
    y: mouseY
  })
}
