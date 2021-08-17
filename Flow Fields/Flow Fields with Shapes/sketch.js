//let pallete = ["#E76F51", "#F4A261", "#E9C46A", "#2A9D8F", "#264653"];
let pallete = ["#a9edff", "#235789", "#00bd9d", "#ffa400", "#00a6a6"];
let ns = 0.004;
let seed = 0;
let quads = [];

function setup() {
  seed = int(random(100));

  createCanvas(1280, 800);
  background(255);

  graphics = createGraphics(width, height);
  graphics.colorMode(HSB, 360, 100, 100, 100);
  drawNoiseBackground(100000, graphics);

  N = 3000;
  for (let i = 0; i < N; i++) {
    let x = random(0, width);
    let y = random(0, height);
    let dx = random(0, 0.06 * width);
    let dy = random(0, 0.025 * height);

    quads.push([createVector(x, y), createVector(dx, dy)]);
  }

  noLoop();
}

function draw() {
  randomSeed(seed);

  background("#E76F51");

  t = 0.0001 * millis();

  for (let x = 0; x < width; x += width / 40) {
    for (let y = 0; y < height; y += height / 40) {
      let L = random(10, 30);
      let a = PI * noise(ns * x, ns * y, 0);

      //line(x, y, x + L * cos(a), y + L * sin(a));
    }
  }

  for (var i = 0; i < N; i++) {
    let x = quads[i][0].x;
    let y = quads[i][0].y;
    let dx = quads[i][1].x;
    let dy = quads[i][1].y;

    let a = PI * noise(ns * (x + 0.5 * dx), ns * (y + 0.5 * dy), 0);

    fill(random(pallete));

    push();
    translate(x + 0.5 * dx, y + 0.5 * dy);
    rotate(a);
    rect(0, 0, dx, dy);
    pop();
  }

  image(graphics, 0, 0);
}

function drawNoiseBackground(_n, _graphics) {
  let c = color(0, 0, 100, 5);
  for (let i = 0; i < _n; i++) {
    let x = random(1) * width;
    let y = random(1) * height;
    let w = random(1, 4);
    let h = random(1, 4);
    _graphics.noStroke();
    _graphics.fill(c);
    _graphics.ellipse(x, y, w, h);
  }
}
