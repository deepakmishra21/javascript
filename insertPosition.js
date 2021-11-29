var searchInsert = function (nums, target) {
  let n = nums.length
  let start = 0;
  let end = n - 1;

  while (start <= end) {
    let mid = Math.floor((start + end) / 2);
    if (nums[mid] == target)
      return mid;
    else if (nums[mid] < target)
      start = mid + 1;
    else
      end = mid - 1;
  }
  return end + 1;
};
debugger
// console.log(searchInsert([1, 3, 5, 6], 5) == 2);
// console.log(searchInsert([1, 3], 3) == 1);
// console.log(searchInsert([1, 3, 5, 6], 2) == 1);
// console.log(searchInsert([1, 3, 5, 6], 7) == 4)
// console.log(searchInsert([1, 3, 5, 6], 0) == 0)
// console.log(searchInsert([1, 3, 5], 4) == 2);
console.log(searchInsert([1, 4, 6, 7, 8, 9], 6) == 2);
