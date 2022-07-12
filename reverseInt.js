var reverseInteger = function (x) {
  debugger;
  var isNegative = x < 0;
  if (isNegative) {
    x = x * -1;
  }
  var out = 0;
  while (x !== 0) {
    out = out * 10 + x % 10;
    x = Math.floor(x / 10);
  }
  if (isNegative) {
    out = -out;
  }
  if (out > Math.pow(2, 31) - 1 || out < Math.pow(-2, 31)) {
    return 0;
  }
  return out;
};
document.write(reverseInteger(-123));