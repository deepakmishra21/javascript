function singleNumber(nums) {
  let result;
  let map = new Map();
  for (let i = 0; i < nums.length; i++) {
    if (!map.has(nums[i])) {
      map.set(nums[i], 1);
    } else {
      let count = map.get(nums[i]) + 1;
      map.set(nums[i], count);
    }
  }

  for (let [key, value] of map) {
    if (value === 1)
      result = key;
  }

  return result;
};