
let NUM_OF_BALLOONS = 15; //the initial number of particles
let balloons = [];
let cloudx = 100;
let cloudy = 100;

function setup() {
  let canvas = createCanvas(800, 600);
  canvas.parent("p5-canvas-container");

  for (let i = 0; i < NUM_OF_BALLOONS; i++) {
    balloons[i] = new Balloon(random(width), random(height));
  }
}

function draw() {
  background(132, 165, 157);
  cloud();
  for (let i = 0; i < balloons.length; i++) {
    let b = balloons[i];
    b.update();
    b.display();
    b.putBack();
  }
}

class Balloon {
  constructor(startX, startY) {
    this.x = startX - 200;
    this.y = startY;
    this.speed = random(5, 20);
    this.vertX1 = 0;
    this.vertX2 = 0;
    this.speedY = map(this.speed, 5, 50, 5, 0.1);
    this.color = color(random(200, 255), random(150, 255), random(150, 255), random(200, 255));
  }

  update() {
    this.y = this.y - this.speedY;
    this.x = this.x + this.speedY / 2;
    this.vertX1 = random(240, 260);
    this.vertX2 = random(140, 160);

  }

  display() {
    push();
    translate(this.x, this.y);
    stroke(255, 20);
    strokeWeight(10)
    fill(this.color);
    beginShape();
    vertex(200, 200);
    bezierVertex(this.vertX1, 150, 280, 220, 200, 270);
    endShape();
    beginShape();
    vertex(200, 200);
    bezierVertex(this.vertX2, 150, 120, 220, 200, 270);
    endShape();

    //string
    noFill();
    stroke(255, 100);
    strokeWeight(1);
    beginShape();
    curveVertex(200, 500);
    curveVertex(180, 470);
    curveVertex(220, 370);
    curveVertex(200, 270);
    curveVertex(200, 170);
    endShape();
    pop();
  }

  putBack() {
    if (this.y < -450) {
      this.y = 600;
    }
    if (this.x > 850) {
      this.x = -250;
    }
  }
}

function cloud() {
  fill(250);
  noStroke();
  cloudx = cloudx + 2;
  ellipse(cloudx, cloudy, 100, 50);
  ellipse(cloudx + 10, cloudy + 10, 140, 50);
  ellipse(cloudx - 20, cloudy + 10, 140, 50);

  ellipse(cloudx + 100, cloudy + 20, 100, 50);
  ellipse(cloudx + 110, cloudy + 30, 140, 50);
  ellipse(cloudx + 80, cloudy + 30, 140, 50);

  ellipse(cloudx + 500, cloudy, 100, 50);
  ellipse(cloudx + 510, cloudy + 10, 140, 50);
  ellipse(cloudx + 480, cloudy + 10, 140, 50);

  if (cloudx > 880) {
    cloudx = -500;
  }
}