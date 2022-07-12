var firstUniqChar = function (s) {
  var unique = {};
  var _unique = {};
  for (var i = 0; i < s.length; i++) {
    if (unique[s[i]]) {
      delete _unique[s[i]];
      unique[s[i]]++;
    } else {
      _unique[s[i]] = i;
      unique[s[i]] = 1;
    }
  }
  var result = Object.keys(_unique);
  if (result.length === 0) {
    return -1;
  }
  return _unique[result[0]];
};
document.write(firstUniqChar("leetcode"));