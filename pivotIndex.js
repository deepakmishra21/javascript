var pivotIndex = function (nums) {
  let totalSum = 0;
  for (let i = 0; i < nums.length; i++) {
    totalSum += nums[i];
  }

  let sum = 0;
  for (let i = 0; i < nums.length; i++) {
    if (totalSum == 2 * sum + nums[i]) {
      return i;
    }
    sum += nums[i];

  }
  return -1;
};
console.log(pivotIndex([1, 7, 3, 6, 5, 6]))