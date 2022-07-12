let str = "ABC";
let result = [];
permutate(str, 0, str.length - 1);
console.log(result);

function permutate(str, start, end) {

  if (start == end)
    result.push(str);
  else {
    for (let i = start; i <= end; i++) {
      str = swap(str, start, i);
      permutate(str, start + 1, end);
      str = swap(str, i, start);
    }
  }


}

function swap(str, i, j) {
  let arr = str.split('');
  let temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;

  return arr.join('');
}