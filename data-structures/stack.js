// Array implementation: push-pop or unshift-shift to implement LIFO behaviours
// Recall that unshift-shift operations are expensive/inefficient for array data structure

// // Initialization of stack
// let stack = [];
// // Adding to the stack: pushing/unshift to an array
// stack.push("Google");
// stack.push("Instagram");
// stack.push("Youtube");
// console.log(stack);
// // Removing from the stack: popping/shift from an array
// console.log(stack.pop());
// console.log(stack.pop());
// console.log(stack.pop());
// // Adding to the stack: pushing/unshift to an array
// stack.unshift("Google");
// stack.unshift("Instagram");
// stack.unshift("Youtube");
// console.log(stack);
// // Removing from the stack: popping/shift from an array
// console.log(stack.shift());
// console.log(stack.shift());
// console.log(stack.shift());

// Linked list implementation
// If singly-linked-list is used, push-pop is actually unshift-shift because Big-O of insertion and removal should be constant time for stacks
class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  push(val) {
    let node = new Node(val);
    if(this.size === 0) {
      this.first = node;
      this.last = node;
    } else {
      node.next = this.first;
      this.first = node;
    }
    this.size++;
    return this.size;
  }
 
  pop() {
    if(this.size === 0) {
      return null;
    } else {
      let node = this.first;
      if(this.size === 1) {
        this.first = null;
        this.last = null;
      } else {
        this.first = this.first.next;
      }
      this.size--;
      return node.val;
    }
  }
}

let stack = new Stack();
stack.push("Google");
stack.push("Instagram");
stack.push("Youtube");
console.log(stack);
console.log(stack.pop());
console.log(stack.pop());
console.log(stack.pop());