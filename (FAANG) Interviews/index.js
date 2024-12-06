// #Two Sum

// [1, 3, 7, 9, 2] t=11
const twoSum = (nums, target) => {
  for (let i = 0; i < nums.length; i++) {
    let numsToFind = target - nums[i];
    for (let j = 1; j < nums.length; j++) {
      if (numsToFind === nums[j]) return [i, j];
    }
  }
  return null;
};

console.log(twoSum([1, 3, 7, 9, 2], 11));
// console.log(twoSum([], 11));
