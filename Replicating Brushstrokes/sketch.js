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
  strokeCap(ROUND);
  //colorMode(RGB, 255, 255, 255, 100);
  //colorMode(RGB);
  colorMode(HSB);
  background("255");
  //blendMode(MULTIPLY);

  let diskSampling = new PoissonDiskSampling({
    shape: [width * 2, height * 1.3],
    minDistance: 15,
    maxDistance: 40,
    tries: 3,
  });
  let samplings = diskSampling.fill();

  let flowfields = [
    new FlowField(),
    new FlowField(),
    new FlowField(),
    new FlowField(),
    new FlowField(),
    new FlowField(),
  ];
  for (let sampling of samplings) {
    let colorFactor = floor(random(2.5));
    let vec = createVector(sampling[0] - width, sampling[1] - height * 0.1);
    swarms.push(new Swarm(vec.x, vec.y, flowfields[colorFactor]));
  }
  swarms = shuffle(swarms);
  noLoop();
}

function draw() {
  for (let i = 0; i < 400; i++) {
    swarms[i].show();
  }
}

/* function shiftColor(col, range, alf) {
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
} */

class Swarm {
  constructor(x, y, flowfield) {
    this.center = createVector(x, y);
    this.groupRad = random(10, 15.5);
    this.flowfield = flowfield;
    this.density = 0.1;
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
      this.particles.push(new Particle(particlePos, this.flowfield));
    }
  }

  show() {
    for (let particle of this.particles) {
      particle.show();
    }
  }
}

class Particle {
  constructor(pos, flowfield) {
    this.pos = pos;
    this.posPrev = this.pos.copy();
    this.lifeSpan = floor(random(10, 110) / 2);
    this.flowfield = flowfield;
  }

  show() {
    let palette1 = [
      [
        color(200, random(50, 60), random(30, 70), random(10, 20)),
        color(200, random(50, 100), random(80, 100), random(10, 44)),
      ],
      [
        color(200, random(40, 100), random(70, 91), random(10, 34)),
        color(200, random(60, 90), random(30, 74), random(10, 24)),
      ],
      [color(200, random(40, 60), random(40, 60), random(10, 34))],
    ];

    let colorFactor = floor(random(2.5));
    let specColor = random(palette1[colorFactor]);
    stroke(specColor);
    strokeWeight(randomGaussian(0.8, 0.4));
    while (this.lifeSpan >= 1) {
      this.move();
      this.drawProgress();
    }
  }

  move() {
    this.lifeSpan -= random(0.7, 2);
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
