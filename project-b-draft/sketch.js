
let yoff = 0.0;

function setup() {
  let cnv = createCanvas(400, 400);
  cnv.parent("canvasContainer");
}

function draw() {
  background(0);

  translate(width / 2, height / 2);

  var radius = 150;

  beginShape();
  let xoff = 0;
  for (var a = 0; a < TWO_PI; a += 0.1) {
    let offset = map(noise(xoff, yoff), 0, 1, -25, 25);
    let r = radius + offset;
    let x = r * cos(a);
    let y = r * sin(a);
    vertex(x, y);
    xoff += 0.1;
  }
  endShape();

  yoff += 0.01;
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