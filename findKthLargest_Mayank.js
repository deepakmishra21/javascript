console.log(findKthLargest([3, 2, 1, 5, 6, 4], 2));

function findKthLargest(nums, k) {
  debugger;
  return nums.sort((a, b) => b - a)[k - 1];

}

