let n = 3;

function findLongestFromACell(i, j, mat, dp) {
  if (i < 0 || i >= n || j < 0 || j >= n) {
    return 0;
  }

  if (dp[i][j] != -1) {
    return dp[i][j];
  }
  let nextElem = mat[i][j] + 1;
  let result = 1;
  let left = -1;
  let right = -1;
  let up = -1
  let down = -1;
  if (j < n - 1 && nextElem == mat[i][j + 1]) {
    left = 1 + findLongestFromACell(i, j + 1, mat, dp);
  }
  if (j > 0 && nextElem == mat[i][j - 1]) {
    right = 1 + findLongestFromACell(i, j - 1, mat, dp);
  }
  if (i > 0 && nextElem == mat[i - 1][j]) {
    up = 1 + findLongestFromACell(i - 1, j, mat, dp);
  }
  if (i < n - 1 && nextElem == mat[i + 1][j]) {
    down = 1 + findLongestFromACell(i + 1, j, mat, dp);
  }
  dp[i][j] = Math.max(left, Math.max(right, Math.max(up, Math.max(down, result))));
  return dp[i][j];
}

function finLongestOverAll(mat) {
  let result = 1;
  var dp = [];
  for (var y = 0; y < n; y++) {
    dp[y] = [];
    for (var x = 0; x < n; x++) {
      dp[y][x] = -1;
    }
  }
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (dp[i][j] == -1)
        findLongestFromACell(i, j, mat, dp);

      result = Math.max(result, dp[i][j]);
    }
  }
  return result;
}
let mat = [[1, 2, 9],
[5, 3, 8],
[4, 6, 7]];

document.write("Length of the longest path is ");
document.write(finLongestOverAll(mat));