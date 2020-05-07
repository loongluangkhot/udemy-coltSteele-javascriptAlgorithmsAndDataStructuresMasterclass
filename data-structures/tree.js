class Node {
  constructor(val) {
    this.val = val;
    this.l = null;
    this.r = null;
  }
}

// My code
class BinarySearchTree {
  constructor() {
    this.root = null;
    this.size = 0;
  }
  
  push(val) {
    let newNode = new Node(val);
    if(this.root === null) {
      this.root = newNode;
    } else {
      let node = this.root;
      let notLeaf = true;
      while(notLeaf) {
        if(val < node.val) {
          if(node.l !== null) {
            node = node.l;
          } else {
            node.l = newNode;
            notLeaf = false;
          }
        } else if(val > node.val) {
          if(node.r !== null) {
            node = node.r;
          } else {
            node.r = newNode;
            notLeaf = false;
          }
        } else {
          return undefined;
        }
      } 
    }
    return this;
  }

  find(val) {
    let node = this.root;
    while(node) {
      if(val === node.val) {
        return node;
      } else if(val < node.val) {
        node = node.l;
      } else {
        node = node.r;
      }
    }
    return null;
  }

  bfs() {
    let queue = [this.root];
    let visited = []
    while(queue) {
      let currentNode = queue.shift();
      if(currentNode.left) queue.push(currentNode.left);
      if(currentNode.right) queue.push(currentNode.right);
      visited.push(currentNode);
    }
    return visited;
  }

  dfsPreOrder() {
    let visited = [];
    const helperFunction = (node) => {
      visited.push(node);
      if(node.lefth) helperFunction(node.left);
      if(node.right) helperFunction(node.right);
    }
    helperFunction(this.root);
    return visited;
  }

  dfsPostOrder() {
    let visited = [];
    const helperFunction = (node) => {
      if(node.lefth) helperFunction(node.left);
      if(node.right) helperFunction(node.right);
      visited.push(node);
    }
    helperFunction(this.root);
    return visited;
  }

  dfsInOrder() {
    let visited = [];
    const helperFunction = (node) => {
      if(node.lefth) helperFunction(node.left);
      visited.push(node);
      if(node.right) helperFunction(node.right);
    }
    helperFunction(this.root);
    return visited;
  }

}

// Colt's code
// class Node {
//   constructor(value) {
//     this.value = value;
//     this.left = null;
//     this.right = null;
//   }
// }

// class BinarySearchTree {
//   constructor() {
//     this.root = null;
//   }

//   insert(value) {
//     var newNode = new Node(value);
//     if (this.root === null) {
//       this.root = newNode;
//       return this;
//     }
//     var current = this.root;
//     while (true) {
//       if (value === current.value) return undefined;
//       if (value < current.value) {
//         if (current.left === null) {
//           current.left = newNode;
//           return this;
//         }
//         current = current.left;
//       } else {
//         if (current.right === null) {
//           current.right = newNode;
//           return this;
//         }
//         current = current.right;
//       }
//     }
//   }

//   find(value) {
//     if (this.root === null) return false;
//     var current = this.root,
//       found = false;
//     while (current && !found) {
//       if (value < current.value) {
//         current = current.left;
//       } else if (value > current.value) {
//         current = current.right;
//       } else {
//         found = true;
//       }
//     }
//     if (!found) return undefined;
//     return current;
//   }
// }

let tree = new BinarySearchTree();
tree.push(1);
tree.push(2);
tree.push(0);
tree.push(0);
tree.push(3);
console.log(tree);
console.log("=====");
console.log(tree.find(6));