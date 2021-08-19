var canvasheight = 800;
var canvaswidth = 800;

//circle resolution
circ = 1000;
var bness = 200;
var thickness = 0.015;
//loop res
const loops = 60;

//circle items
const radii = 10;
function setup() {
  createCanvas(canvaswidth, canvasheight);
  noLoop();
  colorMode(HSB);
}

function draw() {
  background(34, 0, 80);
  for (let i = 0; i < loops; i++) {
    bness2 = bness / (i * 1.01);
    deformedcircle(i * radii, bness2, thickness * i);
  }
}

function deformedcircle(red, bness, thick) {
  const c = 360;
  var increments = c / circ;
  strokeWeight(thick);
  stroke(23, 0, bness);
  noFill();
  beginShape();
  //circle construction
  for (i = 0; i < circ; i++) {
    x = canvaswidth / 2 + red * sin(increments * i);
    y = canvasheight / 2 + red * cos(increments * i);
    curveVertex(x * random(0.96, 1.04), y * random(0.96, 1.04));
    curveVertex(x / random(0.96, 1.04), y / random(0.96, 1.04));
  }
  endShape();
}
