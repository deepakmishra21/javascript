var minSubArrayLen = function (target, nums) {
  let minSize = 0;
  for (let index = 0; index < nums.length; index++) {
    let sum = nums[index];
    var count = 1;
    if (target == sum) {
      minSize = 1;
      break;
    }
    if (sum < target) {
      for (let index2 = index + 1; index2 < nums.length; index2++) {
        sum = sum + nums[index2];
        count++;
        if (target == sum) {
          if (minSize == 0 || minSize > count) {
            minSize = count;
          }
          break;
        }
        else if (target < sum) {
          break;
        }
      }
    }
  }
  return minSize;
};
minSubArrayLen(7, [2, 3, 1, 2, 4, 3])