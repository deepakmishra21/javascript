console.log(spiral([[1, 2, 3, 4],
[5, 6, 7, 8],
[9, 10, 11, 12],
[13, 14, 15, 16]]));

function spiral(arr) {

  let arrLength = arr.length * arr[0].length;
  let row_start = 0, row_end = arr[0].length - 1;
  let column_start = 0, column_end = arr.length - 1;
  let pos = 0;
  let output = []; debugger;
  while (pos < arrLength) {

    for (let i = row_start; i <= row_end; i++) {
      output.push(arr[column_start][i]);
      pos++;
    }
    row_start++;
    for (let i = row_start; i <= row_end; i++) {
      output.push(arr[i][column_end]);
      pos++;
    }
    column_end--;
    for (let i = column_end; i >= column_start; i--) {
      output.push(arr[row_end][i]);
      pos++;
    }
    row_end--;

    for (let i = row_end; i >= row_start; i--) {
      output.push(arr[i][column_start]);
      pos++;
    }
    column_start++;

  }

  return output;
}


