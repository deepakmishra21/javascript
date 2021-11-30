var tripletSum = function (nums, target) {
  let combination = [];
  for (let index = 0; index < nums.length - 2; index++) {
    const element = nums[index];
    for (let index2 = index; index2 < nums.length - 1; index2++) {
      const element2 = nums[index2];
      for (let index3 = index2; index3 < nums.length; index3++) {
        const element3 = nums[index3];
        combination.push([element, element2, element3]);
      }
    }

  }
  debugger;
};
var a = tripletSum([1, 2, 3, 9, 7, 9], 17);