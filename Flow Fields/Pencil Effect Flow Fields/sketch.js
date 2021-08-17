let colors = [
  "#ffbe0b",
  "#fb5607",
  "#ff006e",
  "#8338ec",
  "#3a86ff",
  "#000000",
  "#ffffff",
];

function setup() {
  createCanvas(windowWidth, windowHeight);
  generate();
}

function draw() {}

function generate() {
  shuffle(colors, true);
  background("#b3afa1");
  stroke("#b3afa1");
  strokeWeight(0.01);
  colors.splice(0, 5);
  for (let i = 0; i < 4000; i++) {
    noiseCurve(random(-0.4, 1.1) * width, random(-0.4, 1.1) * height);
  }
}

function noiseCurve(x, y) {
  let c = int(random(400, 1500));
  let pos1 = [];
  let pos2 = [];
  let nr = random(100000);

  for (let i = 0; i < c; i++) {
    let scl = 0.0002;
    let ang = noise(x * scl, y * scl, (i + 10) * 0.00005) * 12;
    let at = atan2(y + sin(ang) - y, x + cos(ang) - x);
    let w = (noise(nr, x * 0.01, y * 0.1) - 0.8) * random(0.4, 3);

    pos1.push(
      createVector(x + w * cos(at + HALF_PI), y + w * sin(at + HALF_PI))
    );
    pos2.push(
      createVector(x + w * cos(at - HALF_PI), y + w * sin(at - HALF_PI))
    );

    x += cos(ang);
    y += sin(ang);
  }
  fill(random(colors));
  beginShape();
  for (let i = 0; i < pos1.length; i++) {
    let p = pos1[i];
    vertex(p.x, p.y);
  }

  for (let i = 0; i < pos2.length; i++) {
    let p = pos2[pos2.length - i - 1];
    vertex(p.x, p.y);
  }
  endShape();
}
