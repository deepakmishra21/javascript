function repeatedString(s, n) {
  var count = 0;
  var countPerString = 0;
  var strLen = s.length;
  for (var i = 0; i < strLen; i++) {
    if (s[i] == "a") {
      countPerString = countPerString + 1;
    }
  }
  if (n => strLen) {
    let occurance = Math.floor(n / strLen);
    count = countPerString * occurance;
    let mod = n % strLen;
    for (var i = 0; i < mod; i++) {
      if (s[i] == "a") {
        count = count + 1;
      }
    }
  }
  else {
    for (var i = 0; i < n; i++) {
      if (s[i] == "a") {
        count = count + 1;
      }
    }
  }
  return count;
}
console.log(repeatedString("aba", 10))