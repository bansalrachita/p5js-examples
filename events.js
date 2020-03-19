let count = 0;
let toggle = false;

function drawDNDIcon() {
  // `mouseIsPressed` return true when mouse is clicked on canvas area else it returns false.
  // This is not a good way to detect mouse clicks because of the high frameRate of p5js the detection can be glitchy.
  // Instead use p5js evan function.
  if (mouseIsPressed) {
    toggle = !toggle;
  }

  if (toggle) {
    background(1, 186, 245);
  } else {
    background(250, 118, 24);
  }

  frameRate(15);
  // p5.js variable that returns canvas width.
  let x = width / 2;
  // p5.js variable that returns canvas height.
  let y = height / 2;
  let size = 200 + count;

  if (frameCount % 30 === 0) {
    count = 0;
  }

  noStroke();
  fill(255, 75, 85);
  ellipse(x, y, size, size);

  rectMode(CENTER);
  fill(255);
  rect(x, y, 0.75 * size, 0.15 * size);

  count++;
}
// special event provided by p5js to handle mouse clicks.
// function mousePressed() {
//   toggle = !toggle;
// }
let pressed = false;

const drawCirclesOnKeyPress = () => {
  const colors = [
    [73, 79, 191],
    [242, 229, 46],
    [191, 183, 69]
  ];
  noStroke();
  if (pressed) {
    const randomIndex = parseInt(random(colors.length), 10);
    const randomSize = random(200);
    fill(colors[randomIndex]);
    ellipse(random(width), random(height), randomSize, randomSize);
  }
  pressed = false;
};

function keyPressed() {
  if (key === " ") {
    pressed = true;
  }
}
