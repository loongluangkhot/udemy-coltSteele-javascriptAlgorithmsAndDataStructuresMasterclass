class MaxBinaryHeap {
  constructor(arr = []) {
    this.heap = arr;
  }

  findParent(i) {
    if (i <= 0) return null;
    let parentIndex = Math.floor((i - 1) / 2);
    return { index: parentIndex, value: this.heap[parentIndex] };
  }

  findChildren(i) {
    let leftChildIndex = i * 2 + 1;
    let rightChildIndex = leftChildIndex + 1;
    let leftChild = this.heap[leftChildIndex] ? { index: leftChildIndex, value: this.heap[leftChildIndex] } : null;
    let rightChild = this.heap[rightChildIndex] ? { index: rightChildIndex, value: this.heap[rightChildIndex] } : null;
    return {
      left: leftChild,
      right: rightChild
    }
  }

  insert(val) {
    this.heap.push(val);
    let idx = this.heap.length - 1;
    while (this.findParent(idx)) {
      let parent = this.findParent(idx);
      if (val > parent.value) {
        [this.heap[idx], this.heap[parent.index]] = [this.heap[parent.index], this.heap[idx]];
        idx = parent.index;
      } else {
        break;
      }
    }
    return this.heap;
  }

  extractMax() {
    let max = this.heap[0];
    let end = this.heap.pop();
    if(this.heap.length === 0) return max;
    this.heap[0] = end;
    let idx = 0;
    while(this.findChildren(idx).left) {
      let children = this.findChildren(idx);
      let swapIndex;
      if(this.heap[idx] < children.left.value) {
        if(children.right && this.heap[idx] < children.right.value) {
          swapIndex = children.left.value >= children.right.value ? children.left.index : children.right.index;
        } else {
          swapIndex = children.left.index;
        }
      } else if(children.right && this.heap[idx] < children.right.value) {
        swapIndex = children.right.index;
      }
      if(swapIndex) {
        [this.heap[idx], this.heap[swapIndex]] = [this.heap[swapIndex], this.heap[idx]];
        idx = swapIndex;
      } else {
        break;
      }
    }
    return max;
  }
}

// let heap = new MaxBinaryHeap([41, 39, 33, 18, 27, 12]);
// console.log(heap.heap);
// heap.insert(55);
// console.log(heap.heap);
let heap = new MaxBinaryHeap([12]);
console.log(heap.extractMax());
console.log(heap.heap);

class Node {
  constructor(val, priority) {
    this.val = val;
    this.priority = priority;
  }
}

class PriorityQueue {
  constructor(arr = []) {
    this.heap = arr;
  }

  findParent(i) {
    if (i <= 0) return null;
    let parentIndex = Math.floor((i - 1) / 2);
    return { index: parentIndex, node: this.heap[parentIndex] };
  }

  findChildren(i) {
    let leftChildIndex = i * 2 + 1;
    let rightChildIndex = leftChildIndex + 1;
    let leftChild = this.heap[leftChildIndex] ? { index: leftChildIndex, node: this.heap[leftChildIndex] } : null;
    let rightChild = this.heap[rightChildIndex] ? { index: rightChildIndex, node: this.heap[rightChildIndex] } : null;
    return {
      left: leftChild,
      right: rightChild
    }
  }

  enqueue(val, priority) {
    let node = new Node(val, priority);
    this.heap.push(node);
    let idx = this.heap.length - 1;
    while (this.findParent(idx)) {
      let parent = this.findParent(idx);
      if (node.priority < parent.node.priority) {
        [this.heap[idx], this.heap[parent.index]] = [this.heap[parent.index], this.heap[idx]];
        idx = parent.index;
      } else {
        break;
      }
    }
    return this.heap;
  }

  dequeue() {
    let max = this.heap[0];
    let end = this.heap.pop();
    if(this.heap.length === 0) return max.val;
    this.heap[0] = end;
    let idx = 0;
    while(this.findChildren(idx).left) {
      let children = this.findChildren(idx);
      let swapIndex;
      if(this.heap[idx].priority > children.left.node.priority) {
        if(children.right && this.heap[idx].priority > children.right.node.priority) {
          swapIndex = children.left.node.priority <= children.right.node.priority ? children.left.index : children.right.index;
        } else {
          swapIndex = children.left.index;
        }
      } else if(children.right && this.heap[idx].priority > children.right.node.priority) {
        swapIndex = children.right.index;
      }
      if(swapIndex) {
        [this.heap[idx], this.heap[swapIndex]] = [this.heap[swapIndex], this.heap[idx]];
        idx = swapIndex;
      } else {
        break;
      }
    }
    return max.val;
  }
}

let ER = new PriorityQueue();
ER.enqueue("common cold", 5);
ER.enqueue("gunshot wound", 1);
ER.enqueue("high fever", 4);
ER.enqueue("broken arm", 2);
ER.enqueue("glass in foot", 3);
while(ER.heap[0]) console.log(ER.dequeue());