// Write two functions that finds the factorial of any number. One should use recursive, the other should just use a for loop

function findFactorialRecursive(number) {
  //code here
  if (number < 2) return 1;
  if (number === 2) return 2;

  return number * findFactorialRecursive(number - 1);
}
console.log(findFactorialRecursive(6));

function findFactorialIterative(number) {
  let answer = 1;
  if (number === 2) return (answer = 2);

  for (let i = 2; i <= number; i++) {
    answer *= i;
  }
  return answer;
}
console.log(findFactorialIterative(5));
