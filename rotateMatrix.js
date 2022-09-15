
function rotateMatrix(mat) {

  // reversing the matrix
  for (let i = 0; i < mat.length; i++) {
    mat[i].reverse()
  }

  // make transpose of the matrix
  for (let i = 0; i < mat.length; i++) {
    for (let j = i; j < mat.length; j++) {

      // swapping mat[i][j] and mat[j][i]
      let temp = mat[i][j]
      mat[i][j] = mat[j][i]
      mat[j][i] = temp
    }
  }
}
var rotate = function (matrix) {
  let N = matrix.length;
  var out = JSON.parse(JSON.stringify(matrix));
  let m = -1;
  let n = -1;
  for (j = 0; j < N; j++) {
    m++;
    n = -1;
    for (i = N - 1; i >= 0; i--) {
      n++;
      out[m][n] = matrix[i][j];
    }
  }
  matrix = out;
  return out;
};
var arr = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];
rotate(arr);