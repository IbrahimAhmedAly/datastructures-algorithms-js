class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
  constructor(value) {
    this.head = {
      value: value,
      next: null,
      prev: null,
    };
    (this.tail = this.head), (this.length = 1);
  }

  append(value) {
    const newNode = new Node(value);
    newNode.prev = this.tail;
    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
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

  prepend(value) {
    const newNode = new Node(value);
    newNode.next = this.head;
    this.head.prev = newNode;
    this.head = newNode;
    this.length++;
  }

  insert(index, value) {
    //Check for proper parameters;
    if (index >= this.length) {
      return this.append(value);
    }

    const newNode = new Node(value);

    const leader = this.traverseToIndex(index - 1);
    const follower = leader.next;
    leader.next = newNode;
    newNode.prev = leader;
    newNode.next = follower;
    follower.prev = newNode;
    this.length++;
  }

  traverseToIndex(index) {
    //Check parameters
    let counter = 0;
    let currentNode = this.head;
    while (counter !== index) {
      currentNode = currentNode.next;
      counter++;
    }
    return currentNode;
  }

  //   remove(index) {
  //     // check params
  //     const leader = this.traverseToIndex(index - 1);
  //     const unWantedNode = leader.next;
  //     leader.next = unWantedNode.next;
  //     this.length--;
  //   }
}

const MyDoublyLinkedList = new DoublyLinkedList(10);
MyDoublyLinkedList.append(5);
MyDoublyLinkedList.append(16);
MyDoublyLinkedList.prepend(1);
MyDoublyLinkedList.insert(2, 99);
MyDoublyLinkedList.insert(4, 19);
// MyDoublyLinkedList.remove(1);
console.log(MyDoublyLinkedList.printList());
console.log(MyDoublyLinkedList);
