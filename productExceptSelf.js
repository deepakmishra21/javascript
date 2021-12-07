var productExceptSelf = function (nums) {
  let out = [];
  let len = nums.length;
  let left = [nums[0]];
  let right = [];
  right[len - 1] = nums[len - 1];

  for (let index = 1; index < len; index++) {
    left[index] = nums[index] * left[index - 1];
  }
  for (let index = len - 2; index > -1; index--) {
    right[index] = nums[index] * right[index + 1];
  }
  for (let index = 1; index < len - 1; index++) {
    out[index] = left[index - 1] * right[index + 1];
  }
  out[0] = right[1];
  out[len - 1] = left[len - 2];
  return out;

};
productExceptSelf([-1, 1, 0, -3, 3])