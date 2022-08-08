/**
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate = function (nums) {
  var dp = {};
  for (var i = 0; i < nums.length; i++) {
    if (dp[nums[i]]) {
      return nums[i];
    } else {
      dp[nums[i]] = 1;
    }
  }
};