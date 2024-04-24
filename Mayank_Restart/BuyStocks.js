function maxProfit(nums) {

  let n = nums.length;
  let ans = 0;
  for (let i = 1; i < n; i++) {
    if (nums[i] > nums[i - 1])
      ans += nums[i] - nums[i - 1];
  }
  return ans;

};