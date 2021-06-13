const treeObject = {
  value: "1,923,280",
  title: "total",
  left: {
    value: "563,473",
    title: "closed",
    left: {
      value: "119,587",
      title: "deaths",
    },
    right: {
      value: "443,886",
      title: "recovered",
    },
  },
  right: {
    value: "1,359,807",
    title: "active",
    left: {
      title: "mild",
      value: "1,308,059",
    },
    right: {
      value: "51,748",
      title: "serious",
    },
  },
};

export const createTree = (p5) => {
  const tree = new Tree(p5, treeObject);
  tree.createTree();
  tree.renderTree();
};

const Tree = function (p5, obj) {
  this.x = p5.width / 2;
  this.y = p5.height / 2;
  this.treeRoot = null;

  this.createTree = () => {
    const root = addTreeNode(obj, null, p5);
    this.treeRoot = root;
  };

  this.renderTree = () => {
    inorder(p5, this.treeRoot, { x: this.x, y: this.y });
  };
};

const addTreeNode = (obj, node, p5) => {
  if (node == null) {
    node = new TreeNode(p5, obj.value);
  }

  if (obj.left) {
    node.left = addTreeNode(obj.left, node.left, p5);
  }

  if (obj.right) {
    node.right = addTreeNode(obj.right, node.right, p5);
  }

  return node;
};

const inorder = (p5, node, { x, y }) => {
  if (node === null || node === undefined) {
    return;
  }

  if (node.treeGraph) {
    const graph = new TreeNodeGraph(p5);
    graph.render();
  } else {
    node.render({ x, y });
  }

  inorder(p5, node.left, { x: x + node.width * 2, y: y + 30 });

  inorder(p5, node.right, { x: x + node.width * 2, y: y - 30 });
};

const TreeNode = function (p5, value, scale = 0.5) {
  this.width = 100 * scale;
  this.value = value;

  this.render = ({ x, y }) => {
    // p5.background(255);
    p5.push();
    p5.noFill();
    p5.translate(x, y);
    p5.line(0, 0, this.width, 0);
    p5.ellipse(0, 0, 5, 5);
    p5.pop();

    p5.push();
    p5.translate(x + 10, y - 20);
    p5.textAlign(p5.CENTER, p5.CENTER);
    p5.text(this.value, 0, 0);
    p5.pop();

    p5.push();
    p5.translate(x + this.width, y);

    if (this.left) {
      let x1 = this.width,
        x2 = 10,
        x3 = 50,
        x4 = 0;
      let y1 = -30,
        y2 = -30,
        y3 = 0,
        y4 = 0;

      p5.bezier(x1, y1, x2, y2, x3, y3, x4, y4);
    }
    if (this.right) {
      let x1 = this.width,
        x2 = 5,
        x3 = 50,
        x4 = 0;

      let y1 = 30,
        y2 = 30,
        y3 = 0,
        y4 = 0;

      p5.bezier(x1, y1, x2, y2, x3, y3, x4, y4);
    }

    p5.fill(255);
    p5.pop();
  };
};

const TreeNodeGraph = function (p5) {
  this.render = () => {
    p5.push();
    p5.translate(p5.width / 2, p5.height / 2);
    pop();
  };
};
