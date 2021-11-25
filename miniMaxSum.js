function miniMaxSum(arr) {
  var max = 0;
  var min = 0;
  for (var i = 0; i < arr.length; i++) {
    var sum = 0;
    for (var j = 0; j < arr.length; j++) {
      if (j != i) {
        sum = sum + arr[j];
      }

    }
    if (sum > max) {
      max = sum;
    }
    if (min == 0 || sum < min) {
      min = sum;
    }
  }
  console.log(min + " " + max);
}
miniMaxSum([1, 3, 5, 7, 9])