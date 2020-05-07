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
        if(children.right && this.heap[idx] < children.left.value && this.heap[idx] < children.right.value) {
          swapIndex = children.left.value <= children.right.value ? children.left.index : children.right.index;
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