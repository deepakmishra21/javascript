
function findCommon(arr1, arr2) {
  let obj = {};
  debugger
  // arr1 = arr1.filter((m, index) => arr1.indexOf(m) == index)
  // arr2 = arr2.filter((m, index) => arr2.indexOf(m) == index);
  arr1.forEach((element, index) => {
    if (arr1.indexOf(element) == index) {
      if (obj[element]) {
        obj[element] = obj[element] + 1;
      }
      else {
        obj[element] = 1;
      }
    }
  });
  arr2.forEach((element, index) => {
    if (arr2.indexOf(element) == index) {
      if (obj[element]) {
        obj[element] = obj[element] + 1;
      }
      else {
        obj[element] = 1;
      }
    }
  });
  let common = [];
  Object.keys(obj).forEach(el => {
    if (obj[el] > 1) {
      common.push(el);
    }
  });
  return common;
}
var arr1 = [1, 2, 3, 4, 4];
var arr2 = [2, 3, 4, 4, 5, 5];
console.log(findCommon(arr1, arr2));