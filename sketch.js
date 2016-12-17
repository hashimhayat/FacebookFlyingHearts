/*By Hashim Hayat*/

var screenW = window.innerWidth;    // Screen Width
var screenH = window.innerHeight;   // Screen Height
var heart, buttonPressed = true;
var hearts = [];

function preload() {
  heart = loadImage('heart.png');
}

function setup() {
  
  var theCanvas = createCanvas(screenW,screenH);
  
  for (var h = 0; h < 30; h++){
   hearts.push(new Heart());
  }
  
}

function draw() {
  background(255);
  
  displayText();
  
  for (var h = 0; h < hearts.length; h++){
    hearts[h].display();
    hearts[h].move();
  }
  
}

function displayText(){
  
  fill("#FFCE00");
  fill("red");
  textSize(50);
  textFont("Helvetica");
  var phrase = "Flying Hearts using Perlin Noise";
  text(phrase,screenW/2-textWidth(phrase)/2,(screenH/2));
  fill("black");
  textSize(12);
  var phrase = "Refresh to see the love again.";
  text(phrase,screenW/2-textWidth(phrase)/2,(screenH/2)+30);
}

function Heart(){
  this.img = heart;
  this.xPos = random(0,(screenW-30));
  this.yPos = random((screenH-200),screenH);
  this.noiseLocation = random(0,1000);
  this.offset = random(0.05,0.15);
  
  
  this.display = function(){
    this.yPos -= 7;
    image(this.img, this.xPos, this.yPos);
  }
  
  this.move = function() {
    // compute how much we should move
    var xMovement = map( noise(this.noiseLocation), 0, 1, -1, 1 );
    
    // update our position
    this.xPos += xMovement;
    
    // update our noise offset values
    this.noiseLocation += 0.01;
  }
}



