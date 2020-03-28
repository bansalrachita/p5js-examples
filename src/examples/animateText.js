const animateText = p5 => {
  const arr = ["I", "Love", "JavaScript"];
  const colors = [
    [73, 79, 191],
    [242, 229, 46],
    [191, 183, 69]
  ];

  p5.frameRate(3);
  p5.textAlign(p5.CENTER, p5.CENTER);
  p5.fill(255, 255, 255);
  p5.textSize(25);
  const index = p5.frameCount % arr.length;

  background(colors[index]);
  text(arr[index], p5.width / 2, p5.height / 2);
};
