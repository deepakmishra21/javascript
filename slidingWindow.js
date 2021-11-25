/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function (nums, k) {
    var arr = [];
    for (var i = k - 1; i < nums.length; i++) {
        var max = nums[i];
        for (var j = i - k + 1; j < i; j++) {
            var n = nums[j];
            if (n > max) {
                max = nums[j];
            }
        }
        arr.push(max);

    }
    return arr;
}
console.log(maxSlidingWindow([1, 3, -1, -3, 5, 3, 6, 7], 3))