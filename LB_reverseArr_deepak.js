/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function (s) {
  let start = 0;
  let end = s.length - 1;
  while (start < end) {
    let elem = s[start];
    s[start] = s[end];
    s[end] = elem;
    start++;
    end--;
  }
  return s;
};
console.log(reverseString(["1", "2", "3", "4l", "5"]));