//Best solution
var mySqrt = function (x) {
  let start = 1;
  let end = x;
  let ans = 0;
  while (start <= end) {
    let mid = Math.floor((start + end) / 2)
    if (mid * mid == x) {
      return mid;
    }

    if (mid * mid < x) {
      start = mid + 1;
      ans = mid;
    }

    else { end = mid - 1; }
  }
  return ans;
};
var mySqrt = function (x) {
  let sqrt = 0;
  for (let index = 0; index <= x; index++) {
    let element = index;
    if (element * element <= x) {
      sqrt = element
    }
    else {
      break;
    }
  }
  return sqrt;
};
console.log(mySqrt(1))
console.log(mySqrt(4))
console.log(mySqrt(8))