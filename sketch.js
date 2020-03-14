function setup() {
  let canvas = createCanvas(800, 400);
  // sets canvas on root element in the DOM.
  canvas.parent("root");
  // Set color of the canvas. background(100, 100, 100);
  // Single value for a grey scale color.
  // Pure red = background(255, 0, 0)
  // Pure green = background(0, 255, 0)
  // Pure blue = background(0, 0, 255)
  // background also has a 4th value called `alpha` which sets the opacity.
  // opacity ranges from 0 to 255. This might not be effective since
  // p5 renders continuously and opacity becomes 255 soon.
  background(30, 150, 225);
}

function draw() {
  // console.log("run setup."); Runs continuosly. It has a framerate of 60.
  shapes();
}

function callNativeCanvasProps() {
  drawingContext.shadowOffsetX = 5;
  drawingContext.shadowOffsetY = -5;
  drawingContext.shadowBlur = 10;
  drawingContext.shadowColor = "black";
}

function shapes() {
  drawDNDIcon();
  // drawCircles();
  // drawRect();
  // drawEllipse();
  // drawLine();
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

function drawCircles() {
  // circle 1
  stroke(75);
  fill(50);
  ellipse(400, 200, 300, 300);
  // circle 2
  stroke(0);
  fill(200, 0, 100);
  ellipse(400, 200, 275, 275);
  // circle 3
  stroke(100);
  fill(0, 100, 150);
  ellipse(400, 200, 250, 250);
  // circle 4
  stroke(100);
  fill(50, 200, 0);
  ellipse(400, 200, 150, 150);
}
let count = 0;

function drawDNDIcon() {
  background(1, 186, 245);
  // p5.js variable that returns canvas width.
  let x = width / 2;
  // p5.js variable that returns canvas height.
  let y = height / 2;
  let size = 200 + count;

  noStroke();
  fill(255, 75, 85);
  ellipse(x, y, size, size);

  rectMode(CENTER);
  fill(255);
  rect(x, y, 0.75 * size, 0.15 * size);

  count++;
}
