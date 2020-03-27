import "../styles.css";
import game from "./game";

import p5 from "p5";

const sketch = sk => {
  sk.setup = () => {
    let canvas = sk.createCanvas(1440, 800);
    // sets canvas on root element in the DOM.
    canvas.parent("root");
    // Set color of the canvas. background(100, 100, 100);
    // Single value for a grey scale color.
    // Pure red = background(255, 0, 0)
    // Pure green = background(0, 255, 0)
    // Pure blue = background(0, 0, 255)
    // background also has a 4th value called `alpha` which sets the opacity.
    // opacity ranges from 0 to 255. This might not be effective since
    // p5 renders continuously and opacity becomes 255 soon.
    sk.background(30, 150, 225);

    // `noLoop` stops draw function to loop again and runs it only once for the lifecycle of the program.
    // noLoop();
    // Customizes the frameRate of p5js i.e. controls how many times the draw function is called per second.
    // frameRate(2);

    // circle_1 = new Circle(width, height);
    // circle_2 = new Circle(width + 400, height);

    // draws cicles of varied sizes by calling random function on an array of size =x where x is user input.
    // circularOutlines();
  };

  sk.draw = () => {
    game(sk);
  };
};

const P5 = new p5(sketch);
