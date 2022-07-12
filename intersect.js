let nums1 = [4, 9, 5];
let nums2 = [9, 4, 9, 8, 4];
console.log(intersect(nums1, nums2));

function intersect(nums1, nums2) {
  let result = [];
  let map = new Map();
  for (let i = 0; i < nums1.length; i++) {

    if (map.has(nums1[i]))
      map.set(nums1[i], map.get(nums1[i]) + 1)
    else
      map.set(nums1[i], 1)

  }

  for (let i = 0; i < nums2.length; i++) {
    if (map.get(nums2[i])) {
      result.push(nums2[i]);
      map.set(nums2[i], map.get(nums2[i]) - 1)
    }
  }




  return result;
}