import '../../../styles.css';
import P5 from 'p5';

const sketch = (p5: P5) => {
  const width = p5.windowWidth;
  console.log('p5.windowWidth: ', p5.windowWidth);
  const height = p5.windowHeight;
  console.log('p5.windowHeight: ', p5.windowHeight);

  p5.setup = () => {
    let canvas = p5.createCanvas(width, height);
    p5.stroke(0);
    canvas.parent('root');
    p5.background(255);
  };

  p5.draw = () => {
    p5.background(200);
    p5.rectMode(p5.CENTER); // rectangle in the middle of the screen
    p5.translate(width / 2, height / 2);
    p5.translate(P5.Vector.fromAngle(p5.millis() / 1000, 40));
    p5.rect(0, 0, 20, 20);
  };
};
export const p5 = new P5(sketch);
