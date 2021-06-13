// Animation made at https://www.khanacademy.org/partner-content/pixar/pixar-rigging/intro-to-rigging/a/animate-a-rigged-character

frameRate(24);
var shapes = [
  {
    name: "base",
    origin: [130, 350],
    fill: -1972501,
    stroke: -3618616,
    vertices: [
      [66, 350],
      [194, 350],
      [190, 335],
      [138, 335],
      [138, 320],
      [122, 320],
      [122, 335],
      [70, 335],
    ],
  },
  {
    name: "arm1",
    origin: [130, 328],
    fill: -1972501,
    stroke: -3618616,
    vertices: [
      [130, 337],
      [140, 327],
      [60, 247],
      [50, 257],
    ],
  },
  {
    name: "arm2",
    origin: [60, 257],
    fill: -1972501,
    stroke: -3618616,
    vertices: [
      [50, 257],
      [60, 267],
      [140, 187],
      [130, 177],
    ],
  },
  {
    name: "head",
    origin: [127, 194],
    fill: -1972501,
    stroke: -3618616,
    vertices: [
      [150, 197],
      [130, 177],
      [110, 197],
      [130, 217],
      [150, 277],
      [210, 217],
    ],
  },
];
var connections = ["base->arm1", "arm1->arm2->head"];
var deformers = [
  "rotate->base",
  "rotate->arm1",
  "rotate->arm2",
  "rotate->head",
  "translateX->base",
  "translateY->base",
  "scale->head",
];
var n = 47;

