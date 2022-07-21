var lengthOfLongestSubstring = function (str) {
  var n = str.length;
  var res = 0;
  for (var i = 0; i < n; i++) {
    var visited = new Array(256);
    for (var j = i; j < n; j++) {
      if (visited[str.charCodeAt(j)] == true) {
        break;
      }
      else {
        res = Math.max(res, j - i + 1);
        visited[str.charCodeAt(j)] = true;
      }
    }
  }
  return res;
};

var lengthOfLongestSubstring = function (s) {
  if (!s) {
    return 0;
  }
  var visited = {};
  var startIndex = 0;
  var longest = { leftIdx: 0, rightIdx: 1 };
  s.split('').forEach((element, index) => {
    if (visited[element] || visited[element] == 0) {
      startIndex = Math.max(startIndex, visited[element] + 1);
    }
    if (longest.rightIdx - longest.leftIdx < (index + 1 - startIndex)) {
      longest = { leftIdx: startIndex, rightIdx: index + 1 }
    }
    visited[element] = index;
  });
  return longest.rightIdx - longest.leftIdx;
};
console.log(lengthOfLongestSubstring("abcabcbb"));