let arr = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 10, 11, 12],
  [13, 14, 15, 16]
];


console.log(PrintSpiral(arr));

function PrintSpiral(arr) {

  let result = [];
  let start_row = 0;
  let start_column = 0;
  let end_row = arr.length - 1;
  let end_column = arr[0].length - 1;
  let j = 0;


  while (j < (arr.length * arr[0].length)) {
    debugger;
    for (let i = start_column; i <= end_column; i++) {
      result.push(arr[start_row][i]);
      j++;
    }

    start_row++;

    for (let i = start_row; i <= end_row; i++) {
      result.push(arr[i][end_column]);
      j++;
    }

    end_column--;

    for (let i = end_column; i >= start_column; i--) {
      result.push(arr[end_row][i]);
      j++;
    }
    end_row--;

    for (let i = end_row; i >= start_row; i--) {
      result.push(arr[i][start_column]);
      j++;
    }

    start_column++;
  }
  return result;



}