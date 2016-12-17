var screenW = window.innerWidth;    // Screen Width
var screenH = window.innerHeight;   // Screen Height
var heart1,heart2,heart3;
var imgArr = [];
var hearts = [];

function preload() {
  heart1 = loadImage('images/heart.png');
  heart2 = loadImage('images/heartL.png');
  heart3 = loadImage('images/heartR.png');
  imgArr.push(heart1); imgArr.push(heart2); imgArr.push(heart3);
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
  var phrase = "I love you, Aaima.";
  text(phrase,screenW/2-textWidth(phrase)/2,(screenH/2));
  fill("black");
  textSize(12);
  var phrase = "Refresh to see the love again.";
  text(phrase,screenW/2-textWidth(phrase)/2,(screenH/2)+30);
}

function Heart(){
  this.img = imgArr[0];
  this.xPos = random(0,(screenW-30));
  this.yPos = random((screenH-200),screenH);
  this.noiseLocation = random(0,1000);
  this.offset = random(0.05,0.15);
  this.pull = random(5,10);
  
  this.display = function(){
    this.yPos -= this.pull;
    image(this.img, this.xPos, this.yPos);
  }
  
  this.move = function() {
    var xMovement = map( noise(this.noiseLocation), 0, 1, -1, 1 );
    this.xPos += xMovement;
    this.noiseLocation += 0.01;
  }
  
}



