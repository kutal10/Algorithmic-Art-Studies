let palette = [
  "#0D3B66",
  "#F4D35E",
  "#F95738",
  //'#090302'
];

let ns = 0.4;

function setup() {
  createCanvas(windowWidth, windowHeight);
  noLoop();

  colorMode(HSB, 360, 100, 100, 100);
}

function draw() {
  background(205);

  var X = [];
  var Y = [];
  var R = [];

  for (let i = 0; i < windowHeight / 2; i++) {
    var x = random(windowWidth);
    var y = random(windowHeight);

    while (true) {
      var inside = false;
      for (let j = 0; j < i; j++) {
        var D = sqrt((X[j] - x) ** 2 + (Y[j] - y) ** 2);
        if (D < R[j]) {
          inside = true;
          break;
        }
      }

      if (inside) {
        x = random(width);
        y = random(height);
      } else {
        break;
      }
    }

    var r = windowHeight * random(0.3, 0.6);

    for (let j = 0; j < i; j++) {
      let D = sqrt((X[j] - x) ** 2 + (Y[j] - y) ** 2);
      r = min(r, D - R[j]);
    }

    X.push(x);
    Y.push(y);
    R.push(r);

    noFill();
    pencil_circle(X[i], Y[i], R[i], palette[int(random(palette.length))]);
  }
}

function pencil_circle(x, y, r, c) {
  push();
  translate(x, y);
  rotate(random(PI));

  stroke(0);
  noFill();

  var x = r * cos(-PI / 2 - PI / 4);
  var y = r * sin(-PI / 2 - PI / 4);
  var t = -PI / 8;

  //var finalradii =

  for (let i = 0; i < r * 20; i++) {
    stroke(c);

    var a = tan(t);
    if (i % 2 == 0) t += random(0.97, 1.0) * PI;
    else t -= random(0.97, 1.0) * PI;

    let A = 1 + a ** 2;
    let B = 2 * x + 2 * y * a;
    let C = x ** 2 + y ** 2 - r ** 2;

    let dx0 = (-B - sqrt(B ** 2 - 4 * A * C)) / (2 * A);
    let dx1 = (-B + sqrt(B ** 2 - 4 * A * C)) / (2 * A);

    if (abs(dx0) > abs(dx1)) var dx = dx0;
    else var dx = dx1;

    let ddx = 0.001 * dx * random(-0.1, 0.1);

    let x1 = x + (dx + ddx);
    let y1 = y + a * (dx + ddx);

    strokeWeight(random(0.1, 0.4));
    line(x, y, x1, y1);

    x = x1;
    y = y1;
  }

  pop();
}
