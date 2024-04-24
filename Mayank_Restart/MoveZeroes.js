var moveZeroes = function (nums) {
  let counter = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] != 0) {
      nums[counter] = nums[i];
      counter++;
    }
  }

  while (counter < nums.length) {
    nums[counter] = 0;
    counter++;
  }

};