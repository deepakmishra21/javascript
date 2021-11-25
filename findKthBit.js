var findKthBit = function (n, k) {
  var obj = { "1": "0" };
  for (let index = 2; index <= n; index++) {
    let str = obj[index - 1] + "1" + reverse(invert(obj[index - 1]));
    obj[index] = str;
  }
  return obj[n][k - 1];
  function reverse(str) {
    let out = "";
    for (let index = str.length - 1; index > -1; index--) {
      out = out + str[index];
    }
    return out;
  }
  function invert(str) {
    let out = "";
    for (let index = 0; index < str.length; index++) {
      let element = str[index];
      if (element == "1") {
        element = "0";
      }
      else {
        element = "1";
      }
      out = out + element;
    }
    return out;
  }
};
console.log(findKthBit(4, 11));