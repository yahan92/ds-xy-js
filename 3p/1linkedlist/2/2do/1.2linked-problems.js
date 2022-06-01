/** INSTRUCTIONS
 *
 * create one file by program
 * implement a method, function, non-function solution
 * solve each as requested
 * may use code from previous exercises
 *
 * PROBLEM 1
 * create a linked-list with 1000-random-names
 * 'name3', 'name99', ..., 'name7'
 *
 * then look 'name7' up
 * returns true
 *
 * then look 'name3007' up
 * returns false
 *
 * use the method contains
 *
 * @see {@link https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array}
 * @see {@link https://jsdoc.app}
 */


class LinkedList {
  constructor(head = null) {
    this.head = head;
  }

  get size() {
    let count = 0;
    let node = this.head;
    while (node) {
      count++;
      node = node.next;
    }
    return count;
  }

  clear() {
    this.head = null;
  }

  contains(v) {
    let node = this.head;
    while (node != null && node.data != v) node = node.next;
    return node ? true : false;
  }

  getLast() {
    let lastNode = this.head;
    if (lastNode) {
      while (lastNode.next) {
        lastNode = lastNode.next;
      }
    }
    return lastNode;
  }

  getFirst() {
    return this.head;
  }

  prepend(n) {
    n.next = this.head;
    this.head = n;
  }

  append(n) {
    let last = this.getLast();
    if (last) last.next = n;
    else this.head = n;
  }

  traverse(v) {
    let node = this.head;
    for (let i = 1; i < v; i++) {
      node = node.next;
    }
    return node;
  }
}

class ListNode {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.list = new LinkedList();
  }

  enqueue(v) {
    this.list.append(new ListNode(v));
  }

  dequeue() {
    let first = this.list.getFirst();
    if (first) {
      this.list.head = first.next;
      return first.data;
    }
    return null;
  }

  toString() {
    let str = "";
    let node = this.list.getFirst();
    let back = this.list.getLast();
    while (node) {
      str += `${node.data}${back == node ? "." : ", "}`;
      node = node.next;
    }
    return str ? str : null;
  }

  empty() {
    this.list.clear();
  }

  get front() {
    let first = this.list.getFirst();
    return first ? first.data : null;
  }

  get back() {
    return this.list.getLast();
  }
}

class Stack {
  constructor() {
    
    this.list = new LinkedList();
  }
  push(v) {
    
    this.list.append(new ListNode(v));
  }

  pop(){
    
    if (this.list.size > 1) {
      let secondToLast = this.list.traverse(this.list.size - 1);
      let last = secondToLast.next;
      secondToLast.next = null;
      return last.data;
    } else if (this.peek()) {
      let data = this.peek();
      this.empty();
      return data;
    } else return null;
  }

  peek() {
    let last = this.list.getLast();
    return last ? last.data : null;
  }

  toString() {
    let str = "";
    let node = this.list.getFirst();
    let back = this.list.getLast();
    while (node) {
      str += `${node.data}${back == node ? "." : ", "}`;
      node = node.next;
    }
    return str ? str : null;
  }

  empty() {
    this.list.clear();
  }
}

let queue1 = new Queue();


queue1.enqueue(5);
queue1.enqueue(7);
queue1.enqueue(10);
console.log(queue1.toString());
console.log(queue1.dequeue());
console.log(queue1.dequeue());
console.log(queue1.dequeue());
console.log(queue1.toString());


let stack1 = new Stack();


stack1.push(1);
stack1.push(2);
stack1.push(3);
console.log(stack1.toString());
console.log(stack1.pop());
console.log(stack1.toString());
console.log(stack1.pop());
console.log(stack1.toString());
console.log(stack1.pop());
console.log(stack1.toString());
