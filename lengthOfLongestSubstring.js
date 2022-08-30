/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (str) {
  let length = str.length;
  var resp = 0;
  for (let index = 0; index < length; index++) {
    let visited = {};
    for (let index2 = index; index2 < str.length; index2++) {
      const element = str[index2];
      if (visited[element]) {
        break;
      } else {
        resp = Math.max(resp, index2 - index + 1);
        visited[element] = true;
      }
    }
  }
  return resp;
};