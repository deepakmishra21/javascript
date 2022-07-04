let nums = [1, 2, 3, 4, 5, 6, 7];
console.log(rotateArray(nums, 3));

function rotateArray(nums, k) {
  k = k % nums.length;

  nums = reverse(nums, 0, nums.length - 1);
  nums = reverse(nums, 0, k - 1);
  nums = reverse(nums, k, nums.length - 1);
  return nums;

}

function reverse(arr, start, end) {
  while (start < end) {
    let temp = arr[start];
    arr[start] = arr[end];
    arr[end] = temp;
    start++;
    end--;
  }
  return arr;
}