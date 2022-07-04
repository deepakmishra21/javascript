let nums = [3, 2, 4];
console.log(TwoSum(nums, 6));

function TwoSum(nums, k) {
  let map = new Map();

  for (let i = 0; i < nums.length; i++) {
    if (map.has(nums[i])) {
      let val = [...map.get(nums[i]), i];
      map.set(nums[i], val);
    } else
      map.set(nums[i], [i]);

  }

  for (let i = 0; i < nums.length; i++) {

    if ((k - nums[i]) == nums[i]) {
      if (map.get(nums[i]).length > 1)
        return map.get(nums[i]);
    } else if (map.has(k - nums[i]))
      return [i, ...map.get(k - nums[i])];

  }


}