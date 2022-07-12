function getMinDiff(arr, n, k) {
  arr.sort((a, b) => (a - b))
  let ans = arr[n - 1] - arr[0];
  for (let i = 1; i < arr.length; i++) {
    let min = Math.min(arr[0] + k, arr[i - 1] - k);
    let max = Math.max(arr[i - 1] + k, arr[n - 1] - k);
    ans = Math.min(ans, max - min);
  }
  return ans;
}

// Driver Code Starts
let k = 6, n = 6;
let arr = [7, 4, 8, 8, 8, 9];
let ans = getMinDiff(arr, n, k);
document.write(ans, "</br>");