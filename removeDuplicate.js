let nums = [1, 1, 2];
console.log(removeDuplicate(nums));

function removeDuplicate(nums) {

  let end = nums.length;
  for (let i = 1; i < end; i++) {

    if (nums[i] == nums[i - 1]) {

      let temp = nums[i];
      let j;
      for (j = i; j < end - 1; j++) {
        nums[j] = nums[j + 1];
      }
      nums[j] = temp;
      end--;
    }


  }
  nums = nums.slice(0, end);
  console.log(nums, end);
  return nums;
}