function sum(a, b, c) {
    return a + b + c;
  }
  function curry(fn) {
    return function curried(...arg) {
      if (arg.length >= fn.length) {
        return fn.apply(this, arg)
      }
      else {
        return function (arg2) {
          return curried.apply(this, arg.concat(arg2))
        }
      }
    }
  }
  var currySum=curry(sum);
  console.log(currySum(1,2)(3));
