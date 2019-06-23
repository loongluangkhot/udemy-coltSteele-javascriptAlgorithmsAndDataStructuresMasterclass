class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
    this.prev =null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  push(val) {
    let node = new Node(val);
    if(this.length === 0) {
      this.head = node;
      this.tail = node;
    } else {
      this.tail.next = node;
      node.prev = this.tail;
      this.tail = node;
    }
    this.length++;
    return this;
  }

  pop() {
    if(this.length === 0) {
      return undefined;
    } else {
      let currentTail = this.tail;
      if(this.length === 1) {
        this.head = null;
        this.tail = null;
      } else {
        let newTail = currentTail.prev;
        this.tail = newTail;
        this.tail.next = null;
        currentTail.prev = null;
      }
      this.length--;
      return currentTail;
    }
  }

  shift() {
    if(this.length === 0) {
      return undefined;
    } else {
      let currentHead = this.head;
      if(this.length === 1) {
        this.head = null;
        this.tail = null;
      } else {
        let newHead = currentHead.next;
        this.head = newHead;
        this.head.prev = null;
        currentHead.next = null;
      }
      this.length--;
      return currentHead;
    }
  }

  unshift(val) {
    let node = new Node(val);
    if(this.length === 0) {
      this.head = node;
      this.tail = node;
    } else {
      this.head.prev = node;
      node.next = this.head;
      this.head = node;
    }
    this.length++;
    return this;
  }

  get(index) {
    if(index < 0 || index >= this.length) {
      return null;
    } else {
      let node = this.head;
      if(index < this.length / 2) {
        node = this.head;
        for(let i = 0; i < index; i++) {
          node = node.next;
        }
      } else {
        node = this.tail;
        for(let i = 0; i < (this.length - 1) - index; i++) {
          node = node.tail;
        }
      }
      return node;
    }
  }

  set(index, val) {
    let foundNode = this.get(index);
    if(foundNode != null) {
      foundNode.val = val;
      return true;
    }
    return false;
  }
  
  insert(index, val) {
    if(index < 0 || index > this.length) {
      return false;
    } else {
      if(index === 0) {
        this.unshift(val);
      } else if(index === this.length) {
        this.push(val);
      } else {
        let newNode = new Node(val);
        let currentNode = this.get(index);
        newNode.prev = currentNode.prev;
        newNode.next = currentNode;
        currentNode.prev.next = newNode;
        currentNode.prev = newNode;
        this.length++;
      }
      return true;
    }
  }

  remove(index) {
    if(index < 0 || index >= this.length) {
      return undefined;
    } else {
      if(index === 0) {
        return this.shift();
      } else if(index === this.length - 1) {
        return this.pop();
      } else {
        let node = this.get(index);
        let beforeNode = node.prev;
        let afterNode = node.next;
        beforeNode.next = afterNode;
        afterNode.prev = beforeNode;
        node.next = null;
        node.prev = null;
        this.length--;
        return node;
      }
    }
  }

  // Util fn to print out in arr form for debugging
  print() {
    let arrForward = [];
    let arrBackward = [];
    let nodeForward = this.head;
    let nodeBackward = this.tail;
    for(let i = 0; i < this.length; i++) {
      arrForward.push(nodeForward.val);
      arrBackward.push(nodeBackward.val);
      nodeForward = nodeForward.next;
      nodeBackward = nodeBackward.prev;
    }
    console.log(arrForward, arrBackward, this.length);
  }
}

let lst = new DoublyLinkedList;
lst.push(1);
lst.push(2);
lst.push(3);
lst.insert(0,999);
lst.print();
lst.remove(1);
lst.print();
