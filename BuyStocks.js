let nums = [7, 1, 5, 3, 6, 4];
console.log(Stock(nums));

function Stock(nums) {
  let n = nums.length;
  let ans = 0;
  for (let i = 1; i < n; i++) {
    if (nums[i] > nums[i - 1])
      ans += nums[i] - nums[i - 1];
  }
  return ans;


}