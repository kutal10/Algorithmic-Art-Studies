const canvasheight = 800;
const canvaswidth = 800;

var linesPoints = [];
var oceanPoints = [];
var mountainPoints = [];

var oceanShading = [];

function setup() {
  createCanvas(canvaswidth, canvasheight);
  noLoop();
  colorMode(HSB);
}

function draw() {
  background(40, 0, 75);

  for (let i = 0; i < 200; i++) {
    lines(i * 4, 0.00005, 1.5);
  }
  for (let i = 0; i < 20; i++) {
    ocean();
  }
  mountain();
}

function lines(items, stroke, thick) {
  strokeWeight(random(0.002, stroke));
  noFill();
  beginShape();
  for (j = 0; j < 100; j++) {
    x = curveVertex(
      items + randomGaussian(-thick, thick),
      j + random(-50, 500)
    );
    linesPoints.push(x);
  }
  endShape();
}

function ocean() {
  noFill();
  upperlimit = 30;
  for (let x = 0; x < upperlimit; x++) {
    beginShape();
    for (let i = 0; i < 200; i++) {
      g = strokeWeight(0.0065 - x * 0.000075);
      z = curveVertex(
        random(-200, 1000),
        random(550, 550 + x * (400 / upperlimit))
      );
      oceanPoints.push(z);
      oceanShading.push(g);
    }
    endShape();
  }
}

function mountain() {
  translate(800, 552);
  rotate(3.14);
  noFill();
  var start = 4;
  var finish = 9;
  for (let i = 100; i > 0; i--) {
    stroke(300, 0, 0);
    strokeWeight(0.3 - i * 0.0025);
    beginShape();
    for (let x = 0; x < 800; x++) {
      var a = map(x, 0, width, start, finish);
      var scle = 7;
      var y = noise(a) * scle * i;
      curveVertex(x, y);
      r = vertex((random(x * 0.1, x * 1.1), random(y * 0.1, y * 1.1)));
      mountainPoints.push(r);
    }
    endShape();

    endShape();
    start -= 0.001;
    finish += 0.001;
  }
}

module.exports = { linesPoints, oceanPoints, mountainPoints, oceanShading };
