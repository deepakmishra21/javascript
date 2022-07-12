arr = [-12, 11, -13, -5, 6, -7, 5, -3, -6];
console.log(moveLeft(arr));

function moveLeft(arr) {

  let start = 0;
  let end = arr.length - 1;

  while (start <= end) {

    if (arr[start] < 0 && arr[end] < 0)
      start++;
    else if (arr[start] > 0 && arr[end] > 0)
      end--;
    else if (arr[start] > 0 && arr[end] < 0) {
      let temp = arr[end];
      arr[end] = arr[start];
      arr[start] = temp;
      start++;
      end--;
    } else {
      start++;
      end--;
    }
  }

  return arr;

}