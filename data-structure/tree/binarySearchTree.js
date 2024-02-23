class Node {
  constructor(key) {
    this.key = key;
    this.left = null;
    this.right = null;
  }
}

class binarySearchTree {
  constructor() {
    this.root = null;
    this.path = "";
    this.queue = [];
  }

  treeInsert(z) {
    let y = null;
    let x = this.root;

    while (x !== null) {
      y = x;
      if (z.key < x.key) {
        x = x.left;
      } else if (z.key > x.key) {
        x = x.right;
      }
    }

    if (y == null) {
      this.root = z;
    } else if (z.key < y.key) {
      y.left = z;
    } else if (z.key > y.key) {
      y.right = z;
    }
  }

  preOrder(n) {
    if (n !== null) {
      this.path += n.key + " ";
      this.preOrder(n.left);
      this.preOrder(n.right);
    }
  }

  inOrder(n) {
    if (n !== null) {
      this.inOrder(n.left);
      this.path += n.key + " ";
      this.inOrder(n.right);
    }
  }

  postOrder(n) {
    if (n !== null) {
      this.postOrder(n.left);
      this.postOrder(n.right);
      this.path += n.key + " ";
    }
  }

  bftt(n) {
    if (n !== null) {
      this.queue.push(n);
      for (let i = 0; i <= this.queue.length - 1; i++) {
        let currentNode = this.queue[i];
        if (currentNode !== null) {
          if (currentNode.left !== null) {
            this.queue.push(currentNode.left);
          }
          if (currentNode.right !== null) {
            this.queue.push(currentNode.right);
          }
        }
      }
    }
  }

  searchRecurisively(x, key) {
    if (x == null || key == x.key) {
      return x;
    }
    if (key < x.key) {
      return this.searchRecurisively(x.left, key);
    } else if (key > x.key) {
      return this.searchRecurisively(x.right, key);
    }
  }

  search(x, key) {
    while (x !== null && key !== x.key) {
      if (key < x.key) {
        x = x.left;
      } else if (key > x.key) {
        x = x.right;
      }
    }
    return x;
  }
}

let bst = new binarySearchTree();
bst.treeInsert(new Node(14));
bst.treeInsert(new Node(15));
bst.treeInsert(new Node(9));
bst.treeInsert(new Node(5));
bst.treeInsert(new Node(4));
bst.treeInsert(new Node(3));
bst.treeInsert(new Node(33));
bst.treeInsert(new Node(6));
bst.treeInsert(new Node(21));
bst.treeInsert(new Node(12));

// bst.preOrder(bst.root);
// console.log(bst.path);
// bst.inOrder(bst.root);
// console.log(bst.path);
// bst.postOrder(bst.root);
// bst.bftt(bst.root);
// console.log(bst.queue);

// console.log(bst.searchRecurisively(bst.root, 9));
console.log(bst.search(bst.root, 9));
