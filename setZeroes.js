/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function (matrix) {
  var _zeros = [];
  let rows = matrix.length - 1;
  let cols = matrix[0].length - 1;
  for (let r = 0; r <= rows; r++) {
    for (let c = 0; c <= cols; c++) {
      let item = matrix[r][c];
      if (item == 0) {
        _zeros.push([r, c]);
      }
    }
  }
  _zeros.forEach((item) => {
    let _rowVal = item[0];
    let _colVal = item[1];
    for (let r = 0; r <= rows; r++) {
      if (_rowVal == r) {
        for (let c = 0; c <= cols; c++) {
          matrix[r][c] = 0;
        }
      }
    }
    for (let c = 0; c <= cols; c++) {
      if (_colVal == c) {
        for (let r = 0; r <= rows; r++) {
          matrix[r][c] = 0;
        }
      }
    }
  });
};
setZeroes([
  [0, 1, 2, 0],
  [3, 4, 5, 2],
  [1, 3, 1, 5]
]);
//[
//   [0, 0, 0, 0],
//   [0, 4, 5, 0],
//   [0, 3, 1, 0]
// ]