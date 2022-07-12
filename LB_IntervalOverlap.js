arr = [
  [1, 3],
  [2, 6],
  [15, 18],
  [8, 10]
];

console.log(mergeOverlap(arr));

function mergeOverlap(arr) {

  let result = [];

  arr.sort((a, b) => a[0] - b[0]);

  let prev = arr[0];

  for (let i = 1; i < arr.length; i++) {

    if (prev[1] >= arr[i][0]) {
      prev = [prev[0], Math.max(prev[1], arr[i][1])];
    } else {
      result.push(prev);
      prev = arr[i];
    }
  }
  result.push(prev);
  return result;
}