function pivotIndex(nums) {
  debugger;

  for (let i = 0; i < nums.length; i++) {
    let leftArray = nums.slice(0, i);
    let rightArray = nums.slice(i + 1, nums.length);
    if (checkSum(leftArray, rightArray))
      return i;
  }
  return -1;
}

function checkSum(leftArray, rightArray) {

  let leftSum, rightSum;
  leftSum = leftArray.reduce((sum = 0, i) => { return sum += i; }, 0);
  rightSum = rightArray.reduce((sum = 0, i) => { return sum += i; }, 0);
  return leftSum == rightSum ? true : false;

}

console.log(pivotIndex([1, 7, 3, 6, 5, 6]));