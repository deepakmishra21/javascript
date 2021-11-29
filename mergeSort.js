function sort(arr) {
  if (arr.length == 1) {
    return arr;
  }
  var mid = Math.floor(arr.length / 2);
  var leftHalf = arr.slice(0, mid);
  var rightHalf = arr.slice(mid, arr.length);
  return mergeMe(sort(leftHalf), sort(rightHalf));

}
function mergeMe(leftHalf, rightHalf) {
  var sorted = [];
  var i = j = 0;
  while (i < leftHalf.length && j < rightHalf.length) {
    if (leftHalf[i] <= rightHalf[j]) {
      sorted.push(leftHalf[i]);
      i++;
    }
    else if (leftHalf[i] > rightHalf[j]) {
      sorted.push(rightHalf[j]);
      j++;
    }
  }
  while (i < leftHalf.length) {

    sorted.push(leftHalf[i]);
    i++;


  }
  while (j < rightHalf.length) {
    sorted.push(rightHalf[j]);
    j++;
  }
  return sorted;
}
debugger;
var sorted = sort([8, 5, 2, 9, 5, 6, 3]);
debugger;
