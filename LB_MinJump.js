arr = [1, 3, 5, 8, 9, 2, 6, 7, 6, 8, 9];

console.log(minJump(arr, 0, arr.length));

function minJump(arr, start, end) {

  if (start >= end)
    return 0;

  let minJumpCount = Number.MAX_VALUE;

  for (let i = 1; i <= arr[i] && i < end; i++) {

    let min = 1 + minJump(arr, start + i, end);

    if (min < minJumpCount)
      minJumpCount = min;
  }

  return minJumpCount;

}