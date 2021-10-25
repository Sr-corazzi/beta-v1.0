var michaelJackson, rua, chimaelMackson, ura, obstaculos, osisbaculos,gObstaculos,msg, tank,kant,gTank;
var JOGAR=1;
var PERDEU=0;
var estado=JOGAR;

function preload(){
    chimaelMackson = loadAnimation( "Jake1.png","Jake2.png","jake4.PNG");

  ura = loadImage("grama.jpg");
  kant=loadImage("tank.jpg");
  osisbaculos = loadImage("bomb.png");
}

function setup(){
  createCanvas(windowWidth,windowHeight);
  
  rua = createSprite(width/2, height/2, width,height);
  rua.addImage(ura)
  rua.scale = height/250;
  rua.velocityY=height/250;
  
  michaelJackson = createSprite(200,height-100,34,43);
  michaelJackson.addAnimation("hrtsfg", chimaelMackson);
  michaelJackson.scale=width/1600; 
  
  michaelJackson.depth=rua.depth;
  michaelJackson.depht++;
  
 //michaelJackson.debug=true;
 michaelJackson.setCollider("rectangle",0,0,70,160);
  
  
  
  gTank=new Group();
  gObstaculos=new Group();
}

function draw() {
  console.time();
  background("black");
 drawSprites();
  if(estado==JOGAR){
 
     
if(frameCount%350==0||frameCount%360==0||frameCount%370==0||frameCount%390==0){
  tanques();
}
    
    if(keyDown("a")){
    michaelJackson.x=michaelJackson.x-width/170;
  }
   if(keyDown("d")){
    michaelJackson.x=michaelJackson.x+width/170;
  }
  if(rua.y>height-250){
    rua.y=rua.y-height/2.3;
  }
  if(frameCount%60==0){
    obsitaculos();  
  }
if(michaelJackson.isTouching(gObstaculos)||michaelJackson.isTouching(gTank)){
estado=PERDEU;
 gObstaculos.destroyEach();
 
  

}
}
if(estado==PERDEU){
rua.velocityY=0;
 gObstaculos.destroyEach();
  michaelJackson.x=width*5
textSize(width/20); fill("red"); text("perdeu, aperte enter para recomeçar ",width/8,height/2);
 if(keyDown("enter")){
   reset();
 }
  
  
 }
  console.timeEnd();
 
}
  function obsitaculos(){
    obstaculos=createSprite(width/2,0);
    obstaculos.addImage(osisbaculos);
    obstaculos.velocityY=height/100;
    obstaculos.scale = width/5000
    obstaculos.x=Math.round(random(0,width));
    obstaculos.lifetime=500;
    obstaculos.setCollider("circle",0,0,obstaculos.width-250);
    //obstaculos.debug=true;
    gObstaculos.add(obstaculos);
  }
  
function tanques(){
  tank=createSprite(width/2,0);
  tank.addImage(kant);
  tank.velocityY=height/80;
  tank.x=Math.round(random(0,width));
  tank.lifetime=height/95;
  tank.scale=width/2300;
  gTank.add(tank);
  gTank.depth=rua.depth
  gTank.depth++;
  
  
}

function reset(){
  estado=JOGAR;
  rua.velocityY=height/250;
  michaelJackson.x=width/2;
}
  









