var canJump = function (nums) {
  var obj = {};
  obj[0] = true;
  var len = nums.length;
  for (var i = 0; i < len; i++) {
    if (obj[i]) {
      for (var j = 1; j <= nums[i]; j++) {
        obj[i + j] = true;
      }
    }
    if (obj[len - 1]) {
      return true;
    }
  }
  return false;
};
