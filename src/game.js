import { createClock } from "./clock";

let gameLog = {
  guessItem: null,
  solution: null,
  interval: 250,
  results: [],
  gameIsOver: false,
  level: 0
};

const game = p5 => {
  const score = getGameScore(p5, gameLog.results);
  const speed = gameLog.interval - 10 * gameLog.level;
  gameLog.gameIsOver = score.loss >= 3 || score.total === 50;

  if (gameLog.gameIsOver) {
    displayGameOver(p5, score);
    return;
  }

  increaseDifficultyMessage(p5, score.win);
  p5.background(0);

  if (p5.frameCount === 1 || p5.frameCount % speed === 0) {
    gameLog.solution = null;
    gameLog.guessItem = new GetItem(
      p5,
      p5.width / 2,
      p5.height / 2,
      speed / 25
    );
  }

  gameLog.guessItem && gameLog.guessItem.render();
  solutionMessage(p5, gameLog.solution, score.total * 1000);

  p5.keyPressed = () => {
    if (gameLog.gameIsOver && p5.key === "Enter") {
      restartTheGame();
    } else if (gameLog.guessItem && p5.keyCode >= 48 && p5.keyCode <= 58) {
      gameLog.guessItem.solved(p5.key);
      gameLog.solution = gameLog.guessItem.answer;
      gameLog.results.push(gameLog.solution);
      gameLog.guessItem = null;
    }
  };
};

const getGameScore = score => {
  const gameScore = {
    win: 0,
    loss: 0,
    total: score.length
  };

  for (let result of gameLog.results) {
    if (result) {
      gameScore.win += 1;
    } else if (!result) {
      gameScore.loss += 1;
    }
  }

  return gameScore;
};

const displayGameOver = (p5, score) => {
  p5.push();
  p5.background(255);
  p5.textAlign(p5.CENTER, p5.CENTER);
  p5.translate(p5.width / 2, p5.height / 2);

  p5.fill(234, 34, 180);
  p5.textSize(24);
  p5.text("Game over!", 0, 0);

  p5.fill(0);
  p5.textSize(24);
  p5.translate(0, 36);
  p5.text(`You finished at level ${gameLog.level}`, 0, 0);
  p5.text(`You have a score ${score.win - score.loss}`, 0, 40);

  const alternatingFrameCount = p5.map(
    p5.sin(p5.frameCount / 10),
    -1,
    1,
    0,
    255
  );
  p5.fill(234, 34, 180, alternatingFrameCount);
  p5.textSize(16);
  p5.translate(0, 100);
  p5.text("PRESS ENTER", 0, 0);
  p5.pop();
};

const solutionMessage = (p5, solution, seed) => {
  let TRUE_MESSAGES = [
    "Great job!",
    "Doing great!",
    "OMG!",
    "Such win!",
    "Impressive"
  ];
  let FALSE_MESSAGES = ["Oh no!", "Better luck next time!", "Pfttt!", ":("];

  if (solution !== null) {
    let messages = solution ? TRUE_MESSAGES : FALSE_MESSAGES;

    p5.push();
    p5.randomSeed(seed);
    p5.fill(200, 40, 90);
    p5.textSize(36);
    p5.textAlign(p5.CENTER, p5.CENTER);
    p5.translate(p5.width / 2, p5.height / 2);
    p5.text(messages[parseInt(p5.random(messages.length), 10)], 0, 0);
    p5.randomSeed();
    p5.pop();
  }
};

const restartTheGame = () => {
  gameLog = {
    guessItem: null,
    solution: null,
    interval: 100,
    results: [],
    gameIsOver: false,
    level: 0
  };
};

function GetItem(p5, x, y, scl) {
  const getContent = () => {
    return String(parseInt(p5.random(10), 10));
  };

  this.x = x;
  this.y = y;
  this.scale = scl;
  this.content = getContent();
  this.scaleIncrement = 0.25;
  this.alphaDecrement = 6;
  this.alpha = 255;
  this.answer;
  this.contentMap = [
    "ZERO",
    "ONE",
    "TWO",
    "THREE",
    "FOUR",
    "FIVE",
    "SIX",
    "SEVEN",
    "EIGHT",
    "NINE",
    "TEN"
  ];
  this.colors = [
    [
      [255, 176, 105],
      [232, 82, 183],
      [143, 150, 255],
      [118, 232, 199],
      [221, 255, 130]
    ],
    [
      [6, 112, 33],
      [9, 184, 19],
      [42, 227, 0],
      [115, 250, 12],
      [174, 255, 0]
    ],
    [
      [204, 45, 191],
      [176, 47, 214],
      [121, 52, 191],
      [85, 47, 214],
      [45, 52, 204]
    ],
    [
      [255, 193, 36],
      [232, 155, 32],
      [255, 149, 49],
      [232, 100, 32],
      [255, 78, 36]
    ],
    [
      [217, 4, 22],
      [242, 5, 159],
      [3, 11, 166],
      [3, 166, 166],
      [242, 159, 5]
    ],
    [
      [217, 4, 22],
      [242, 5, 159],
      [3, 11, 166],
      [3, 166, 166],
      [242, 159, 5]
    ]
  ];

  this.solved = input => {
    if (input === this.content) {
      this.answer = true;
    } else {
      this.answer = false;
    }
  };

  this.drawEllipse = (size, strkWight, speedMultiplier, seed) => {
    p5.push();
    p5.randomSeed(seed);
    p5.noFill();
    p5.translate(this.x, this.y);
    p5.strokeWeight(strkWight * 0.5 * speedMultiplier);
    p5.scale(this.scale);
    let color = parseInt(p5.random(this.colors[gameLog.level].length), 10);
    p5.stroke(this.colors[gameLog.level][color]);
    p5.ellipse(0, 0, size, size);
    p5.randomSeed();
    p5.pop();
  };

  this.render = () => {
    if (this.answer || this.answer === undefined) {
      Array(10)
        .fill(0, 0)
        .forEach((value, index) => {
          this.drawEllipse(
            index ? (200 / index) * 2 : 200,
            index ? 15 / index : 15,
            index ? 1.4 / index : index,
            this.content * 10000 * index * 3
          );
        });

      p5.push();
      p5.fill(255, this.alpha);
      p5.textAlign(p5.CENTER, p5.CENTER);
      p5.translate(this.x, this.y);
      p5.scale(this.scale);
      p5.text(this.contentMap[this.content], 0, 0);
      this.scale += this.scaleIncrement;
      this.alpha -= this.alphaDecrement;
      p5.pop();
      createClock(p5, this.scale);
    }
  };
}

const increaseDifficultyMessage = (p5, wins) => {
  if (wins > 0 && wins % 5 === 0) {
    gameLog.level = wins / 5;

    p5.push();
    p5.fill(200, 40, 90);
    p5.textSize(36);
    p5.textAlign(p5.CENTER, p5.CENTER);
    p5.translate(p5.width / 2, p5.height / 2);
    p5.text(`Congratulation! You are at level ${gameLog.level}.`, 0, 0);
    p5.pop();
  }
};

export default game;
