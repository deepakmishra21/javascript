console.log(kthSmallest([7, 10, 4, 3, 20, 15], 0, [7, 10, 4, 3, 20, 15].length - 1, 6));

function kthSmallest(arr, l, r, k) {

  if (k > 0 && k <= r - l + 1) {
    var pos = partition(arr, l, r);
    if (pos - l == k - 1)
      return arr[pos];
    if (pos - l > k - 1)
      return kthSmallest(arr, l, pos - 1, k);
    return kthSmallest(arr, pos + 1, r,
      k - pos + l - 1);
  }
  return Number.MAX_VALUE;
}

function partition(arr, l, r) {
  let i = l;

  for (let j = l; j <= r - 1; j++) {

    if (arr[j] <= arr[r]) {
      let temp = arr[j];
      arr[j] = arr[i];
      arr[i] = temp;
      i++;
    }
  }

  let temp = arr[r];
  arr[r] = arr[i];
  arr[i] = temp;

  return i;
}