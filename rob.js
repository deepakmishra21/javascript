var rob = function (nums) {
  var max = 0;
  var prev = 0;
  var curr = 0;
  for (var i = 0; i < nums.length; i++) {
    curr = Math.max(prev + nums[i], curr);
    prev = max;
    max = Math.max(max, curr);
  }
  return max;
};