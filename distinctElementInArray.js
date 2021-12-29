function uniqueArr(arr) {
  var map = new Map();
  arr.forEach(element => {
    if (element.toLowerCase() == element && !map.has(element.toLowerCase())) {
      map.set(element, element);
    }
    if (element.toUpperCase() == element && !map.has(element)) {
      map.set(element, element);
    }
  });
  debugger;
  return [...map.keys()]
}
function uniqueArr2(arr) {
  var map = new Set(arr);
  return [...map.keys()]
}

console.log(uniqueArr2(["A", "a", "A", "B", "b", "b"]))