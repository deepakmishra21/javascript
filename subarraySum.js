var subarraySum = function (arr, sum) {
  let _map = new Map();
  let res = 0;
  let currsum = 0;
  for (let i = 0; i < arr.length; i++) {
    currsum += arr[i];
    if (currsum == sum) {
      res++;
    }
    if (_map.has(currsum - sum)) {
      res += _map.get(currsum - sum);
    }

    let count = _map.get(currsum);
    if (count == null)
      _map.set(currsum, 1);
    else
      _map.set(currsum, count + 1);
  }
  return res;
};
subarraySum([1, 1, 1], 2);