import '../../../styles.css';
import P5 from 'p5';

/**
 * @param  {P5} p5 the p5 instance for creating the sketch
 * @returns void
 */
const sketch = (p5: P5): void => {
  const wWidth = p5.windowWidth;
  const wHeight = p5.windowHeight;
  let flower: Flower | null = null;

  p5.setup = () => {
    const canvas = p5.createCanvas(wWidth, wHeight);
    canvas.parent('root');
    p5.background(0);
    p5.angleMode(p5.DEGREES);
    flower = new Flower(wWidth, wHeight);
  };

  p5.draw = () => {
    flower.display();
  };
};

declare class Flower {
  constructor(width: number, height: number);
  display: () => void;
  private getRandomColor: () => void;
}

function Flower(width: number, height: number) {
  this.width = width;
  this.height = height;
  this.totalDegrees = 362;
  this.centerX = this.width / 2;
  this.centerY = this.height / 2;
  this.radius = this.width / 2;

  this.getRandomColor = function () {
    const r = p5.random(256);
    const g = p5.random(256);
    const b = p5.random(256);
    p5.stroke([r, g, b, 80]);
  };

  this.display = function () {
    p5.noFill();
    // p5.stroke(255, 80);
    this.getRandomColor();
    p5.beginShape();
    for (let i = 0; i <= this.totalDegrees; ++i) {
      const noiseFactor = p5.noise(i / 30, p5.frameCount / 100);
      const x = this.centerX + this.radius * p5.cos(i) * noiseFactor;
      const y = this.centerY + this.radius * p5.sin(i) * noiseFactor;
      p5.curveVertex(x, y);
    }
    p5.endShape();

    --this.radius;
    if (this.radius === 0) {
      // p5.noLoop();
      p5.background(0);
      this.radius = this.width / 2;
    }
  };
}

export const p5 = new P5(sketch);
