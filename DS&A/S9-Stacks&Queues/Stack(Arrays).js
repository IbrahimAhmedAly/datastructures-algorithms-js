class Stack {
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
    return this.array.pop();
  }
}

const myStack = new Stack();
myStack.push("google");
myStack.push("udemy");
myStack.push("youtube");
console.log(myStack.peek());
console.log(myStack.pop());
console.log(myStack.pop());
console.log(myStack.pop());

console.log(myStack);
