const clockConstants = {
  radius: 40,
  scale: 2,
  time: 0
};

export const createClock = (p5, scl) => {
  clockConstants.time = p5.PI + p5.HALF_PI;

  const clock = new Clock(p5, scl);

  clock.render();
};

function Clock(p5, scl) {
  this.radius = clockConstants.radius;
  this.scale = clockConstants.scale;
  this.time = clockConstants.time;
  this.x = p5.width - this.radius * this.scale;
  this.y = p5.height - (this.radius + 10) * this.scale;

  this.render = () => {
    p5.push();
    p5.stroke(204, 168, 24);
    p5.translate(this.x, this.y);
    p5.scale(this.scale);
    p5.fill(204, 168, 24);
    // draw the clock.
    p5.ellipse(0, 0, this.radius, this.radius);

    // draw the top ring.
    p5.push();
    p5.fill(255, 210, 31);
    p5.translate(0, -this.radius / 2);
    p5.arc(
      0,
      0,
      this.radius / 3.5,
      this.radius / 3.5,
      0.95 * p5.PI,
      2.05 * p5.PI,
      p5.OPEN
    );
    p5.pop();

    // draw the right stand curve.
    p5.push();
    p5.fill(204, 168, 24);
    p5.translate(1.9 * p5.PI, this.radius / 2);
    p5.bezier(0, 0, 2, 3, 3, 5, 5, 5);
    p5.pop();

    // draw the right stand surface curve.
    p5.push();
    p5.fill(204, 168, 24);
    p5.translate(1.9 * p5.PI + 5, 5 + this.radius / 2);
    p5.bezier(0, 0, -2, 3, -3, 5, -11, 3);
    p5.pop();

    // draw the left stand curve.
    p5.push();
    p5.fill(204, 168, 24);
    p5.translate(-1.9 * p5.PI, this.radius / 2);
    p5.bezier(0, 0, -2, 3, -3, 5, -5, 5);
    p5.pop();

    // draw the left half surface curve.
    p5.push();
    p5.fill(204, 168, 24);
    p5.translate(-1.9 * p5.PI - 5, 5 + this.radius / 2);
    p5.bezier(0, 0, 2, 3, 3, 5, 11, 3);
    p5.pop();

    // draw the hand.
    p5.push();
    p5.stroke(244);
    p5.fill(245);

    this.time += (0.7 * scl) / p5.TWO_PI;
    p5.rotate(this.time);
    p5.line(0, 0, 0, -(this.radius / 2) + 3);
    p5.ellipse(0, 0, (0.15 * this.radius) / 2);
    p5.pop();

    // draw the right eye.
    p5.push();
    p5.stroke(245);
    p5.translate(this.radius / 4, -3);
    p5.fill(20);
    p5.arc(
      0,
      0,
      this.radius / 6,
      this.radius / 2.5,
      0.95 * p5.PI,
      2 * p5.PI,
      p5.CHORD
    );
    p5.fill(0);
    p5.ellipse(0, -4, this.radius / 10, this.radius / 6);
    p5.fill(255);
    p5.ellipse(0, -2, this.radius / 20, this.radius / 20);

    p5.pop();

    // draw the left eye.
    p5.push();
    p5.stroke(245);
    p5.fill(20);
    p5.translate(-this.radius / 4, -3);
    p5.arc(
      0,
      0,
      this.radius / 6,
      this.radius / 2.5,
      p5.PI,
      2.05 * p5.PI,
      p5.CHORD
    );
    p5.fill(0);
    p5.ellipse(0, -4, this.radius / 10, this.radius / 6);
    p5.fill(255);
    p5.ellipse(0, -2, this.radius / 20, this.radius / 20);
    p5.pop();

    p5.pop();
  };
}
