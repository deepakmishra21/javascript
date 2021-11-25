
function arrayManipulation(n, queries) {
  // Write your code here
  var arr = [];
  var max = 0;
  for (let index = 0; index < queries.length; index++) {
    var a = queries[index][0] - 1;
    var b = queries[index][1];
    var k = queries[index][2];
    for (let index = a; index < b; index++) {
      if (!arr[index]) {
        arr[index] = k;
      }
      else {
        arr[index] = arr[index] + k;
      }
      if (max < arr[index]) {
        max = arr[index];
      }
    }
  }
  return max;
}
console.log(arrayManipulation(5, [[1, 2, 100], [2, 5, 100], [3, 4, 100]]));