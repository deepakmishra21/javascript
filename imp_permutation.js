var permute = function (nums) {
  var perMutation = [];
  getpPermutations(0, nums, perMutation);
  return perMutation;
};
function getpPermutations(index, arr, perMutation) {
  if (index == arr.length - 1) {
    perMutation.push(JSON.parse(JSON.stringify(arr)));
  }
  else {
    for (var j = index; j < arr.length; j++) {
      arr = swap(arr, index, j);
      getpPermutations(index + 1, arr, perMutation);
      arr = swap(arr, index, j);
    }
  }
}
function swap(arr, i, j) {
  let elem = arr[i];
  arr[i] = arr[j];
  arr[j] = elem;
  return arr;
}

console.log(permute([1, 2, 3]));