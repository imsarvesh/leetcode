/*
Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
You may assume that each input would have exactly one solution, and you may not use the same element twice.
You can return the answer in any order.
*/

const nums = [2, 7, 11, 15],
  target = 26;

const twoSum_solution1 = (nums, target) => {
  const hash = {};

  const len = nums.length;
  let i = 0;

  while (i < len) {
    const num = nums[i];
    const balance = target - num;
    if (hash[balance] !== undefined) {
      return [hash[balance], i];
    } else {
      hash[num] = i;
    }
    i++;
  }
};

const twoSum_solution2 = (nums, target) => {
  let hash = {};
  for (let i = 0; i < nums.length; i++) {
    const currentNum = nums[i];
    const diff = target - currentNum;
    if (diff in hash) {
      return [hash[diff], i];
    }
    hash[currentNum] = i;
  }
};

console.log(twoSum_solution1(nums, target));
console.log(twoSum_solution2(nums, target));
