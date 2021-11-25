function hourglassSum(arr) {
  var max = [];
  for (var i = 0; i < 4; i++) {
    for (var j = 0; j < 4; j++) {
      var count = 0;
      count = arr[i][j] + arr[i][j + 1] + arr[i][j + 2] + arr[i + 1][j + 1] + arr[i + 2][j] + arr[i + 2][j + 1] + arr[i + 2][j + 2];
      max.push(count);
    }
  }
  let out = max[0];
  for (let index = 0; index < max.length; index++) {
    var element = max[index];
    if (element > out) {
      out = element;
    }
  }
  return out;
}
var arrr = [
  [1, 1, 1, 0, 0, 0],
  [0, 1, 0, 0, 0, 0],
  [1, 1, 1, 0, 0, 0],
  [0, 0, 2, 4, 4, 0],
  [0, 0, 0, 2, 0, 0],
  [0, 0, 1, 2, 4, 0]
];
console.log(hourglassSum(arrr))