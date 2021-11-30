function powerSet(arr) {
  var subset = [[]];
  for (var i = 0; i < arr.length; i++) {
    debugger
    var elem = arr[i];
    var len = subset.length;
    for (var j = 0; j < len; j++) {
      debugger
      var currentSubset = subset[j].slice();
      currentSubset.push(elem);
      subset.push(currentSubset);
    }

  }
  return subset;
}
debugger;
var po = powerSet(["A", "B", "C"]);
debugger;