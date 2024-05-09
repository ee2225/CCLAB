let img;
let crs;
let targetX = 0;
let targetY = 0;
let easing = 0.03;

let bears = [];
let score = 0; 

class Bear {
  constructor(x, y, size) {
    this.x = x;
    this.y = y;
    this.size = size;
    this.visible = true;
  }

  display() {
    if (this.visible) {
      push();
      translate(this.x, this.y);
      scale(this.size);
      
      // head.
      noStroke();
      fill("tan");
      ellipse(20, 20, 40);
      stroke("tan");
      strokeWeight(6);
      fill("beige");
      // left ear.
      ellipse(0, 0, 15);
      // right ear.
      ellipse(40, 0, 15);
      // left eye.
      fill("dimgray");
      noStroke();
      arc(12, 13, 8, 10, 135, 35);
      // right eye.
      arc(27, 13, 8, 10, 135, 35);
      // nose.
      fill("rosybrown");
      ellipse(20, 22, 12, 7);
      pop();
    }
  }

  checkCollision(x, y) {
    let d = dist(x, y, this.x, this.y);
    return d < 50; // Adjust the value as needed for the collision threshold
  }
}

function preload() {
  img = loadImage("ice-rink.png");
  crs = loadImage("gulgaa.png");
  soundFormats('mp3');
  point = loadSound('Point.mp3');
  point.setVolume(0.01);
}

function setup() {
    let cnv = createCanvas(626, 417);
    cnv.parent("canvasContainer");
    angleMode(DEGREES);

  for (let i = 0; i < 5; i++) {
    let x = random(width); // Random x position
    let y = random(200, 400); 
    let size = random(0.5, 2); // Random size
    bears.push(new Bear(x, y, size));
  }
}

function draw() {
  background(0);
  image(img, 0, 0, width, height);

  let dx = targetX - mouseX;
  targetX -= dx * easing;

  let dy = targetY - mouseY;
  targetY -= dy * easing;

  // Check collision with bears
  for (let bear of bears) {
    if (bear.checkCollision(targetX, targetY)) {
      bear.visible = false; // Set bear to invisible if collision detected
      // Generate new bear
      let x = random(width);
      let y = random(200, 400);
      let size = random(0.5, 0.8);
      point.play();

      bear.x = x;
      bear.y = y;
      bear.size = size;
      bear.visible = true; // Set new bear to visible
      score++; // Increment score when a bear is touched
    }
    bear.display();
  }

  // Display cursor image
  image(crs, targetX - 50, targetY - 50, 100, 100);

  // Display scoreboard
  textSize(20);
  fill(255);
  text("score: " + score, 20, 30);
  text("press 'R' or 'r' to reset", 20, 50)
}

function mousePressed() {
  targetX = mouseX;
  targetY = mouseY;
}

function keyPressed() {
  if (key === 'r' || key === 'R') {
    resetGame();
  }
}

function resetGame() {
  score = 0; 
  // Reset bear positions
  for (let bear of bears) {
    bear.x = random(width);
    bear.y = random(200, 400);
    bear.visible = true;
  }
}
