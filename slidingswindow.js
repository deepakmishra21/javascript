const max_sub_array_of_size_k = function (k, arr) {
  let maxSum;
  var tempArr = [];
  for (var i = k - 1; i < nums.length; i++) {
    var sum = nums[i];
    for (var j = i - k + 1; j < i; j++) {
      sum = sum + nums[j];
    }
    if (!maxSum) {
      maxSum = sum;
    }
    else if (maxSum < sum) {
      maxSum = sum;
    }
  }
  return maxSum;
};
