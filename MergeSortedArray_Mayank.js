var merge = function (nums1, m, nums2, n) {
  debugger;
  let _m2 = 0;
  for (let i = 0; i < m + n; i++) {
    if (i < m) {
      if (nums1[i] > nums2[_m2]) {
        let swap = nums1[i];
        nums1[i] = nums2[_m2];
        nums2[_m2] = swap;
        nums2.sort((a, b) => a - b);
      }
    }
    else {
      nums1[i] = nums2[_m2];
      _m2++;
    }
  }
  return nums1;
};

console.log(merge([4, 5, 6, 0, 0, 0], 3, [1, 2, 3], 3));