// Array implementation: push-shift or unshift-pop to implement FIFO behaviours

// // Initialization
// let queue = [];
// // Enqueueing: push/unshift
// queue.push("Google");
// queue.push("Instagram");
// queue.push("Youtube");
// console.log(queue);
// // Dequeueing: shift/pop
// console.log(queue.shift());
// console.log(queue.shift());
// console.log(queue.shift());

// Linked list implementation

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  enqueue(val) {
    let node = new Node(val);
    if(this.size === 0) {
      this.first = node;
      this.last = node;
    } else {
      this.last.next = node;
      this.last = node;
    }
    this.size++;
    return this.size;
  }
 
  dequeue() {
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

// Initialization
let queue = new Queue();
// Enqueueing: push/unshift
queue.enqueue("Google");
queue.enqueue("Instagram");
queue.enqueue("Youtube");
console.log(queue);
// Dequeueing: shift/pop
console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue.dequeue());