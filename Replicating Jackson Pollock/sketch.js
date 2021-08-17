let colors;

function setup() {
  createCanvas(windowWidth, windowHeight);

  colors = [
    "#32312E",
    "#C7AE82",
    "#F5F2E3",
    "#795330",
    "#4D4940",
    "#E2DDCB",
    "#A37D52",
    "#B9371A",
    "#77A8B5",
    "#3D5A8C",
    "#0D0806",
    "#DFB23D",
    "#512E14",
    "#EDD99F",
    "#231C14",
  ];
  let nColors = floor(random(6, 7));
  for (let i = 0; i < colors.length - nColors; i++) {
    colors.splice(random(colors.length), 1);
  }
  background(random(["#F5F2E3", "#E2DDCB", "#EDD99F", "#C7AE82"]));
  noLoop();
  blendMode(HARD_LIGHT);
}

function draw() {
  for (var j = 0; j < 1000; j++) {
    push();
    drawLine();
    pop();
  }

  for (var j = 0; j < 500; j++) {
    push();
    splatter(random(0, windowWidth), random(0, windowHeight));
    splatter2(random(0, windowWidth), random(0, windowHeight));
    splatter2(random(0, windowWidth), random(0, windowHeight));
    pop();
  }
  for (var j = 0; j < 100; j++) {
    push();
    drawLine();
    pop();
  }
  /* splatter2(windowWidth / 2, windowHeight / 2);
  splatter(windowWidth / 2, windowHeight / 2); */
}

function drawLine() {
  stroke(random(colors));
  noFill();
  let n = random(5, 10);
  let points = [];

  //w and h to leave edges slightly more blank
  let w = random(width / 4, (3 * width) / 4);
  let h = random(height / 4, (3 * height) / 4);

  //starting positions
  let x0 = random(-width / 6, width - w + width / 6);
  let y0 = random(-height / 6, height - h + height / 6);

  //spreads lines accross canvas
  translate(x0 + w / random(1, 5), y0 + h / random(1, 5));

  for (let i = 0; i < n; i++) {
    points.push(createVector(random(-w / 2, w / 2), random(-h / 2, h / 2)));
  }

  for (let i = 0; i < n; i++) {
    strokeWeight(randomGaussian(0.08, 0.3));
    beginShape();
    for (let p of points) {
      let nzx = noise(p.x, p.y, frameCount + i / 20);
      let nzy = noise(p.x, p.y, frameCount + i / 20 + 1);
      curveVertex(
        p.x + (nzx - 1 / 2) * random(1, 50),
        p.y + (nzy - 1 / 2) * random(1, 50)
      );
    }
    endShape();
  }
  //splatter(x0, y0);
  //splatter2(x0, y0);
}

function splatter(bx, by) {
  let c = color(random(colors));
  bx += random(-15, 15);
  by += random(-15, 15);
  for (let i = 0; i < 150; i++) {
    let x = bx + i * (0.5 - noise(random(1, 10) + i));
    let y = by + i * (0.5 - noise(random(1, 10) + 2 * i));
    let s = random(20, 300) / dist(bx, by, x, y);
    if (s > 20) s = 1;
    let a = 100 + s * random(2, 15);
    noStroke();
    c.setAlpha(a);
    fill(c);
    ellipse(x, y, s / random(0.7, 10));
  }
}

function splatter2(bx, by) {
  let c = color(random(colors));
  bx += random(-15, 15);
  by += random(-15, 15);
  for (let i = 0; i < 350; i++) {
    let x = bx + i * (0.5 - noise(random(1, 10) + i));
    let y = by + i * (0.5 - noise(random(1, 10) + 2 * i));
    let s = random(20, 500) / dist(bx, by, x, y);
    if (s > 20) s = 1;
    let a = 200 + s * random(2, 25);
    noStroke();
    c.setAlpha(a);
    fill(c);
    ellipse(x, y, s / random(3, 6));
  }
}
