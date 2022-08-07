/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function (arr) {
  var n = arr.length;
  if (n == 1) {
    document.write(0);
    return;
  }
  let left = new Array(n);
  let right = new Array(n);
  let prod = new Array(n);
  let i, j;
  left[0] = 1;
  right[n - 1] = 1;
  for (i = 1; i < n; i++) {
    left[i] = arr[i - 1] * left[i - 1];
  }

  for (j = n - 2; j >= 0; j--) {
    right[j] = arr[j + 1] * right[j + 1];
  }

  for (i = 0; i < n; i++) {
    prod[i] = left[i] * right[i];
  }
  return prod;
};