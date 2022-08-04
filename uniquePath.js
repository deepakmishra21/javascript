/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function (m, n) {
  let table = Array(m).fill(Array(n).fill(0))
  for (let i = 0; i < m; i += 1) {
    table[i][0] = 1
  }
  for (let j = 0; j < n; j += 1) {
    table[0][j] = 1
  }
  for (let i = 1; i < m; i += 1) {
    for (let j = 1; j < n; j += 1) {
      table[i][j] = table[i - 1][j] + table[i][j - 1]
    }
  }
  return table[m - 1][n - 1]
};