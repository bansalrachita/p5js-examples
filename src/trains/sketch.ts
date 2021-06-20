import '../../../styles.css';
import P5 from 'p5';

const sketch = (p5: P5) => {
  const wWidth = p5.windowWidth;
  const wHeight = p5.windowHeight;
  const trains: Train[] = [];
  const trainFeatures = {
    speed: 10,
    position: 0, // initial position
  };

  p5.setup = () => {
    let canvas = p5.createCanvas(wWidth, wHeight);
    canvas.parent('root');

    p5.stroke(0);
    p5.background(26, 26, 26, 250);

    p5.fill(getRandomColor());

    for (let i = 1; i <= 10; ++i) {
      trains.push(new Train((wWidth / 10) * i, trainFeatures));
    }
  };

  p5.draw = () => {
    drawTrains(trains, trainFeatures);
  };
};

const getRandomColor = () => {
  const r = p5.floor(p5.random(0, 256));
  const g = p5.floor(p5.random(0, 256));
  const b = p5.floor(p5.random(0, 256));

  return p5.color(r, g, b, 250);
};

const getCurrentHeight = (trainFeatures: { [key: string]: number }) => {
  const wHeight = p5.windowHeight;
  trainFeatures.position += trainFeatures.speed;

  if (trainFeatures.position >= wHeight) {
    // track position of trains for resetting color
    p5.fill(getRandomColor());
    trainFeatures.position = 0; // reset to initial position
  }
};

const drawTrains = (
  trains: Train[],
  trainFeatures: { [key: string]: number }
) => {
  // At each frame check the height update the color.
  getCurrentHeight(trainFeatures);

  for (let i = 0; i < 10; ++i) {
    // display the train
    trains[i].display();
  }
};

declare class Train {
  constructor(width: number, trainFeatures: { [key: string]: number });
  public display: () => void;
}

function Train(width: number, trainFeatures: { [key: string]: number }) {
  this.speed = trainFeatures.speed; // the distance square will cover in one frame
  this.width = width;
  this.height = trainFeatures.position;

  this.display = function () {
    p5.push();
    this.height = trainFeatures.position; // re-assign height to the current position.
    p5.translate(this.width, this.height); // move the rectangle in the middle
    p5.rect(0, 0, 50, 50);
    p5.pop();
  };
}

export const p5 = new P5(sketch);
