console.log(RotateMatrix([[1, 2, 3], [4, 5, 6], [7, 8, 9]]));

function RotateMatrix(arr) {
  let output = [];
  for (let i = 0; i < arr.length; i++) {
    let k = 0;
    output[i] = [];
    for (let j = arr[0].length - 1; j >= 0; j--) {
      output[i][k] = arr[j][i];
      k++;
    }

  }
  return output;

}