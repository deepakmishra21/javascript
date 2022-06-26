let arr = [-1, -3, -10, 0, 60];
let n = arr.length;

console.log(ProductSum(arr, n));

function ProductSum(arr, n) {

  let minVal = arr[0];
  let maxVal = arr[0];
  let maxProduct = arr[0];

  for (let i = 1; i < n; i++) {

    if (arr[i] < 0) {
      let temp = minVal;
      minVal = maxVal;
      maxVal = temp;
    }

    minVal = Math.min(arr[i], minVal * arr[i]);
    maxVal = Math.max(arr[i], maxVal * arr[i]);

    maxProduct = Math.max(maxProduct, maxVal);
  }

  return maxProduct;
}