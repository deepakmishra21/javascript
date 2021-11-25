var moveZeroes = function (nums) {
  debugger;
  var zeroReplaced = 0;
  for (var i = 0; i < nums.length; i++) {
    var elem = nums[i];
    if (elem == 0) {
      nums.splice(i, 1);
      nums.push(0);
      zeroReplaced++;
      if (i + zeroReplaced < nums.length) {
        i--;
      }
    }
  }
  return nums;
};
console.log(moveZeroes([0, 1, 0, 3, 12]))