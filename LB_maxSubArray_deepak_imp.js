/**
 * @param {number[]} nums
 * @return {number}
 */
//max sum sub array
var maxSubArray = function (nums) {
  let max_sum = 0;
  let max_so_far = null;
  nums.forEach(element => {
    if (element <= max_sum + element) {
      max_sum = max_sum + element;
    }
    else {
      max_sum = element;
    }
    if (max_so_far == null || max_sum > max_so_far) {
      max_so_far = max_sum;
    }
  });
  return max_so_far;
};
document.write(maxSubArray([-1, 0, -2]));