var isPowerOfThree = function (n) {
  while (n > 2) {
    if (n % 3 == 0) {
      n = Math.floor(n / 3)
    }
    else {
      return false
    }

  }
  return n == 1;
};
console.log(isPowerOfThree(19682))