// noprotect

//let palette = [["#FFBA08", "#FFF275"], ["#3F88C5", "#0A369D"], ["#D60B26"]];
/* let palette = [
  [color(117, 71, 54), color(133, 89, 33)],
  [color(168, 96, 91), color(313, 88, 84)],
  [color(335, 89, 18)],
]; */
let swarms = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  strokeCap(SQUARE);
  //colorMode(RGB, 255, 255, 255, 100);
  colorMode(HSB);
  background(255);

  let diskSampling = new PoissonDiskSampling({
    shape: [width * 2, height * 1.2],
    minDistance: 15,
    maxDistance: 50,
    tries: 1.4,
  });
  let samplings = diskSampling.fill();

  let flowfields = [
    new FlowField(),
    new FlowField(),
    new FlowField(),
    new FlowField(),
    new FlowField(),
  ];
  for (let sampling of samplings) {
    let colorFactor = floor(random(2.5));
    strokeWeight(random(0.2, 1));
    let vec = createVector(sampling[0] - width * 1, sampling[1] - height * 0.1);
    swarms.push(new Swarm(vec.x, vec.y, flowfields[colorFactor]));
  }
  swarms = shuffle(swarms);
}

function draw() {
  for (let i = 0; i < 50; i++) {
    swarms[i].show();
  }
}

function shiftColor(col, range, alf) {
  let shiftRange = range;
  let shiftedRed = constrain(
    red(col) + shiftRange[0] + (shiftRange[1] - shiftRange[0]) * random(),
    0,
    255
  );
  let shiftedGreen = constrain(
    green(col) + shiftRange[0] + (shiftRange[1] - shiftRange[0]) * random(),
    0,
    255
  );
  let shiftedBlue = constrain(
    blue(col) + shiftRange[0] + (shiftRange[1] - shiftRange[0]) * random(),
    0,
    255
  );
  return color(shiftedRed, shiftedGreen, shiftedBlue, alf);
}

class Swarm {
  constructor(x, y, flowfield) {
    let palette = [
      [color(206, 40, 54), color(201, 33, 77)],
      [color(212, 96, 91), color(206, 77, 74)],
      [color(180, 30, 60)],
    ];
    let colorFactor = floor(random(2.5));
    this.center = createVector(x, y);
    this.groupRad = random(10, 17.5);
    this.flowfield = flowfield;
    this.density = 0.4;
    this.color = random(palette[colorFactor]);
    this.particles = [];
    this.prepare();
  }

  prepare() {
    let numParticles = sq(this.groupRad) * PI * this.density;
    for (let i = 0; i < numParticles; i++) {
      let distCenter = this.groupRad * sqrt(random());
      let anglePolar = random(TAU);
      let particlePos = createVector(
        this.center.x + distCenter * cos(anglePolar),
        this.center.y + distCenter * sin(anglePolar)
      );
      this.particles.push(
        new Particle(particlePos, this.color, this.flowfield)
      );
    }
  }

  show() {
    for (let particle of this.particles) {
      particle.show();
    }
  }
}

class Particle {
  constructor(pos, col, flowfield) {
    this.pos = pos;
    this.posPrev = this.pos.copy();

    this.lifeSpan = floor(random(10, 110) / 2);
    this.color = col;
    this.flowfield = flowfield;
  }

  show() {
    stroke(this.color);
    while (this.lifeSpan >= 1) {
      this.move();
      this.drawProgress();
    }
  }

  move() {
    this.lifeSpan -= random(1, 3);
    let moveStep = 4;
    this.posPrev = this.pos.copy();

    let moveAng = this.flowfield.getAng(this.pos.x, this.pos.y, 0);
    this.pos = createVector(
      this.pos.x + moveStep * cos(moveAng),
      this.pos.y + moveStep * sin(moveAng)
    );
  }

  drawProgress() {
    line(this.pos.x, this.pos.y, this.posPrev.x, this.posPrev.y);
  }
}

class FlowField {
  constructor() {
    this.particularOffset = floor(random(10000));
  }

  getAng(x, y, z) {
    let ang = PI;
    ang += (PI / 3) * (noise(x * 0.001, y * 0.001, z * 0.0005) - 0.5) * 2;
    ang +=
      PI *
      getRatio(x, y) *
      (noise(
        x * 0.003 + this.particularOffset,
        y * 0.003 + this.particularOffset,
        z * 0.003 + this.particularOffset
      ) -
        0.5) *
      2;
    return ang;
  }
}

function getRatio(x, y) {
  return dist(width, height / 2, x, y) / width;
}
