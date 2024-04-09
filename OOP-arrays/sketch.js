// let cloud;
// let cloud1;
let cloud = [];
let rain = [];
// let n = 10;

function preload(){
  mySound = loadSound("assets/thunder.mp3")
}

function setup() {
  let canvas = createCanvas(800, 400);
  colorMode(HSB,100);
  canvas.parent("p5-canvas-container");
  background(220);
  // for (let i = 0; i < n; i++) {
  //   cloud[i] = new Cloud(0, random(height), random(50,100));
  // }

}

function draw() {
  background(220);
  for (let i = 0; i < rain.length; i++) {
    rain[i].show();
    rain[i].move();
  }

  for (let i = 0; i < cloud.length; i++) {
    cloud[i].show();
    cloud[i].move();
    cloud[i].checkBoundaries();
    //cloud[i].putBack();
    if(cloud[i].isGone){
      cloud.splice(i, 1);
    }
    for (let j = 0; j < cloud.length; j++) {
      if(i!=j){
        cloud[i].detectCollision(cloud[j]);
      }
    }
  }
}

function mousePressed(){
  cloud.push(new Cloud(mouseX, mouseY, random(50,100)));
  rain.push(new Rain(mouseX, mouseY, random(100)));
}

class Cloud {
  //constructor
  constructor(u, v, cs) {
    this.x = u;
    this.y = v;
    this.s = cs;
    this.speedX = random(0.5, 2);
    this.speedY = random(0.01, 0.005);
    this.h = random(100);
    this.sound = mySound;
    this.isGone = false;
  }
  //what the cloud will do
  // it will be displayed
  show() {
    push();
    translate(this.x, this.y);
    noStroke();
    fill(this.h, 20, 100);
    circle(0, 0, this.s);
    for (let a = 0; a < TWO_PI; a += PI / 6) {
      push();
      rotate(a);
      circle(this.s * 0.5, this.s * 0.3, this.s * 0.5);
      pop();
    }
    fill(0);
    circle(-this.s * 0.3, 0, this.s * 0.05);
    circle(this.s * 0.3, 0, this.s * 0.05);
    arc(0, 0, this.s * 0.3, this.s * 0.3, 0, PI);
    pop();
  }
  //it will move
  move() {
    this.y = height * noise(frameCount * this.speedY);
    this.x = this.x + this.speedX;
  }
  putBack() {
    if (this.x > width + this.s) {
      this.x = random(-2 * this.s, -10 * this.s);
    }
  }
  detectCollision(other){
    let d = (this.x, this.y, other.x, other.y);
    if( d < (this.s + other.s)*0.8){
      this.h = random(100);
        //  this.speedX = -this.speedX;
        //  other.speedX = -other.speedX;
      if(this.sound.isPlaying()== false){
        this.sound.play();
        }
    }
  }
  checkBoundaries(){
    if (this.x > width + this.s){
      this.isGone = true;
    }
  }
}

class Rain{
  constructor(x, y, h){
    this.x = random(x-20, x+20);
    this.y = y;
    this.h = h;
  }
  display(){
    strokeWeight(5);
    stroke(this.h, 20, 100);
    line(this.x, this.y, this.x, this.y+5);
  }
  move(){
    this.y = this.y + 10;
  }
}