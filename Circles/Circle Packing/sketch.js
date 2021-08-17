var cheight = 1000;
var cwidth = 1000;

// list of circles
var list_of_circles = [];
var total_circles = 4000;

// outer circle
var outer_circle_x;
var outer_circle_y;
var outer_circle_r;

function setup() {
  createCanvas(cwidth, cheight);
  noLoop();
  colorMode(HSB);
  background(45, 5, 95);

  outer_circle_x = width / 2;
  outer_circle_y = height / 2;
  outer_circle_r = 700;
}

function draw() {
  // first draw outer circle
  //fill(120, 5, 100);
  //noStroke();
  //ellipse(outer_circle_x, outer_circle_y, 2*outer_circle_r);

  // track circle size limit
  var max_radius = 50;

  // create circles
  for (var i = 0; i < total_circles; i += 1) {
    // candidate success
    var success;

    do {
      // reset status
      success = true;
      // candidate location (polar) and radius
      var d = random(outer_circle_r);
      var a = random(360);
      var r = random(max_radius, max_radius + 5);

      // check it remains inside outer circle
      if (d + r > outer_circle_r) {
        success = false;
      } else {
        //check it remains outside other circles
        for (c of list_of_circles) {
          if (dist(c.x, c.y, d * cos(a), d * sin(a)) < c.radius + r + 2) {
            success = false;
            // break out, we don't need to test any more dots
            break;
          }
        }
      }

      // reduce dot size
      max_radius *= 0.989;
    } while (success == false);

    // add circle to list
    list_of_circles.push(new Circle(d * cos(a), d * sin(a), r));
  }

  // draw all circles
  for (c of list_of_circles) {
    c.draw();
  }

  // border
  noFill();
  stroke(0, 0, 80);
  rect(0, 0, width - 1, height - 1);
}

// circle object
function Circle(x, y, r) {
  this.x = x;
  this.y = y;
  this.radius = r;
  this.hue = (random(200, 250) + 120) % 360;

  this.draw = function () {
    noStroke();
    fill(this.hue, 60, 80);
    ellipse(width / 2 + this.x, height / 2 - this.y, 2 * this.radius);
  };
}
