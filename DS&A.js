// LINKED LISTS
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor(value) {
    this.head = {
      value,
      next: null,
    };
    this.tail = this.head;
    this.length = 1;
  }

  append(value) {
    const newNode = new Node(value);
    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
  }

  prepend(value) {
    const newNode = new Node(value);
    newNode.next = this.head;
    this.head = newNode;
    this.length++;
  }

  insert(index, value) {
    // Check params
    if (index > this.length) {
      return this.append(value);
    }

    const newNode = new Node(value);

    const leader = this.traverseToIndex(index - 1);
    const holdingPointer = leader.next;
    leader.next = newNode;
    newNode.next = holdingPointer;
    this.length++;
  }

  traverseToIndex(index) {
    let counter = 0;
    let currentNode = this.head;

    while (counter !== index) {
      currentNode = currentNode.next;
      counter++;
    }
    return currentNode;
  }

  printList() {
    const array = [];
    let currentNode = this.head;
    while (currentNode !== null) {
      array.push(currentNode.value);
      currentNode = currentNode.next;
    }
    return array;
  }

  remove(index) {
    const leader = this.traverseToIndex(index - 1);
    const unWantedNode = leader.next;
    leader.next = unWantedNode.next;
    this.length--;
  }

  reverse() {
    if (!this.head.next) return this.head;

    this.tail = this.head;
    let first = this.head;
    let second = first.next;

    while (second) {
      const temp = second.next;
      second.next = first;
      first = second;
      second = temp;
    }
    this.head.next = null;
    this.head = first;
  }
}

// const MyLinkedList = new LinkedList(10);
// MyLinkedList.append(20);
// MyLinkedList.append(30);
// MyLinkedList.prepend(99);

// MyLinkedList.insert(2, 990);
// MyLinkedList.insert(2, 980);
// MyLinkedList.remove(2);
// MyLinkedList.remove(4);
// MyLinkedList.reverse();

// console.log(MyLinkedList.printList());
// console.log(MyLinkedList);
//////////////////////////////////////////////////////////////

// STACKS & QUEUES
class StackLinkedList {
  constructor() {
    this.top = null;
    this.bottom = null;
    this.length = 0;
  }

  peek() {
    return this.top;
  }

  push(value) {
    const newNode = new Node(value);
    if (this.length === 0) {
      this.top = newNode;
      this.bottom = newNode;
    } else {
      const holdingPointer = this.top;
      this.top = newNode;
      this.top.next = holdingPointer;
    }
    this.length++;
  }

  pop() {
    if (!this.top) return null;

    if (this.top === this.bottom) this.bottom = null;

    const holdingPointer = this.top;
    this.top = this.top.next;
    this.length--;
    return holdingPointer;
  }
}

// const myStack = new StackLinkedList();
// myStack.push("google");
// myStack.push("udemy");
// myStack.push("youtube");
// console.log(myStack.peek());
// console.log(myStack.pop());
// console.log(myStack);

class StackArray {
  constructor() {
    this.array = [];
  }

  peek() {
    return this.array[this.array.length - 1];
  }

  push(value) {
    this.array.push(value);
  }

  pop() {
    if (!this.array.length) return null;
    this.array.pop();
  }
}

const myStack = new StackArray();
myStack.push("google");
myStack.push("udemy");
myStack.peek();
// console.log(myStack.pop());
// console.log(myStack);

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.length = 0;
  }

  peek() {
    return this.first;
  }

  enqueue(value) {
    const newNode = new Node(value);
    if (this.length === 0) {
      this.first = newNode;
      this.last = newNode;
    } else {
      this.last.next = newNode;
      this.last = newNode;
    }
    this.length++;
  }

  dequeue() {
    if (!this.first) return null;

    if (this.first === this.last) this.last = null;

    this.first = this.first.next;
    this.length--;
  }
}
const myQueue = new Queue();
myQueue.enqueue("Joy");
myQueue.enqueue("Matt");
myQueue.enqueue("Pavel");
myQueue.dequeue();
myQueue.dequeue();
// console.log(myQueue);
////////////////////////////
