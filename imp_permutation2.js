/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function (arr) {
  let result = [];
  if (arr.length == 1) {
    return arr;
  }
  else if (arr.length == 0) {
    return [];
  }
  for (let index = 0; index < arr.length; index++) {
    let _firstElem = arr[index];
    let restArr = arr.slice(0, index).concat(arr.slice(index + 1));
    let perm = permute(restArr);
    perm.forEach(el => {
      result.push([_firstElem].concat(el));
    });

  }
  return result;
};


console.log(permute([1, 2, 3]));