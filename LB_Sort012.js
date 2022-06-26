arr = [0, 1, 1, 0, 1, 2, 1, 2, 0, 0, 0, 1];
console.log(Sort012(arr));

function Sort012(arr) {
  let count0 = 0,
    count1 = 0,
    count2 = 0;

  for (let i = 0; i < arr.length; i++) {

    switch (arr[i]) {
      case 0:
        count0++;
        break;
      case 1:
        count1++;
        break;
      case 2:
        count2++;
        break;

    }
  }

  let i = 0;

  while (count0 > 0) {
    arr[i] = 0;
    count0--;
    i++;
  }

  while (count1 > 0) {
    arr[i] = 1;
    count1--;
    i++;
  }

  while (count2 > 0) {
    arr[i] = 2;
    count2--;
    i++;
  }
  return arr;
}