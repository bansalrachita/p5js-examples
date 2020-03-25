let gameLog = {
  guessItem: null,
  solution: null,
  interval: 100,
  results: [],
  gameIsOver: false,
  level: 0
};

const game = () => {
  const score = getGameScore(gameLog.results);
  const speed = gameLog.interval - 10 * gameLog.level;
  gameLog.gameIsOver = score.loss >= 3 || score.total === 50;

  if (gameLog.gameIsOver) {
    displayGameOver(score);
    return;
  }

  increaseDifficultyMessage(score.win);
  background(0);

  if (frameCount === 1 || frameCount % speed === 0) {
    gameLog.solution = null;
    gameLog.guessItem = new GetItem(width / 2, height / 2, speed / 10);
  }

  gameLog.guessItem && gameLog.guessItem.render();
  solutionMessage(gameLog.solution, score.total * 1000);
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

const displayGameOver = score => {
  push();
  background(255);
  textAlign(CENTER, CENTER);
  translate(width / 2, height / 2);

  fill(234, 34, 180);
  textSize(24);
  text("Game over!", 0, 0);

  fill(0);
  textSize(24);
  translate(0, 36);
  text(`You finished at level ${gameLog.level}`, 0, 0);
  text(`You have a score ${score.win - score.loss}`, 0, 40);

  const alternatingFrameCount = map(sin(frameCount / 10), -1, 1, 0, 255);
  fill(234, 34, 180, alternatingFrameCount);
  textSize(16);
  translate(0, 100);
  text("PRESS ENTER", 0, 0);
  pop();
};

const solutionMessage = (solution, seed) => {
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

    push();
    randomSeed(seed);
    fill(200, 40, 90);
    textSize(36);
    textAlign(CENTER, CENTER);
    translate(width / 2, height / 2);
    text(messages[parseInt(random(messages.length), 10)], 0, 0);
    randomSeed();
    pop();
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

function keyPressed() {
  if (gameLog.gameIsOver && key === "Enter") {
    restartTheGame();
  } else if (gameLog.guessItem && keyCode >= 48 && keyCode <= 58) {
    gameLog.guessItem.solved(key);
    gameLog.solution = gameLog.guessItem.answer;
    gameLog.results.push(gameLog.solution);
    gameLog.guessItem = null;
  }
}

function GetItem(x, y, scl) {
  const getContent = () => {
    return String(parseInt(random(10), 10));
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
    push();
    randomSeed(seed);
    noFill();
    translate(this.x, this.y);
    strokeWeight(strkWight * 0.5 * speedMultiplier);
    scale(this.scale);
    let color = parseInt(random(this.colors.length), 10);
    stroke(this.colors[color]);
    ellipse(0, 0, size, size);
    randomSeed();
    pop();
  };

  this.render = () => {
    if (this.answer || this.answer === undefined) {
      this.drawEllipse(100, 15, 1.4, this.content * 1000);
      this.drawEllipse(80, 7, 1.2, this.content * 3000);
      this.drawEllipse(65, 6, 1.1, this.content * 6000);

      push();
      fill(255, this.alpha);
      textAlign(CENTER, CENTER);
      translate(this.x, this.y);
      scale(this.scale);
      text(this.contentMap[this.content], 0, 0);
      this.scale += this.scaleIncrement;
      this.alpha -= this.alphaDecrement;
      pop();
    }
  };
}

const increaseDifficultyMessage = wins => {
  if (wins > 0 && wins % 5 === 0) {
    gameLog.level = wins / 5;

    push();
    fill(200, 40, 90);
    textSize(36);
    textAlign(CENTER, CENTER);
    translate(width / 2, height / 2);
    text(`Congratulation! You are at level ${gameLog.level}.`, 0, 0);
    pop();
  }
};
