/**
 * @param {string} n
 * @return {string}
 */
var nearestPalindromic = function (n) {
  debugger;
  let num1 = n;
  let num2 = n;
  while (true) {
    num1 = (parseInt(num1) + 1).toString();
    num2 = (parseInt(num2) - 1).toString();
    if (isPalindrom(num2)) {
      return num2;
    }
    if (isPalindrom(num1)) {
      return num1;
    }
  }

};
function isPalindrom(data) {
  let left = 0;
  let right = data.length - 1;
  while (left < right) {
    if (data[left] != data[right]) {
      return false;
    }
    else {
      left++;
      right--;
    }
  }
  return true;
}
console.log(nearestPalindromic('123'));
