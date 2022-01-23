var spiralOrder = function (matrix) {
  let size = matrix.length * matrix[0].length;
  let result = [];
  let col_start = 0, col_end = matrix[0].length - 1;
  let row_start = 0, row_end = matrix.length - 1;
  while (result.length < size) {
    if (result.length < size) {
      for (let i = col_start; i <= col_end; i++) {
        result.push(matrix[row_start][i]);
      }
      row_start += 1;
    }
    if (result.length < size) {
      for (let i = row_start; i <= row_end; i++) {
        result.push(matrix[i][col_end]);
      }
      col_end -= 1;
    }
    if (result.length < size) {
      for (let i = col_end; i >= col_start; i--) {
        result.push(matrix[row_end][i]);
      }
      row_end -= 1;
    }

    if (result.length < size) {
      for (let i = row_end; i >= row_start; i--) {
        result.push(matrix[i][col_start]);
      }
      col_start++;
    }
  }
  return result;
};
spiralOrder([[1, 2, 3, 4, 5], [6, 7, 8, 9, 10], [11, 12, 13, 14, 15], [16, 17, 18, 19, 20], [21, 22, 23, 24, 25]])
spiralOrder([[1]]);
spiralOrder([[2, 5], [8, 4], [0, -1]]);
spiralOrder([[1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12]]);
spiralOrder([[1, 2, 3], [4, 5, 6], [7, 8, 9]]);