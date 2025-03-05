var reverseString = function (s, start, end) {
  if (s.length > 1) {
    if (!start) {
      start = 0;
      end = s.length - 1;
    }

    if (start == end || start > end) {
    } else {
      var temp = s[start];
      s[start] = s[end];
      s[end] = temp;
      start++;
      end--;
      reverseString(s, start, end);
    }
  }
};
var s = ["a", "."];
console.log(reverseString(s));
