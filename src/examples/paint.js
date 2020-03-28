function paint() {
  // Move the background up to retain the previous image on the canvas.
  // background(220);
  let x = mouseX;
  let y = mouseY;
  let size = 30;

  if (mouseIsPressed) {
    noStroke();
    fill(255, 18, 100, 100);
    ellipse(x, y, size, size);
  }
}
