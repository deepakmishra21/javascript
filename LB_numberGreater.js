let str = "1243";
console.log(numberGreater(str));

function numberGreater(str) {

  let arr = str.split('');
  let digitFirst, digitSecond;


  for (let i = arr.length - 2; i >= 0; i--) {
    if (arr[i - 1] < arr[i]) {
      digitFirst = i - 1;
      break;
    }
  }
  let min = arr[arr.length - 1];
  digitSecond = arr.length - 1;
  for (let i = arr.length - 2; i > digitFirst; i--) {
    if (arr[i] > arr[digitFirst] && arr[i] < min) {
      min = arr[i];
      digitSecond = i;
    }
  }

  let temp = arr[digitFirst];
  arr[digitFirst] = arr[digitSecond];
  arr[digitSecond] = temp;

  let arr1 = arr.slice(0, digitFirst + 1);
  let arr2 = arr.slice(digitFirst + 1);

  arr2.sort((a, b) => a - b);

  return [...arr1, ...arr2].join('');

}