console.log(findLongestOverAll([
  [1, 2, 9],
  [5, 3, 8],
  [4, 6, 7]
]));


function findLongestOverAll(matrix) {

  let result = 1;

  let dp = [];

  for (let i = 0; i < matrix.length; i++) {
    dp[i]=[];
    for (let j = 0; j < matrix[i].length; j++) {
      dp[i][j] = -1;
    }
  }

  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (dp[i][j] == -1)
        dp[i][j] = findLongestForCell(i, j, matrix, dp);
         result = Math.max(result, dp[i][j]);
    }

   
  }

  return result;

}

function findLongestForCell(i, j, matrix, dp) {

  if (i < 0 || i >= matrix.length  || j < 0 || j >= matrix[i].length)
    return 0;

  if (dp[i][j] != -1)
    return dp[i][j];

  let x = -1;
  let w = -1;
  let y = -1;
  let z = -1;

  if (j <( matrix.length - 1) && matrix[i][j] + 1 == matrix[i][j + 1])
    x = 1 + findLongestForCell(i, j + 1, matrix, dp);
  if (j > 0 && matrix[i][j] + 1 == matrix[i][j - 1])
    w = 1 + findLongestForCell(i, j - 1, matrix, dp);
  if (i < (matrix.length - 1) && matrix[i][j] + 1 == matrix[i + 1][j])
    y = 1 + findLongestForCell(i + 1, j, matrix, dp);
  if (i > 0 && matrix[i][j] + 1 == matrix[i - 1][j])
    z = 1 + findLongestForCell(i - 1, j , matrix, dp);


  dp[i][j] = Math.max(x, Math.max(w, Math.max(y, Math.max(z, 1))));
  return dp[i][j];
}