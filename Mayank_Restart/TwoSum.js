function twoSum(nums, target) {
  let map = {};
  for (let i = 0; i < nums.length; i++) {
    const diff = target - nums[i];
    if (map[diff] !== undefined) {
      return [map[diff], i];
    } else {
      map[nums[i]] = i;
    }
  }
  return [];
};