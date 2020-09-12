var maxSubArray = function (nums) {
    debugger;
    var size = nums.length;
    var max_so_far = -999999999999999;
    var max_ending_here = 0;

    for (var i = 0; i < size; i++) {
        max_ending_here = max_ending_here + nums[i];

        if (max_so_far < max_ending_here)
            max_so_far = max_ending_here;

        if (max_ending_here < 0)
            max_ending_here = 0;
    }

    return max_so_far;
};
console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]))