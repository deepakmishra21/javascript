/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function (nums) {
  debugger;
  if (nums.length === 0) return 0;
  let dp = [1];
  for (let i = 1; i < nums.length; i++) {
    let max = 0;
    for (let j = 0; j < i; j++) {
      if (nums[i] > nums[j]) {
        max = Math.max(max, dp[j]);
      }
    }
    dp[i] = max + 1;
  }
  return Math.max(...dp);
};
console.log(lengthOfLIS([10, 9, 2, 5, 3, 7, 101, 18]));