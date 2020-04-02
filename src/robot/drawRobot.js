export const drawRobot = p5 => {
  p5.background(204);
  p5.push();
  p5.translate(p5.width / 2, p5.height / 2);
  p5.fill(53);
  p5.ellipse(0, -100, 90, 90);
  p5.fill(255);
  p5.ellipse(15, -110, 25, 25);
  p5.fill(53);
  p5.ellipse(15, -110, 5, 5);
  p5.fill(130);
  p5.ellipse(32, -100, 7, 7);
  p5.ellipse(22, -130, 10, 10);
  p5.ellipse(-5, -115, 13, 13);
  p5.pop();
};
