var reverseString = function (s) {

  let start = 0;
  let end = s.length - 1;
  while (start < end) {
    const swap = s[start];
    s[start] = s[end]
    s[end] = swap;
    end--;
    start++;
  }

};