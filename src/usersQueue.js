class _Node {
    constructor(value, next = null, previous = null) {
      this.value = value;
      this.next = next;
      this.previous = previous;
    }
  }
  
  class Queue {
    constructor() {
      this.first = null;
      this.last = null;
    }
  
    enqueue(data) {
      const node = new _Node(data, null, null);
      if (this.first === null) {
        this.first = node;
      }
      if (this.last) {
        this.last.next = node;
        node.previous = this.last;
      }
      this.last = node;
    }
  
    dequeue() {
      if (this.first === null) {
        return;
      }
      const node = this.first;
      this.first = this.first.next;
      if (this.first !== null) {
        this.first.previous = null;
      }
      if (node === this.last) {
        this.last = null;
      }
      return node.value;
    }
  }

export default Queue; 