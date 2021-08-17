var res = 10;
var count = 15000;

//items left
// -structuring a colour pattern
// -chaos transition (ADDED)

function setup() {
  createCanvas(1022, 1032);
  colorMode(HSB);
  background(45, 5, 95);
  blendMode(BLEND);
  noLoop();
}

function draw() {
  lines();
}

function getvalue(x, y) {
  return cos(x * 0.02) + sin(y * 0.001) * Math.PI;
}

function render(val, x, y) {
  push();
  translate(x, y);
  rotate((val * noise(val, x, y)) / 2);
  line(0, 0, 20, 0);
  pop();

  push();
  translate(x, y);
  rotate((val * noise(val, x, y)) / 2);
  line(0, 0, 35, 0);
  pop();
}

function lines() {
  for (var i = 0; i < count; i++) {
    //Math.random() is an approximately uniform distribution that returns a value between 0 and 1
    var x = Math.random() * width;
    var y = Math.random() * height;

    var value = getvalue(x, y);
    strokeWeight(random(0.005, 2));
    render(value, x, y);
  }
}
