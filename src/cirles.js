const circles = (x, y, size) => {
  const arr = [];
  for (let i = 0; i < size; ++i) {
    const randomValue = random(5, 500);
    arr.push(randomValue);
  }

  for (let i of arr) {
    ellipse(x, y, i, i);
  }
};

const fillCircles = () => {
  background(30, 150, 240);
  fill(255, 50, 150);
  noStroke();

  let diameter = 40;

  // Nested structures can make the program really slow
  // because they are run infinitely in p5js and should be used carefully.
  for (let i = 0; i < width / diameter; ++i) {
    for (let j = 0; j < height / diameter; ++j) {
      let offset = diameter / 2;
      let x = i * diameter + offset;
      let y = j * diameter + offset;
      // gives a sooth transition of randomly generated values i.e. with a more even distribution.
      ellipse(
        x,
        y,
        // `noise()` function returns semi-random value in between 0 and 1.
        // So if we input gradually incrementing values to noise function,
        // it will return only return incrementing semi-random value.
        diameter * noise(frameCount / 100 + i + j),
        diameter * noise(frameCount / 100 + i + j)
      );
    }
  }
};

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
