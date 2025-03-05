console.log(threeSum([0, 0, 0, 0]));

function threeSum(nums) {
  var result = [];
  nums.sort((a, b) => {
    return a - b;
  });

  for (let i = 0; i < nums.length; i++) {
    var l = i + 1;
    var r = nums.length - 1;
    while (l < r) {
      let sum = nums[i] + nums[l] + nums[r];
      if (sum == 0) {
        result.push([nums[i], nums[l], nums[r]]);
        l++;
        r--;
      } else if (sum < 0) l++;
      else if (sum > 0) r--;
    }
  }
  debugger;
  return Array.from(new Set(result.map(JSON.stringify)), JSON.parse);
}
