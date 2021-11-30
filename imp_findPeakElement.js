//O(n)
var findPeakElement = function (nums) {
  let n = nums.length;
  if (n == 1) return 0;
  if (nums[0] >= nums[1]) return 0;
  if (nums[n - 1] >= nums[n - 2]) return n - 1;
  for (var i = 1; i < n - 1; i++) {
    if (nums[i] >= nums[i - 1] && nums[i] >= nums[i + 1]) return i;
  }
  return 0;
};


//O(log(n))
var findPeakElement = function (arr) {
  let n = arr.length;
  return findPeakUtil(arr, 0, n - 1, n);
};
function findPeakUtil(arr, low, high, n) {
  var mid = low + parseInt((high - low) / 2);
  if ((mid == 0 || arr[mid - 1] <= arr[mid]) && (mid == n - 1 || arr[mid + 1] <= arr[mid]))
    return mid;
  else if (mid > 0 && arr[mid - 1] > arr[mid])
    return findPeakUtil(arr, low, (mid - 1), n);
  else
    return findPeakUtil(arr, (mid + 1), high, n);
}
