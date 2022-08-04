var generateParenthesis = function (n) {
  let result = [];
  generateParenthesisHelper(n, n, "", result);
  return result;
};
generateParenthesisHelper = function (left, right, str, result) {
  if (left == 0 && right == 0) {
    result.push(str);
  }
  if (left > 0) {
    generateParenthesisHelper(left - 1, right, str + "(", result);
  }
  if (right > left) {
    generateParenthesisHelper(left, right - 1, str + ")", result);
  }
}
console.log(generateParenthesis(3));