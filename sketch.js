let circle_1;
let circle_2;

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

  // `noLoop` stops draw function to loop again and runs it only once for the lifecycle of the program.
  // noLoop();
  // Customizes the frameRate of p5js i.e. controls how many times the draw function is called per second.
  // frameRate(2);

  // circle_1 = new Circle(width, height);
  // circle_2 = new Circle(width + 400, height);

  // draws cicles of varied sizes by calling random function on an array of size =x where x is user input.
  // circularOutlines();
}

function draw() {
  // console.log("run setup."); Runs continuosly. It has a framerate of 60.
  // shapes();
  // paint();
  // showFrameRate();
  // fillCircles();
  // randomFunctions();
  // drawFromCircle();
  // animateText();
  drawCirclesOnKeyPress();
}

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

function shapes() {
  // drawDNDIcon();
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

const randomFunctions = () => {
  background(255, 0, 150);
  frameRate(1);

  fill(255);
  textAlign(CENTER, CENTER);
  textSize(24);
  // Returns a random decimal value > 0 and < 1.
  const random_0 = random();
  // Returns a random decimal value between 0 and 10.
  const random_1 = random(10);
  // Returns a random decimal value between 10 and 100.
  const random_2 = random(10, 100);
  const x = width / 2;
  const y = height / 2;
  const offset = 40;

  text(random_0, x, y - offset);
  text(random_1, x, y);
  text(random_2, x, y + offset);
};

const circularOutlines = () => {
  noFill();
  strokeWeight(2);
  circles(width / 2, height / 2, 100);
};
