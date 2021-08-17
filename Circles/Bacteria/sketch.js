var canvasheight = 1000;
var canvaswidth = 1000;
let pts = [];

function setup() {
  createCanvas(canvaswidth, canvasheight);
  noLoop();
  blendMode(MULTIPLY);
  colorMode(HSB);
}

function draw() {
  background(40, 5, 95);

  for (cr = 0; cr < 10; cr += 1) {
    let lowerb = map(cr, 0, 20, 70, 115);
    let upperb = map(cr, 0, 20, 115, 130);
    var level = random(lowerb, upperb);
    bubbles(level);
  }
  for (cr = 0; cr < 10; cr += 1) {
    let lowerb = map(cr, 0, 20, 70, 115);
    let upperb = map(cr, 0, 20, 115, 130);
    var level = random(lowerb, upperb);
    bubbles(level);
  }
}

function bubbles() {
  noStroke();
  for (count = 0; count < 1000; count += 1) {
    var x = random(0, canvaswidth);
    var y = random(0, canvasheight);
    cx = canvaswidth / 2;
    cy = canvasheight / 2;
    distance = dist(cx, cy, x, y);
    var decay = exp(-pow(distance / 150, 1));
    temp = decay;
    decay = decay * sin(distance / 10);

    var chaos = random(0.95 - distance / 3000, 1.05 + distance / 3000);
    for (i = 0; i < 5; i += 1) {
      circles(x * chaos, y * chaos, decay * 15);
    }
  }
}

function circles(xpos, ypos, dec) {
  noStroke();
  fill(random(170, 220), 34, random(90, 100), 255);
  circle(xpos * random(0.95, 1.05), ypos * random(0.95, 1.05), dec);
}
