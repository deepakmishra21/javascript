function(nums) {

  let map = new Map();
  let count = 0;
  let lastIndex = nums.length - 1;
  for (let i = 0; i < nums.length; i++) {
    if (!map.has(nums[i])) {
      map.set(nums[i], '');
      count++;
    } else {
      const swap = nums[i];
      nums[i] = nums[lastIndex];
      nums[lastIndex] = swap;
      lastIndex--;
      i--;
    }
  }
  return count;

};