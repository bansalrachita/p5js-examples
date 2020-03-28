function Circle(p5, width, height) {
  this.x = p5.width / 2;
  this.y = p5.height / 2;
  this.size = 50;

  this.draw = () => {
    p5.ellipse(this.x, this.y, this.size, this.size);
  };

  this.grow = () => {
    if (this.size < 200) {
      this.size += 1;
    }
  };
}
