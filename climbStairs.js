var climbStairs = function (n) {
  let obj = { 1: 1, 2: 2 };
  for (let i = 3; i <= n; i++) {
    obj[i] = obj[i - 1] + obj[i - 2];
  }
  return obj[n];
};