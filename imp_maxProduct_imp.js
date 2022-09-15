/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function (nums) {
  let max = nums[0];
  let min = nums[0];
  let toReturn = nums[0]
  for (let i = 1; i < nums.length; i++) {
    let temp = max
    let elem = nums[i];
    max = Math.max(elem, Math.max(elem * max, elem * min));
    min = Math.min(elem, Math.min(elem * temp, elem * min));
    toReturn = Math.max(toReturn, max)
  }
  return toReturn
};
console.log(maxProduct([-2]));