var avars = [
  [
    0,
    0.82,
    1.61,
    2.15,
    2.66,
    3.16,
    3.53,
    3.98,
    4.33,
    4.65,
    4.95,
    5.17,
    5.44,
    5.69,
    5.87,
    6.08,
    6.23,
    6.36,
    6.52,
    6.63,
    6.72,
    6.81,
    6.87,
    6.91,
    6.94,
    6.96,
    6.95,
    6.92,
    6.88,
    6.8,
    6.73,
    6.63,
    6.48,
    6.34,
    6.13,
    5.95,
    5.68,
    5.38,
    5.04,
    4.67,
    4.27,
    3.82,
    3.34,
    2.69,
    1.97,
    1.03,
    0,
  ],
  [
    0,
    -15.92,
    -28.63,
    -36.91,
    -43.25,
    -47.77,
    -50.16,
    -51.73,
    -51.93,
    -51.26,
    -50.23,
    -48.21,
    -45.51,
    -42.19,
    -39.34,
    -35.11,
    -31.64,
    -27.96,
    -22.77,
    -18.7,
    -13.08,
    -8.77,
    -4.4,
    1.47,
    5.86,
    10.21,
    15.91,
    20.07,
    24.09,
    29.21,
    32.82,
    37.28,
    40.32,
    43.93,
    46.25,
    48.79,
    50.63,
    51.51,
    51.96,
    51.53,
    49.66,
    47.01,
    43.25,
    36.91,
    28.63,
    15.92,
    0,
  ],
  [
    0,
    9.72,
    15.65,
    19.54,
    21.36,
    21.95,
    21.69,
    20.74,
    19.21,
    17.13,
    14.56,
    12.34,
    9.03,
    5.37,
    2.43,
    -0.66,
    -4.97,
    -8.31,
    -11.73,
    -16.37,
    -19.87,
    -23.38,
    -26.86,
    -31.44,
    -34.79,
    -38.05,
    -41.19,
    -45.17,
    -47.96,
    -50.56,
    -53.7,
    -55.77,
    -57.59,
    -59.57,
    -60.7,
    -61.68,
    -62.01,
    -61.81,
    -60.89,
    -59.19,
    -56.65,
    -52.22,
    -47.61,
    -40.43,
    -31.57,
    -18.6,
    0,
  ],
  [
    0,
    -9.74,
    -19.18,
    -28.31,
    -35.36,
    -43.86,
    -50.38,
    -56.65,
    -62.66,
    -68.39,
    -73.84,
    -78.99,
    -82.65,
    -87.26,
    -91.54,
    -94.52,
    -98.21,
    -101.53,
    -103.78,
    -106.46,
    -108.21,
    -110.2,
    -111.43,
    -112.71,
    -113.38,
    -113.91,
    -114.01,
    -113.76,
    -113.26,
    -112.19,
    -110.63,
    -109.14,
    -106.72,
    -103.78,
    -101.24,
    -97.38,
    -92.98,
    -88.04,
    -82.52,
    -76.44,
    -69.77,
    -60.59,
    -52.56,
    -41.66,
    -29.76,
    -16.85,
    0,
  ],
  [
    0,
    -6.86,
    -9.52,
    -9.62,
    -7.37,
    -2.99,
    1.91,
    7.92,
    14.94,
    22.86,
    31.57,
    40.96,
    48.38,
    58.7,
    69.39,
    77.59,
    88.69,
    97.07,
    108.22,
    116.53,
    127.41,
    135.39,
    143.14,
    153.06,
    160.13,
    168.96,
    175.09,
    180.74,
    187.45,
    191.8,
    196.6,
    199.4,
    201.98,
    202.97,
    202.98,
    201.37,
    198.02,
    192.84,
    185.72,
    176.54,
    165.19,
    151.56,
    131.17,
    106.83,
    78.35,
    45.49,
    0,
  ],
  [
    0,
    0.99,
    2.66,
    5.03,
    8.02,
    10.81,
    14.75,
    18.2,
    21.9,
    25.79,
    29.85,
    32.97,
    37.23,
    41.55,
    44.81,
    49.15,
    52.39,
    56.65,
    59.78,
    63.84,
    66.78,
    69.61,
    73.2,
    75.72,
    78.84,
    80.98,
    82.92,
    85.18,
    86.61,
    88.13,
    88.97,
    89.64,
    89.8,
    89.52,
    88.92,
    87.57,
    85.56,
    82.85,
    79.41,
    75.2,
    70.18,
    64.33,
    55.76,
    45.76,
    34.24,
    18.32,
    0,
  ],
  [
    1,
    1.14,
    1.27,
    1.37,
    1.47,
    1.58,
    1.67,
    1.75,
    1.82,
    1.89,
    1.94,
    2,
    2.06,
    2.09,
    2.14,
    2.17,
    2.21,
    2.24,
    2.27,
    2.29,
    2.31,
    2.32,
    2.33,
    2.34,
    2.34,
    2.34,
    2.33,
    2.32,
    2.31,
    2.3,
    2.27,
    2.24,
    2.22,
    2.18,
    2.14,
    2.09,
    2.04,
    1.98,
    1.92,
    1.85,
    1.75,
    1.67,
    1.57,
    1.45,
    1.33,
    1.17,
    1,
  ],
];
var deformerData = {
  translateX: {
    min: -500,
    max: 500,
    transform: function (coord, origin, value) {
      coord.x += value;
    },
  },
  translateY: {
    min: -200,
    max: 200,
    transform: function (coord, origin, value) {
      coord.y -= value;
    },
  },
  scale: {
    min: 0.2,
    max: 3,
    value: 1,
    transform: function (coord, origin, value) {
      coord.x = (coord.x - origin.x) * value + origin.x;
      coord.y = (coord.y - origin.y) * value + origin.y;
    },
  },
  rotate: {
    min: -180,
    max: 180,
    transform: function (coord, origin, value) {
      var cosAngle = cos(value);
      var sinAngle = sin(value);
      var x = coord.x - origin.x;
      var y = coord.y - origin.y;
      coord.x = origin.x + x * cosAngle - y * sinAngle;
      coord.y = origin.y + x * sinAngle + y * cosAngle;
    },
  },
};

var drawBackground = function (x, y, w, h) {
  noStroke();
  fill(82, 115, 173);
  rect(x, y, w, h - 75);
  fill(184, 134, 40);
  rect(x, y + h - 75, w, 75);
};

