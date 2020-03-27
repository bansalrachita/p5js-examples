let gameLog = {
  guessItem: null,
  solution: null,
  interval: 100,
  results: [],
  gameIsOver: false,
  level: 0
};

const game = (sketch, keyPressed) => {
  const score = getGameScore(sketch, gameLog.results);
  const speed = gameLog.interval - 10 * gameLog.level;
  gameLog.gameIsOver = score.loss >= 3 || score.total === 50;

  if (gameLog.gameIsOver) {
    displayGameOver(sketch, score);
    return;
  }

  increaseDifficultyMessage(sketch, score.win);
  sketch.background(0);

  if (sketch.frameCount === 1 || sketch.frameCount % speed === 0) {
    gameLog.solution = null;
    gameLog.guessItem = new GetItem(
      sketch,
      sketch.width / 2,
      sketch.height / 2,
      speed / 10
    );
  }

  gameLog.guessItem && gameLog.guessItem.render();
  solutionMessage(sketch, gameLog.solution, score.total * 1000);

  sketch.keyPressed = () => {
    if (gameLog.gameIsOver && sketch.key === "Enter") {
      restartTheGame();
    } else if (
      gameLog.guessItem &&
      sketch.keyCode >= 48 &&
      sketch.keyCode <= 58
    ) {
      gameLog.guessItem.solved(sketch.key);
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

const displayGameOver = (sketch, score) => {
  sketch.push();
  sketch.background(255);
  sketch.textAlign(sketch.CENTER, sketch.CENTER);
  sketch.translate(sketch.width / 2, sketch.height / 2);

  sketch.fill(234, 34, 180);
  sketch.textSize(24);
  sketch.text("Game over!", 0, 0);

  sketch.fill(0);
  sketch.textSize(24);
  sketch.translate(0, 36);
  sketch.text(`You finished at level ${gameLog.level}`, 0, 0);
  sketch.text(`You have a score ${score.win - score.loss}`, 0, 40);

  const alternatingFrameCount = sketch.map(
    sketch.sin(sketch.frameCount / 10),
    -1,
    1,
    0,
    255
  );
  sketch.fill(234, 34, 180, alternatingFrameCount);
  sketch.textSize(16);
  sketch.translate(0, 100);
  sketch.text("PRESS ENTER", 0, 0);
  sketch.pop();
};

const solutionMessage = (sketch, solution, seed) => {
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

    sketch.push();
    sketch.randomSeed(seed);
    sketch.fill(200, 40, 90);
    sketch.textSize(36);
    sketch.textAlign(sketch.CENTER, sketch.CENTER);
    sketch.translate(sketch.width / 2, sketch.height / 2);
    sketch.text(messages[parseInt(sketch.random(messages.length), 10)], 0, 0);
    sketch.randomSeed();
    sketch.pop();
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

function GetItem(sketch, x, y, scl) {
  const getContent = () => {
    return String(parseInt(sketch.random(10), 10));
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
    [255, 176, 105],
    [232, 82, 183],
    [143, 150, 255],
    [118, 232, 199],
    [221, 255, 130]
  ];

  this.solved = input => {
    if (input === this.content) {
      this.answer = true;
    } else {
      this.answer = false;
    }
  };

  this.drawEllipse = (size, strkWight, speedMultiplier, seed) => {
    sketch.push();
    sketch.randomSeed(seed);
    sketch.noFill();
    sketch.translate(this.x, this.y);
    sketch.strokeWeight(strkWight * 0.5 * speedMultiplier);
    sketch.scale(this.scale);
    let color = parseInt(sketch.random(this.colors.length), 10);
    sketch.stroke(this.colors[color]);
    sketch.ellipse(0, 0, size, size);
    sketch.randomSeed();
    sketch.pop();
  };

  this.render = () => {
    if (this.answer || this.answer === undefined) {
      this.drawEllipse(100, 15, 1.4, this.content * 1000);
      this.drawEllipse(80, 7, 1.2, this.content * 3000);
      this.drawEllipse(65, 6, 1.1, this.content * 6000);

      sketch.push();
      sketch.fill(255, this.alpha);
      sketch.textAlign(sketch.CENTER, sketch.CENTER);
      sketch.translate(this.x, this.y);
      sketch.scale(this.scale);
      sketch.text(this.contentMap[this.content], 0, 0);
      this.scale += this.scaleIncrement;
      this.alpha -= this.alphaDecrement;
      sketch.pop();
    }
  };
}

const increaseDifficultyMessage = (sketch, wins) => {
  if (wins > 0 && wins % 5 === 0) {
    gameLog.level = wins / 5;

    sketch.push();
    sketch.fill(200, 40, 90);
    sketch.textSize(36);
    sketch.textAlign(sketch.CENTER, sketch.CENTER);
    sketch.translate(sketch.width / 2, sketch.height / 2);
    sketch.text(`Congratulation! You are at level ${gameLog.level}.`, 0, 0);
    sketch.pop();
  }
};

export default game;
