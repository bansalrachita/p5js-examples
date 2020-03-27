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
