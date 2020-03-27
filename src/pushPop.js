const pushPop = () => {
  rectMode(CENTER);
  // Defines the rotation mode.
  angleMode(DEGREES);
  background(220);
  noStroke();

  fill(255, 30, 150);
  reactCustom(width / 2, height / 2, 150, 150, 45);

  fill(255);
  reactCustom(width / 2, height / 2, 75, 75, 30);
};

const reactCustom = (x, y, width, height, rotation = 0) => {
  // Allows to create new drawing state.
  push();
  translate(x, y);
  rotate(rotation);
  rect(0, 0, width, height);
  //Allows to restore the drawing state created by the previous push function.
  pop();
};
