let m = 60;
let n1, n2, l1, l2, s, k, b, op, y;
let ew = [];
let eh = [];
let number = [];
let yPos = 0;
let xPos = 0;
let acc = 0.01;
let bgColor = "skyblue";

function setup() {
  createCanvas(800, 500);
  let canvas =   createCanvas(800, 500);
  canvas.parent("p5-canvas-container")
  x = width / 2;
  y = height / 2;
  r = 255;
  g = 0;
}

function draw() {
  background(bgColor);
  fill(255);
  noStroke();
  wb();
  back();
  stem();
  oceanbed();
  plastic();
  crystal1(width / 2, 350);
  crystal2(width / 2, 350);
  
   textAlign(LEFT, TOP); 
fill('purple');
textSize(20);
text("1. Press 'n' for nighttime\n2. Press 'd' for daytime", 20, 10);


}

function keyPressed() {
  if (key === "d" || key === "D") {
    bgColor = "skyblue";
  }
  if (key === "n" || key === "N") {
    bgColor = "blue";
  }
}

function plastic() {
  fill(240, 128, 128);
  beginShape();
  vertex(350 + xPos, 100 + yPos);
  vertex(410 + xPos, 100 + yPos);
  vertex(430 + xPos, 150 + yPos);
  vertex(380 + xPos, 160 + yPos);
  vertex(350 + xPos, 100 + yPos);
  endShape();
}

function wb() {
  for (var x = 0; x <= width; x += 10) {
    //plastic dissapear
    if (yPos > 190) {
      yPos = yPos * -1;
    }
    yPos += 0.01;
  }
  xPos = map(sin(frameCount * 0.05), -1, 1, -50, 50);
}

function stem() {
  fill(172, 240, 170);
  noStroke();
  rectMode(CENTER);
  rect(400, 400, 20, 100);
}

function oceanbed() {
  noStroke();
  fill(254, 200, 154);
  for (let x = 0; x <= width; x += 20) {
    let b = 450 + 100 * noise(x);
    ellipse(x, b, 100, 100);
  }
}

function crystal1(x, y) {
  for (let i = 0; i < 6; i++) {
    if (frameCount < 2) {
      pickRandom();
    }
    push();
    translate(x, y);
    let angle = map(sin(frameCount * acc), -1, 1, 0, PI / 10);
    rotate(angle * i);
    noStroke();
    fill(i * 40, 0, i * 80);
    triangle(0, 0, -n1, l1, -n2, -l2);

    if (key === "d" || key === "D") {
      acc = 0.01;
    }
    if (key === "n" || key === "N") {
      acc = 0.1;
    }
    pop();
  }
}

function crystal2(x, y) {
  for (let i = 0; i <= 6; i++) {
    if (frameCount < 2) {
      pickRandom();
    }
    push();
    translate(x, y);
    let angle = -map(sin(frameCount * acc), -1, 1, 0, PI / 10);
    rotate(angle * i);
    noStroke();
    fill(i * 30, 0, i * 40);
    triangle(0, 0, w1, -l1, w2, l2);

    if (key === "d" || key === "D") {
      acc = 0.01;
    }
    if (key === "n" || key === "N") {
      acc = 0.1;
    }
    pop();
  }
}

function pickRandom() {
  n1 = random(100, 200);
  n2 = random(100, 200);
  w1 = random(100, 200);
  w2 = random(100, 200);
  l1 = random(100);
  l2 = random(100);
  s = random(10, 50);
  k = random(100);
  b = random(150, 255);
  op = random(50, 90);
  for (let i = 0; i <= int(width / m); i++) {
    ew[i] = random(s);
    eh[i] = random(k);
  }
}

function back() {
  for (let i = 0; i < width; i += m) {
    for (let j = 0; j < height * 3; j += s) {
      noStroke();
      fill(255, 255, b, op);
      ellipse(i, j, ew[i / m], eh[i / m]);
    }
  }
}
