function splatter(bx, by) {
  let c = colors[floor(random(colors.length))];
  bx += random(-15, 15);
  by += random(-15, 15);
  for (let i = 0; i < 80; i++) {
    seed += 0.01;
    let x = bx* (0.5 - noise(seed + i));
    let y = by* (0.5 - noise(seed + 2 * i));
    let s = 150 / dist(bx, by, x, y);
    if (s > 20) s = 20;
    let a = 255 - s * 5;
    noStroke();
    c.setAlpha(a);
    fill(c);
    ellipse(x, y, s);
    seed += 0.01;
  }
}
