var canvasheight = 1000;
var canvaswidth = 1000;
let pts = [];

function setup() {
  createCanvas(canvaswidth, canvasheight);
  noLoop();
  blendMode(MULTIPLY);
  colorMode(HSB);
  background(40, 5, 95);
}

function draw() {
  terraingenerator(200, 0);
}

function terraingenerator(cl, rand) {
  noStroke();
  // shift for each layer
  var shift = 0;
  // layers downwards
  for (var y = 300; y <= 500; y += 1) {
    // peaks across
    for (var x = 100; x <= 500; x += 1) {
      var heighter = 240 * noise(x / 200, y / 200);
      heighter += 50 * noise(x / 30, y / 30);
      yshift = heighter - 200;

      colormapper = map(heighter, 0, 50, 0, 100);
      fill(cl, 30, colormapper);
      ellipse(x + shift * 2.5, y - yshift, 2);
    }
    shift += 0.8;
  }
}
