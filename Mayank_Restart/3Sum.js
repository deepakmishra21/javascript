var threeSum = function (nums) {

  let result = [];
  nums.sort((a, b) => a - b);
  for (let i = 0; i < nums.length; i++) {
    let l = i + 1;
    let r = nums.length - 1;
    while (l < r) {
      let sum = nums[i] + nums[l] + nums[r];
      if (sum == 0) {
        result.push([nums[i], nums[l], nums[r]]);
        while (nums[l] === nums[l + 1]) l++;
        while (nums[r] === nums[r - 1]) r--;
        l++;
        r--;
      }
      else if (sum < 0)
        l++;
      else if (sum > 0)
        r--;
    }

  }
  return Array.from(new Set(result.map(JSON.stringify)), JSON.parse);

};