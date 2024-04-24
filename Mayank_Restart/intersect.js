var intersect = function (nums1, nums2) {

  let result = [];
  let map = new Map();

  for (let i = 0; i < nums1.length; i++) {
    if (!map.has(nums1[i])) {
      map.set(nums1[i], 1)
    } else {
      const count = map.get(nums1[i]) + 1;
      map.set(nums1[i], count);
    }
  }

  for (let i = 0; i < nums2.length; i++) {
    if (map.has(nums2[i]) && map.get(nums2[i]) > 0) {
      result.push(nums2[i]);
      const count = map.get(nums2[i]) - 1;
      map.set(nums2[i], count);


    }
  }

  return result;

};