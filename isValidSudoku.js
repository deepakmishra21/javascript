/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function (board) {
  var row = [], col = [], box = [];
  for (var i = 0; i < 9; i++) {
    row[i] = {};
    col[i] = {};
    box[i] = {};
  }
  for (var i = 0; i < 9; i++) {
    for (var j = 0; j < 9; j++) {
      var num = board[i][j];
      if (num !== '.') {
        if (row[i][num] || col[j][num] || box[parseInt(i / 3) * 3 + parseInt(j / 3)][num]) {
          return false;
        }
        row[i][num] = true;
        col[j][num] = true;
        box[parseInt(i / 3) * 3 + parseInt(j / 3)][num] = true;
      }
    }
  }
  return true;
};