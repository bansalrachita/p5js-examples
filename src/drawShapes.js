let circle_1;
let circle_2;

const drawFromCircle = () => {
  fill(245, 30, 150);
  noStroke();

  circle_1.draw();
  circle_1.grow();

  circle_2.draw();
  circle_2.grow();
};

function callNativeCanvasProps() {
  drawingContext.shadowOffsetX = 5;
  drawingContext.shadowOffsetY = -5;
  drawingContext.shadowBlur = 10;
  drawingContext.shadowColor = "black";
}

function drawRect() {
  // Remove the fill property.
  // noFill();
  // ]Remove the stroke property.
  noStroke();
  // `rectmode` positions the rectangle around a point. It can be provided position.
  // Expected values: CORNER|CORNERS|CENTER|RADIUS
  // Should be written at the top level in the setup() function if want to be applied on all rectangles.
  rectMode(CENTER);
  fill(255);
  // `rect` requires x,y coordinates and width, height as args.
  rect(400, 150, 100, 100);
  // Stacks ellipse on top of the rectangle.
  // Layering takes place on the order of line of code called in the program.
}

function drawEllipse() {
  // Default color to fill is white.
  fill(255, 0, 0);
  stroke(0);
  ellipse(350, 120, 100, 100);
}

function drawLine() {
  // Decides thickness of the outline.
  strokeWeight(2);
  // default color is black for stroke.
  stroke(200);
  line(0, 0, 800, 300);
}

function showFrameRate() {
  background(220);
  frameRate(6);
  // Changes the size of the text.
  textSize(36);
  // Changes the font color.
  fill(236, 34, 117);
  textAlign(CENTER, CENTER);
  const fr = parseInt(frameRate(), 10);

  text("frameRate " + fr, width / 2, height / 2);
  text("frameCount: " + frameCount, width / 2, height / 3);
}

function shapes() {
  // drawDNDIcon();
  // drawCircles();
  // drawRect();
  // drawEllipse();
  // drawLine();
}

const circularOutlines = () => {
  noFill();
  strokeWeight(2);
  circles(width / 2, height / 2, 100);
};
