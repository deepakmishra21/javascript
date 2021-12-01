console.log(productExceptSelf([1, 2, 3, 4]));

function productExceptSelf(nums) {
  debugger;
  var result = [];
  for (let i = 0; i < nums.length; i++) {
    let _array = nums;
    _array.splice(i, 1);
    result.push(_array.reduce((index, start = 1) => { return start = start * index; }));

  }

  return result;




}

