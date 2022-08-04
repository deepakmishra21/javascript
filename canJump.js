
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function (nums) {
  let table = Array(nums.length).fill(false)
  table[0] = true

  for (let i = 0; i < nums.length; i += 1) {
    if (table[i]) {
      for (let j = 0; j <= nums[i]; j += 1) {
        if (i + j <= table.length - 1) {
          table[i + j] = true
        }
      }
    }
    if (table[nums.length - 1]) return true
  }
  return false
};