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
  let toReturn = [];
  out.forEach((el) => {
    for (let index = 0; index < el[1]; index++) {
      toReturn.push(el[0]);
    }
  })
  return toReturn;
}
console.log(frequencySort([2, 5, 2, 8, 5, 6, 8, 8]));