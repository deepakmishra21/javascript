arr1 = [1, 3, 4, 5];
arr2 = [2, 4, 6, 8];

console.log(mergeSorted(arr1, arr2));

function mergeSorted(arr1, arr2) {

  let newCount = arr1.length + arr2.length;
  let newArray = [];

  for (let i = 0; i < newCount; i++) {
    if (!arr1.length) {
      newArray[i] = arr2[0];
      arr2 = arr2.slice(1);
    } else if (!arr2.length) {
      newArray[i] = arr1[0];
      arr1 = arr1.slice(1);
    } else if (arr1[0] >= arr2[0]) {
      newArray[i] = arr2[0];
      arr2 = arr2.slice(1);
    } else {
      newArray[i] = arr1[0];
      arr1 = arr1.slice(1);
    }

  }

  return newArray;
}