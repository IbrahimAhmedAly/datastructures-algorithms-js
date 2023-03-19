// const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];
const numbers = [9, 5, 1, 4, 3];

function insertionSort(array) {
  for (let i = 1; i < array.length; i++) {
    let current = array[i];

    let j = i - 1;
    while (j >= 0 && array[j] > current) {
      array[j + 1] = array[j];
      j--;
    }
    array[j + 1] = current;
  }

  return array;
}

insertionSort(numbers);
console.log(numbers);
