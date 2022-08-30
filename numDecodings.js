//Program for Decode Ways

/**
 * @param {string} s
 * @return {number}
 */
var numDecodings = function (digits) {
  let count = {};
  count[0] = 1;
  count[1] = 1;

  if (digits[0] == '0') {
    return 0;
  }
  let n = digits.length;
  for (let i = 2; i <= n; i++) {
    count[i] = 0;
    if (digits[i - 1] > '0') {
      count[i] = count[i - 1];
    }

    if (digits[i - 2] == '1' || (digits[i - 2] == '2' && digits[i - 1] < '7')) {
      count[i] += count[i - 2];
    }
  }
  return count[n];
};
console.log(numDecodings("12"))