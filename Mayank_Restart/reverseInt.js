var reverse = function (x) {
  let isNegative = false;

  if (x < 0) {
    isNegative = true;
    x = x * -1;
  }

  let result = 0;

  while (x > 0) {
    const remainder = x % 10;
    x = Math.floor(x / 10);
    result = result * 10 + remainder;
  }

  if (isNegative) {
    result = result * -1;
  }

  if (result > Math.pow(2, 31) - 1 || result < Math.pow(-2, 31)) {
    return 0;
  }

  return result;
}