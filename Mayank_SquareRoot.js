console.log(SquareRoot(100));

function SquareRoot(num) {
  debugger;
  let start = 0;
  let end = Math.floor(num / 2);
  let result
  while (start <= end) {

    let middle = Math.floor((end + start) / 2);

    if (middle * middle == num) {
      result = middle;
      break;
    } else if (middle * middle > num) {
      end = middle;
      start = start + 1;
    } else {
      start = middle + 1;

    }
  }

  return result;
}