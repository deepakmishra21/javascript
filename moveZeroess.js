/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
  let n = nums.length;
  let count = -1;
  for (let i = 0; i < n; i++)
    if (nums[i] != 0) {
      count++;
      nums[count] = nums[i];
    }

  while (count < n - 1) {
    count++
    nums[count] = 0;
  }
};