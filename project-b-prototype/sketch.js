

// let x;
// let y;
// let R = 100;
// let vNumber = 200;
// let smoothness = 0.5;
// function setup() {
//   let cnv = createCanvas(400,400);
//   cnv.parent("canvasContainer");
// }

// function draw() {
//   background(14, 35, 83);
//   noStroke();
//   push();
//   translate(width / 2, height / 2);
//   rotate(sin(frameCount * 0.01));
//   beginShape();
//   for (let i = 0; i < TWO_PI; i += TWO_PI/vNumber) {
//     let offset = noise(
//       smoothness * sin(i),
//       smoothness * cos(i),
//       frameCount * 0.01
//     );
//     offset = map(offset, 0, 1, -R*0.2, R*0.2);
//     let radius = R + offset;
//     x = radius * cos(i);
//     y = radius * sin(i);
//     curveVertex(x, y);
//   }
//   endShape(CLOSE);
//   pop();
// }


let bubbles = [];
let rows = 5; // Number of rows
let cols = 5; // Number of columns

function setup() {
  let cnv = createCanvas(400, 400);
  cnv.parent("canvasContainer");

  let spacingX = width / (cols + 1);
  let spacingY = height / (rows + 1);

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      let x = spacingX * (j + 1);
      let y = spacingY * (i + 1);
      bubbles.push(new Bubble(x, y, min(spacingX, spacingY) * 0.4));
    }
  }
}

function draw() {
  background(14, 35, 83);
  for (let i = 0; i < bubbles.length; i++) {
    bubbles[i].update();
    bubbles[i].display();
  }
}

class Bubble {
  constructor(x, y, r) {
    this.x = x;
    this.y = y;
    this.r = r;
    this.smoothness = 0.1;
  }

  update() {
    this.x += random(-1, 1);
    this.y += random(-1, 1);
  }


  display() {
    noStroke();
    push();
    translate(this.x, this.y);
    rotate(sin(frameCount * 0.01));
    beginShape();
    for (let i = 0; i < TWO_PI; i += TWO_PI / 50) {
      let offset = noise(
        this.smoothness * sin(i),
        this.smoothness * cos(i),
        frameCount * 0.01
      );
      offset = map(offset, 0, 1, -this.r * 0.2, this.r * 0.2);
      let radius = this.r + offset;
      let x = radius * cos(i);
      let y = radius * sin(i);
      curveVertex(x, y);
    }
    endShape(CLOSE);
    pop();
  }
}


// let x;
// let h;
// let s = 200;
// let showCircle = true;
// function setup() {
//   let cnv = createCanvas(900, 700);
//   cnv.parent("canvasContainer");
//   colorMode(HSB);
//   h = random(255);
//   x = width/2;
// }

// function draw() {
//   background(0);
//   fill(h, 255, 255)
//   if(showCircle){
//     circle(x, height/2, s)
//   }else{
//     for(let i = 0;i < 3; i++){
//       rect(x-s/2, height/16*(i+1) + height/4*i, s, height/4)
//     }
//   }
 
//   x=frameCount*3%(width+400)-200;

// }

// function changeColor(){
//   h = random(255)
// }
// function changeSize(e){
//   s = map(e, 0, 100, 5, 395)
// }

// function changeShape(){
//   showCircle = !showCircle;
// }