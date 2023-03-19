// Create a function that reverse a string

// My solution
function reverse1(str) {
  const arr = str.split("");

  let result = "";
  for (let i = arr.length - 1; i >= 0; i--) {
    result += arr[i];
  }
  return result;
}

// console.log(reverse1("Hi My name is Andrei"));

function reverse2(str) {
  if (!str || str.length < 2 || typeof str !== "string")
    return "hmm that is not good";

  const backwards = [];
  const totalItems = str.length - 1;
  for (let i = totalItems; i >= 0; i--) {
    backwards.push(str[i]);
  }

  return backwards.join("");
}

// console.log(reverse2("Hi My name is Andrei"));

// More cleaner way
function reverse3(str) {
  return str.split("").reverse().join("");
}

// console.log(reverse3("Hi My name is Andrei"));
