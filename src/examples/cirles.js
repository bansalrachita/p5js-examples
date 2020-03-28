const circles = (p5, x, y, size) => {
  const arr = [];
  for (let i = 0; i < size; ++i) {
    const randomValue = p5.random(5, 500);
    arr.push(randomValue);
  }

  for (let i of arr) {
    p5.ellipse(x, y, i, i);
  }
};

const fillCircles = p5 => {
  p5.background(30, 150, 240);
  p5.fill(255, 50, 150);
  p5.noStroke();

  let diameter = 40;

  // Nested structures can make the program really slow
  // because they are run infinitely in p5js and should be used carefully.
  for (let i = 0; i < p5.width / diameter; ++i) {
    for (let j = 0; j < p5.height / diameter; ++j) {
      let offset = diameter / 2;
      let x = i * diameter + offset;
      let y = j * diameter + offset;
      // gives a sooth transition of randomly generated values i.e. with a more even distribution.
      p5.ellipse(
        x,
        y,
        // `noise()` function returns semi-random value in between 0 and 1.
        // So if we input gradually incrementing values to noise function,
        // it will return only return incrementing semi-random value.
        diameter * p5.noise(p5.frameCount / 100 + i + j),
        diameter * p5.noise(p5.frameCount / 100 + i + j)
      );
    }
  }
};

function drawCircles() {
  // circle 1
  p5.stroke(75);
  p5.fill(50);
  p5.ellipse(400, 200, 300, 300);
  // circle 2
  p5.stroke(0);
  p5.fill(200, 0, 100);
  p5.ellipse(400, 200, 275, 275);
  // circle 3
  p5.stroke(100);
  p5.fill(0, 100, 150);
  p5.ellipse(400, 200, 250, 250);
  // circle 4
  p5.stroke(100);
  p5.fill(50, 200, 0);
  p5.ellipse(400, 200, 150, 150);
}
