function sort(arr) {
  quickSort(arr, 0, arr.length - 1);
  return arr;
}
function quickSort(arr, start, end) {
  if (start >= end) {
    return;
  }
  var pIndex = start;
  let el = arr[pIndex];
  var left = start + 1;
  var right = end;
  while (right >= left) {
    let lEl = arr[left];
    let rEl = arr[right]
    if (lEl > el && rEl < el) {
      arr = swap(left, right, arr)
    }
    if (lEl <= el) {
      left++;
    }
    if (rEl >= el) {
      right--;
    }
  }
  arr = swap(pIndex, right, arr);
  quickSort(arr, start, right - 1);
  quickSort(arr, right + 1, end);
}
debugger;
var sorted = sort([8, 5, 2, 9, 5, 6, 3]);
debugger;