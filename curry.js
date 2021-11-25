function sum(a, b, c) {
  return a + b + c;
}
function curry(fn) {
  return function curried(...arg) {
    if (arg.length >= fn.length) {
      return fn(...arg)
    }
    else {
      return function (...arg2) {
        return curried(...arg, ...arg2);
      }
    }
  }
}
var currySum = curry(sum);
console.log(currySum(1)(2, 3));



function add(...a) {
  return function (...b) {
    if (b.length) {
      return add(...a, ...b)
    }
    else {
      var sum = [...a, ...b].reduce((a, b = 0) => a + b);
      return sum;
    }
  }

}

console.log(add(1, 2)(1)(3)())