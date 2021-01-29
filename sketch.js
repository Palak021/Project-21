var canvas;
var music;
var surface1,surface2,surface3,surface4;
var box;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,500);

    //create 4 different surfaces
     var surface1=createSprite(700,100,150,100);
     surface1.shapeColor="blue";

    var surface2=createSprite(700,200,150,100);
    surface2.shapeColor="pink";

    var surface3=createSprite(700,300,150,100);
    surface3.shapeColor="yellow";

    var surface4=createSprite(700,400,150,100);
    surface4.shapeColor="red";

    var box=createSprite(random(20,750));
    box.shapeColor="white";
    box.velocityY=2;
    //create box sprite and give velocity

}

function draw() {
    background(rgb(169,169,169));
     
    createEdgeSprites();

   if(surface1.isTouching(box) && box.bounceOff(surface1)){
       surface1.changeColor(blue);
   }

   if(surface2.isTouching(box) && box.bounceOff(surface2)){
       surface2.changeColor(pink);
   }

   if(surface3.isTouching(box) && box.bounceOff(surface3)){
       surface3.changeColor(yellow);
   }

   if(surface4.isTouching(box) && box.bounceOfff(surface4)){
       surface4.changeColor(red);
   }
    //add condition to check if box touching surface and make it box
    drawSprites();
}
