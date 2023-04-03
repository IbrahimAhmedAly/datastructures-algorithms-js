function addTo80(n) {
  console.log("long time");
  return n + 80;
}

// console.log(addTo80(5));
// console.log(addTo80(5));
// console.log(addTo80(5));

// memorisation

function memoizedAddTo80() {
  let cashe = {};
  return function (n) {
    if (n in cashe) {
      return cashe[n];
    } else {
      console.log("long term");
      cashe[n] = n + 80;
      return cashe[n];
    }
  };
}

const memoized = memoizedAddTo80();

console.log(memoized(2));
console.log(memoized(2));
