const animateText = () => {
  const arr = ["I", "Love", "JavaScript"];
  const colors = [
    [73, 79, 191],
    [242, 229, 46],
    [191, 183, 69]
  ];

  frameRate(3);
  textAlign(CENTER, CENTER);
  fill(255, 255, 255);
  textSize(25);
  const index = frameCount % arr.length;

  background(colors[index]);
  text(arr[index], width / 2, height / 2);
};