var drawCircle = function () {
  var r = dist(
    this.finalCoords[0].x,
    this.finalCoords[0].y,
    this.finalCoords[1].x,
    this.finalCoords[1].y
  );
  ellipse(this.finalCoords[0].x, this.finalCoords[0].y, r, r);
};
var Shape = function (data, name) {
  if (data.origin) {
    this.originalOrigin = new PVector(data.origin[0], data.origin[1]);
  }
  if (data.radius && data.center) {
    var center = data.center;
    data.vertices = [center, [center[0] + data.radius, center[1]]];
    data.drawShape = drawCircle;
  }
  this.originalCoords = data.vertices || [];
  this.fillColor = data.fill;
  this.strokeColor = data.stroke;
  this.strokeWeight = data.strokeWeight || 1;
  this.subdivide = constrain(data.subdivide | 0, 0, 4);
  if (data.drawShape) {
    this.drawShape = data.drawShape.bind(this);
  }
  this.dependentShapes = [];
  this.resetCoords();
  this.updateCurvePoints();
};
Shape.prototype.resetCoords = function () {
  this.finalCoords = this.originalCoords.map(function (coord) {
    return new PVector(coord[0], coord[1]);
  });
  if (this.originalOrigin) {
    this.origin = this.originalOrigin.get();
  }
};
Shape.prototype.transform = function (transform, origin, value) {
  for (var i = 0; i < this.finalCoords.length; i++) {
    transform(this.finalCoords[i], origin, value);
  }
  this.updateCurvePoints();
  this.dependentShapes.forEach(function (shape) {
    transform(shape.origin, origin, value);
    shape.transform(transform, origin, value);
  });
};
Shape.prototype.draw = function () {
  if (this.fillColor || this.drawShape) {
    noStroke();
    fill(0, 0, 0, 50);
    pushMatrix();
    translate(2, 3);
    this.drawShape(true);
    popMatrix();
    fill(this.fillColor);
  } else {
    noFill();
  }
  if (this.strokeColor) {
    strokeWeight(this.strokeWeight);
    stroke(this.strokeColor);
  } else {
    noStroke();
  }
  this.drawShape();
};
Shape.prototype.drawShape = function () {
  beginShape();
  this.curvePoints.forEach(function (p) {
    vertex(p.x, p.y);
  });
  endShape(CLOSE);
};
Shape.prototype.updateCurvePoints = function () {
  if (!this.subdivide) {
    this.curvePoints = this.finalCoords;
  } else {
    var q = pow(2, this.subdivide);
    var q2 = q * q;
    var n = this.finalCoords.length;
    var p1, p2, p3, a, b, c, s, t, x, y;
    this.curvePoints = [];
    for (var i = 0; i < n; i++) {
      p1 = this.finalCoords[(i + n - 1) % n];
      p2 = this.finalCoords[i];
      p3 = this.finalCoords[(i + 1) % n];
      for (t = 0; t < q; t++) {
        s = q - t - 1;
        a = (s * s + s) >> 1;
        c = (t * t + t) >> 1;
        b = q2 - a - c;
        x = (p1.x * a + p2.x * b + p3.x * c) / q2;
        y = (p1.y * a + p2.y * b + p3.y * c) / q2;
        this.curvePoints.push({ x: x, y: y });
      }
    }
  }
};
var Model = function (shapes, connections, deformers) {
  this.shapes = {};
  this.deformers = [];
  this.id = 0;
  if (shapes) {
    for (var i = 0; i < shapes.length; i++) {
      var shape = shapes[i];
      if (!shape) {
        continue;
      }
      var name = shape.name || "shape" + this.id++;
      this.shapes[name] = new Shape(shape, name);
    }
  }
  var splitRE = new RegExp("\\s*->\\s*");
  if (connections) {
    for (var i = 0; i < connections.length; i++) {
      var shapes = connections[i].split(splitRE);
      for (var j = 0; j < shapes.length - 1; j++) {
        this.shapes[shapes[j]].dependentShapes.push(this.shapes[shapes[j + 1]]);
      }
    }
  }
  if (deformers) {
    for (var i = 0; i < deformers.length; i++) {
      var d = deformers[i].split(splitRE);
      this.deformers.push([
        this.shapes[d[1]],
        deformerData[d[0]].transform,
        avars[i],
      ]);
    }
  }
};

var model = new Model(shapes, connections, deformers);
var t = 0;

draw = function () {
  t = (t + 1) % n;
  for (var shape in model.shapes) {
    model.shapes[shape].resetCoords();
  }
  model.deformers.forEach(function (d) {
    d[0].transform(d[1], d[0].origin, d[2][t]);
  });
  background(0);
  drawBackground(0, 50, 400, 300);
  pushMatrix();
  translate(0, 50);
  scale(0.75, 0.75);
  for (var shape in model.shapes) {
    model.shapes[shape].draw();
  }
  popMatrix();
};
