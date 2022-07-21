var increasingTriplet = function (nums) {
  if (nums == null || nums.length < 3) {
    return false;
  }

  var minOne = Number.MAX_VALUE;
  var minTwo = Number.MAX_VALUE;

  for (var num of nums) {
    if (num < minOne) {
      minOne = num;
    }

    if (num > minOne) {
      minTwo = Math.min(num, minTwo);
    }

    if (num > minTwo) {
      return true;
    }
  }
  return false;
};
increasingTriplet([1, 2, 3, 4, 5]);