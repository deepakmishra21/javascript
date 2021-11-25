function countingValleys(steps, path) {
  // Write your code here
  var count = 0;
  var isStart = false;
  var pos = 0;
  for (var i = 0; i < path.length; i++) {
    var elem = path[i];
    if (elem == "D") {
      pos = pos - 1;
      if (pos == -1) {
        isStart = true;
      }
    }
    else if (elem == "U") {
      pos = pos + 1;
      if (pos == 0 && isStart) {
        count = count + 1;
        isStart = false;
      }
    }
  }
  return count;
}
console.log(countingValleys(8, "UDDDUDUU"));