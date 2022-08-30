/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function (nums) {
  var dp = {};
  if (nums.length === 0) return 0;
  var max = 1;
  nums.forEach(element => {
    dp[element] = 1;
  });
  var count = 1;
  var currentElement = undefined;
  Object.keys(dp).sort((a, b) => a - b).forEach(element => {
    element = parseInt(element)
    if (currentElement === undefined) {
      currentElement = parseInt(element);
    }
    else {
      if (currentElement + 1 == element) {
        count++;
        currentElement = element;
      }
      else {
        count = 1;
        currentElement = element;
      }
      if (count > max) {
        max = count;
      }
    }
  });
  return max;
};