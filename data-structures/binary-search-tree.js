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


}

// Colt's code
// class BinarySearchTree {
//   constructor() {
//     this.root = null;
//     this.size = 0;
//   }
  
//   push(val) {
//     let newNode = new Node(val);
//     if(this.root === null) {
//       this.root = newNode;
//     } else {
//       let node = this.root;
//       let notLeaf = true;
//       while(notLeaf) {
//         if(val < node.val) {
//           if(node.l !== null) {
//             node = node.l;
//           } else {
//             node.l = newNode;
//             notLeaf = false;
//           }
//         } else if(val > node.val) {
//           if(node.r !== null) {
//             node = node.r;
//           } else {
//             node.r = newNode;
//             notLeaf = false;
//           }
//         } else {
//           return undefined;
//         }
//       } 
//     }
//     return this;
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