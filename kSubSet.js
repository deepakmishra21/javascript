var canPartitionKSubsets = function (nums, k) {
    var total = 0;
    nums.forEach(element => {
        total = total + element;
    });
    var requiredSum = total / k;
    var visited = new Array(nums.length).fill(false);
    if (k == 1) {
        return true;
    }
    else if (requiredSum % 1 == 0) {
        return canPartitiion(nums, 0, k, 0, visited, requiredSum);
    }
    else {
        return false;
    }

};
function canPartitiion(nums, start, numberOfSubsets, currentSum, visited, requiredSum) {
    if (numberOfSubsets === 1) {
        return true;
    }
    if (currentSum == requiredSum) {
        return canPartitiion(nums, 0, numberOfSubsets - 1, 0, visited, requiredSum)
    }
    for (var i = start; i < nums.length; i++) {
        if (!visited[i]) {
            visited[i] = true;
            var _can = canPartitiion(nums, i + 1, numberOfSubsets, currentSum + nums[i], visited, requiredSum)
            if (_can) {
                return true;
            }
            visited[i] = false;
        }
    }
    return false;
}
console.log(canPartitionKSubsets([10, 10, 10, 7, 7, 7, 7, 7, 7, 6, 6, 6], 3));