let steam;

function setup() {
  createCanvas(400, 400);
  ellipseMode(RADIUS);
  steam = [];
}

function draw() {
  background(14,35,83);
  let s = new Steam();
  steam.push(s);
  for (i = 0; i < steam.length; i++) {
    steam[i].rise();
    steam[i].show();
    steam[i].shrink();

    if (steam[i].radius <= 0) {
      steam.splice(i, 1);
    }
  }
}

class Steam {
  constructor() {
    this.speed = random(3, 9);
    this.radius = random(width / 12, width / 8);
    this.x1 = random(0, width / 2.5);
    this.x2 = random(width / 1.5, width);
    this.x3 = random(width / 2.5, width / 1.5);
    this.y = height;
  }
  rise() {
    this.y -= this.speed;
  }
  show() {
    noStroke();
    fill(228, 238, 247, 40);
    ellipse(this.x1, this.y, this.radius);
    ellipse(this.x2, this.y, this.radius);
    ellipse(this.x3, this.y, width / 30);
  }
  shrink() {
    this.radius -= 0.8;
  }
}