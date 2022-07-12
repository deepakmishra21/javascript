var intersect = function (nums1, nums2) {
  var numObj = {};
  var result = [];
  for (var i = 0; i < nums1.length; i++) {
    if (numObj[nums1[i]]) {
      numObj[nums1[i]]++;
    } else {
      numObj[nums1[i]] = 1;
    }
  }
  for (var i = 0; i < nums2.length; i++) {
    if (numObj[nums2[i]]) {
      result.push(nums2[i]);
      numObj[nums2[i]]--;
    }
  }
  return result;
};
document.writeln(intersect([1, 2, 2, 1], [2, 2]));