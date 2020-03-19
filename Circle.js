function Circle(width, height) {
  this.x = width / 2;
  this.y = height / 2;
  this.size = 50;

  this.draw = () => {
    ellipse(this.x, this.y, this.size, this.size);
  };

  this.grow = () => {
    if (this.size < 200) {
      this.size += 1;
    }
  };
}
