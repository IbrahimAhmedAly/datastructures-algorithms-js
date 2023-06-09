console.log("Hello Hash Table");

class HashTable {
  constructor(size) {
    this.data = new Array(size);
  }

  _hash(key) {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash = (hash + key.charCodeAt(i) * i) % this.data.length;
    }
    return hash;
  } // o(1)

  set(key, value) {
    const address = this._hash(key);
    if (!this.data[address]) {
      this.data[address] = [];
    }
    this.data[address].push([key, value]);
    return this.data;
  }

  get(key) {
    const address = this._hash(key);
    const currentBucket = this.data[address];

    for (let i = 0; i < currentBucket.length; i++) {
      if (currentBucket[i][0] === key) return currentBucket[i][1];
    }
    return undefined;
  }

  keys() {
    const keysArray = [];
    for (let i = 0; i < this.data.length; i++) {
      if (this.data[i]) {
        keysArray.push(this.data[i][0][0]);
      }
    }
    return keysArray;
  }
}

const myHashTable = new HashTable(10);
console.log(myHashTable.set("grapes", 1000));
console.log(myHashTable.set("apples", 20));
console.log(myHashTable.set("oranges", 30));
console.log(myHashTable.get("grapes"));
console.log(myHashTable.get("oranges"));
console.log(myHashTable.keys());
