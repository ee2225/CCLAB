let dancer;

function setup() {
  let canvas = createCanvas(windowWidth, windowHeight);
  canvas.parent("p5-canvas-container");
  dancer = new angryBird(width / 2, height / 2);
}

function draw() {
  background(0);
  drawFloor(); // for reference only

  dancer.update();
  dancer.display();
}

class angryBird {
  constructor(startX, startY) {
    this.x = startX;
    this.y = startY;
    this.eyeX = 0;
    this.browY = 0;
    this.beakY = 0;
  }

  update() {
    this.x += 1.5*sin(frameCount / 6);
    this.y += 3 * cos(frameCount * 0.04);
    this.eyeX += cos(frameCount * 0.15);
    this.browY += -cos(frameCount * 0.2);
    this.beakY += sin(frameCount * 0.3);
  }

  display() {
    push();
    translate(this.x, this.y);
    // ⬇️ draw your dancer from here ⬇️

    //tails
    fill("darkred");
    stroke(0);
    strokeWeight(1);
    push();
    rotate(sin(frameCount * 0.1) * 0.2);
    beginShape();
    vertex(-93, 5);
    vertex(-50, 10);
    vertex(-50, 15);
    vertex(-95, 20);
    vertex(-93, 5);
    endShape();

    beginShape();
    vertex(-78, -19);
    vertex(-50, 10);
    vertex(-50, 10);
    vertex(-85, -5);
    vertex(-78, -20);
    endShape();

    beginShape();
    vertex(-85, 30);
    vertex(-50, 15);
    vertex(-50, 20);
    vertex(-80, 40);
    endShape();
    pop();

    //hair
    fill("red");
    strokeWeight(4);
    push();
    translate(30, -20);
    rotate(-sin(1.5));
    ellipse(0, -65, 20, 50);
    ellipse(15, -65, 20, 50);
    pop();

    //body
    push();
    circle(10, 15, 150);

    //eyes
    fill(255);
    strokeWeight(3);
    circle(52, 15, 31);
    circle(22, 15, 33);
    fill(0);
    circle(50 + this.eyeX, 15, 9);
    circle(27 + this.eyeX, 15, 10);

    //eyebrows
    beginShape();
    vertex(0, -15 + this.browY);
    vertex(40, 0);
    vertex(40, 10);
    vertex(2, 0 + this.browY);
    vertex(0, -15 + this.browY);
    endShape();

    beginShape();
    vertex(40, 0);
    vertex(80, -15 + this.browY);
    vertex(82, 0 + this.browY);
    vertex(40, 10);
    vertex(40, 0);
    endShape();

    //belly
    fill(221, 184, 146);
    noStroke();
    ellipse(10, 65, 95, 45);

    //beak
    strokeWeight(3);
    stroke(0);
    fill(255, 195, 0);
    triangle(39, 20, 70, 47 - this.beakY, 19, 45);
    triangle(19, 45, 38, 65, 63, 46 + this.beakY);

    // ⬆️ draw your dancer above ⬆️
   
    //this.drawReferenceShapes()
    pop();
  }
  // drawReferenceShapes() {
  //   noFill();
  //   stroke(255, 0, 0);
  //   line(-5, 0, 5, 0);
  //   line(0, -5, 0, 5);
  //   stroke(255);
  //   rect(-100, -100, 200, 200);
  //   fill(255);
  //   stroke(0);
  // }
}