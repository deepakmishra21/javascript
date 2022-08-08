/**
 * @param {number[]} nums
 * @return {number}
 */
var firstMissingPositive = function (nums) {
  var arr = new Array(nums.length + 1).fill(0);
  for (var i = 0; i < nums.length; i++) {
    if (nums[i] > 0) {
      arr[nums[i]] = 1;
    }
  }
  for (var i = 1; i < arr.length; i++) {
    if (arr[i] == 0) {
      return i;
    }
  }
  return arr.length;
};