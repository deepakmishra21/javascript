
var topKFrequent = function (arr, k) {
  let n = arr.length;
  let mp = new Map();
  for (let i = 0; i < n; i++) {
    if (!mp.has(arr[i]))
      mp.set(arr[i], 0);

    mp.set(arr[i], mp.get(arr[i]) + 1);
  }
  let queue = [...mp];

  queue.sort(function (a, b) {
    if (a[1] == b[1]) {
      return b[0] - a[0];
    }
    else {
      return b[1] - a[1];
    }
  });
  var out = [];
  for (let i = 0; i < k; i++) {
    out.push(queue[i][0]);
  }
  return out;
};
topKFrequent([1, 1, 1, 2, 2, 3], 2)