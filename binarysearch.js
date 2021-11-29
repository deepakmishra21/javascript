function binarySearch(arr, elem, start, end) {
    console.log(start, end, new Date());
    var mid = Math.floor((start + end) / 2);
    var midItem = arr[mid];
    if (midItem == elem) {
        return true;
    }
    else if (start > end) {
        return false;
    }
    else if (elem > midItem) {
        start = mid + 1;
        return binarySearch(arr, elem, start, end);
    }
    else if (elem < midItem) {
        end = mid - 1;
        return binarySearch(arr, elem, start, end);
    }


}
var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(binarySearch(arr, 4, 0, arr.length - 1));



var search = function (nums, target) {
  let left = 0;
  let right = nums.length - 1;
  while (left <= right) {
    const pivot = Math.floor((left + right) / 2);
    if (target === nums[pivot]) return pivot;
    if (nums[pivot] > target) right = pivot - 1;
    else left = pivot + 1;
  }
  return -1;
};