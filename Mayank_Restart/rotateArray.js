var rotate = function (nums, k) {
  k = k % nums.length;
  nums = reverse(nums, 0, nums.length - 1);
  nums = reverse(nums, 0, k - 1);
  nums = reverse(nums, k, nums.length - 1);
  return nums;

};


function reverse(arr, start, end) {

  while (start < end) {
    const swap = arr[start];
    arr[start] = arr[end];
    arr[end] = swap;
    start++;
    end--;
  }
  return arr;
}