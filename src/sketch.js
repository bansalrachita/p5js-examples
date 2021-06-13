import "../styles.css";
import p5js from "p5";
// import { game } from "./game/game";
// import { animateBall } from "./ball/drawBall";
import { createTree } from "./treeView/treeView";

const sketch = (p5) => {
  p5.setup = () => {
    let canvas = p5.createCanvas(1300, 770);
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
    p5.background(255);

    // `noLoop` stops draw function to loop again and runs it only once for the lifecycle of the program.
    // noLoop();
    // Customizes the frameRate of p5js i.e. controls how many times the draw function is called per second.
    // frameRate(2);

    // circle_1 = new Circle(width, height);
    // circle_2 = new Circle(width + 400, height);

    // draws cicles of varied sizes by calling random function on an array of size =x where x is user input.
    // circularOutlines();
    createTree(p5);
  };

  p5.draw = () => {
    // game(p5);
    // drawRobot(p5);
    // animateBall(p5);
  };
};

const P5 = new p5js(sketch);
