class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class SinglyLinkedList {

  constructor() {
    this.length = 0;
    this.head = null;
    this.tail = null;
  }

  push(val) {
    let newNode = new Node(val);
    if(this.length === 0) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }

  pop() {
    if(this.length === 0) {
      return undefined;
    } else {
      let current = this.head;
      let newTail = current;
      while(current.next !== null) {
        newTail = current;
        current = current.next;
      }
      this.tail = newTail;
      this.tail.next = null;
      this.length--;
      if(this.length === 0) {
        this.head = null;
        this.tail = null;
      }
      return current;
    }
  }

  shift() {
    if(this.length === 0) {
      return undefined;
    } else {
      let currentHead = this.head;
      this.head = currentHead.next;
      this.length--;
      if(this.length === 0) {
        this.tail = null;
      }
      return currentHead;
    }
  }

  unshift(val) {
    let newNode = new Node(val);
    if(this.length === 0) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
    return this;
  }

  get(index) {
    if(index < 0 || index >= this.length) {
      return null;
    } else {
      let current = this.head;
      for(let i = 0; i < index; i++) {
        current = current.next;
      }
      return current;
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
        let prev = this.get(index - 1);
        let current = prev.next;
        prev.next = newNode;
        newNode.next = current;
        this.length++;
      }
      return true;
    }
  }

  remove(index) {
    if(index < 0 || index > this.length) {
      return undefined;
    } else {
      if(index === 0) {
        return this.shift();
      } else if(index === this.length - 1) {
        return this.pop();
      } else {
        let prev = this.get(index - 1);
        let current = prev.next;
        let next = current.next;
        prev.next = next;
        this.length--;
        return current;
      }
    }
  }

  reverse() {
    let node = this.head;
    this.head = this.tail;
    this.tail = node;
    let next = null;
    let prev = null;
    for(let i = 0; i < this.length; i++) {
      next = node.next;
      node.next = prev;
      prev = node;
      node = next;
    }
    return this;
  }
}

let lst = new SinglyLinkedList;
lst.push(1);
lst.push(2);
lst.push(3);
console.log(lst);
console.log(lst.reverse());
