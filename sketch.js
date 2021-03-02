var canvas;
var music;
var ball;
var surf1;
var surf2;
var surf3;
var surf4;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);
    ball = createSprite(random(20,270),100,50,50)
    ball.velocityX=5
    ball.velocityY=5
    ball.shapeColor="white"
    surf1 = createSprite(0,580,360,30)
    surf2 = createSprite(295,580,200,30)
    surf3 = createSprite(515,580,200,30)
    surf4 = createSprite(740,580,220,30)
    surf1.shapeColor="red"
    surf2.shapeColor="yellow"
    surf3.shapeColor="cyan"
    surf4.shapeColor="green"
    
    
    //create 4 different surfaces



    //create box sprite and give velocity

}

function draw() {
    background(rgb(169,169,169));
    edges = createEdgeSprites()
    ball.bounceOff(edges)
    /*surf4.bounceOff(edges)
    surf3.bounceOff(edges)
    surf2.bounceOff(edges)
    surf1.bounceOff(edges)*/
    if (surf1.isTouching(ball)&&ball.bounceOff(surf1)){
        ball.shapeColor="red"
        music.play()
    }
    if (surf2.isTouching(ball)){
        ball.shapeColor="yellow"
        music.stop()
        ball.velocityX=0
        ball.velocityY=0
    }
    if (surf3.isTouching(ball)&&ball.bounceOff(surf3)){
        ball.shapeColor="cyan"
        
    }
    if (surf4.isTouching(ball)&&ball.bounceOff(surf4)){
        ball.shapeColor="green"
        
    }
    drawSprites();
    //create edgeSprite



    //add condition to check if box touching surface and make it box
}
