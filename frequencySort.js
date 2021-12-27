function frequencySort(arr) {
  let _map = new Map();
  arr.forEach(element => {
    if (_map.get(element)) {
      _map.set(element, _map.get(element) + 1);
    }
    else {
      _map.set(element, 1);
    }
  });
  function sortFn(a, b) {
    return b[1] - a[1];
  }
  let out = [..._map]
  out.sort(sortFn);
}
console.log(frequencySort([2, 5, 2, 8, 5, 6, 8, 8]));