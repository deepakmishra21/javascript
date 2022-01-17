var spiralOrder = function (matrix) {
  let right = matrix[0].length;
  let bottom = matrix.length;
  let left = 0;
  let top = 0;
  let iterator = true;
  let out = [];
  let r = 0;
  let c = 0;
  let dir = 'right';//down/left/up
  while (iterator) {
    if (!matrix[r] || matrix[r][c] == undefined || matrix[r][c] == 'seen') {
      break;
    }
    if (dir == 'right') {
      while (matrix[r][c] != 'seen' && c < right) {
        out.push(matrix[r][c]);
        matrix[r][c] = 'seen';
        c++;
      }
      c--;
      r++;
      right--;
      top++;
      dir = 'down'
    }
    else if (matrix[r][c] != 'seen' && dir == 'down') {
      while (r < bottom) {
        out.push(matrix[r][c]);
        matrix[r][c] = 'seen';
        r++;
      }
      r--;
      c--;
      bottom--;
      dir = 'left'
    }
    else if (matrix[r][c] != 'seen' && dir == 'left') {
      while (c >= left) {
        out.push(matrix[r][c]);
        matrix[r][c] = 'seen';
        c--;
      }
      c++;
      r--;
      left++;
      dir = 'up'
    }
    else if (matrix[r][c] != 'seen' && dir == 'up') {
      while (r >= top) {
        out.push(matrix[r][c]);
        matrix[r][c] = 'seen';
        r--;
      }
      r++;
      c++;
      top++;
      dir = 'right'
    }
  }
  console.log(matrix, out)
  return out;
};
spiralOrder([[1, 2, 3, 4, 5], [6, 7, 8, 9, 10], [11, 12, 13, 14, 15], [16, 17, 18, 19, 20], [21, 22, 23, 24, 25]])
spiralOrder([[1]]);
spiralOrder([[2, 5], [8, 4], [0, -1]]);
spiralOrder([[1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12]]);
spiralOrder([[1, 2, 3], [4, 5, 6], [7, 8, 9]]);