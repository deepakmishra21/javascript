var threeSum = function (nums) {
  var n = nums.length;
  var arr = nums;
  var result = [];
  for (var i = 0; i < n - 1; i++) {
    var s = new Set();
    for (var j = i + 1; j < n; j++) {
      var x = -(arr[i] + arr[j]);
      if (s.has(x)) {
        let _arr = [arr[i], arr[j], x].sort();
        let isExist = result.findIndex(item => item.toString() == _arr.toString()) > -1;
        if (!isExist) {
          result.push(_arr);
        }
      }
      else {
        s.add(arr[j]);
      }
    }
  }
  return result;
};
console.log(threeSum([-1, 0, 1, 2, -1, -4]));