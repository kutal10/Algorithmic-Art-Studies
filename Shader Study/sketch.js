let vs = `
   precision highp float;
   precision highp int;

   attribute vec3 aPosition;
   attribute vec2 aTexCoord;

   varying vec2 vTexCoord;

   uniform mat4 uProjectionMatrix;
   uniform mat4 uModelViewMatrix;

    void main () {
      vec4 positionVec4 = vec4 (aPosition, 1.0);
      gl_Position = uProjectionMatrix * uModelViewMatrix * positionVec4;
      vTexCoord = aTexCoord;
   }
`;

let fs = `
   precision highp float;
   precision highp int;

   varying vec2 vTexCoord;

   uniform sampler2D u_tex;

   float pi = 3.14159265358979;

   float rand (vec2 co) {
     float a = fract (dot (co, vec2 (2.067390879775102, 12.451168662908249))) -0.5;
     float s = a * (6.182785114200511 + a * a * (-38.026512460676566 + a * a * 53.392573080032137));
     float t = fract (s * 43758.5453);
     return t;
   }

   void main () {
      vec2 uv = vTexCoord;

      float radius = 0.0035;
      uv.x = uv.x + rand (uv) * radius;
      uv.y = uv.y + rand (uv) * radius;
      vec4 tex = texture2D (u_tex, uv);

      gl_FragColor = tex;
    }
`;

let c = ["#6ae3ff", "#af0000", "#00186f", "#e73f39", "#002500", "#580000"];

let theShader;
let pg;

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);

  rectMode(CENTER);
  colorMode(HSB);
  noStroke();

  rectMode(CENTER);
  angleMode(DEGREES);
  theShader = createShader(vs, fs);
  pg = createGraphics(windowWidth, windowHeight);

  noLoop();
}

function draw() {
  background(random(360), 10, 90);

  set_graphics(pg);
  shader(theShader);
  theShader.setUniform(`u_tex`, pg);

  fill(0, 0, 0, 0);
  rect(0, 0, windowWidth);
}

function set_graphics(in_pg) {
  in_pg.angleMode(DEGREES);
  background("black");

  let cols = 150;
  let rows = cols / 1.2;
  let cellW = windowWidth / cols;
  let cellH = windowHeight / rows;

  for (let i = 0; i < cols; i++) {
    for (let j = 0; j < rows; j++) {
      let x = i * cellW;
      let y = j * cellH;

      let n = noise(x * 0.004, y * 0.004);

      let rotate_num = map(n, 0, 1, 0, 360);

      in_pg.push();
      in_pg.translate(x + cellW / 2, y + cellH / 2);
      in_pg.rotate(rotate_num);

      in_pg.stroke(random(c));

      for (let l = 0; l < cellW * 3; l = l + 3) {
        in_pg.line(0 + l, 0, cellW + l, cellH);
      }
      in_pg.pop();
    }
  }
}
