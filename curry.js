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

////////////////////////


function curry(fn) {
  return function add(...a) {
    if (fn.length == [...a].length) {
      return fn(...a);
    }
    else {
      return function (...b) {
        if (fn.length == [...a, ...b].length) {
          return fn(...a, ...b);
        }
        else {
          return add(...a, ...b)

        }
      }
    }

  }
}
function sum(a, b, c, d) {
  return a + b + c + d;
}

console.log(curry(sum)(1, 2, 3)(4));


function magic(fn) {
  return function magic2(...firstArg) {
    return function (...secondArg) {
      if (secondArg.length) {
        return magic2(...firstArg, ...secondArg);
      }
      else {
        return fn(...firstArg, ...secondArg);
      }
    }
  }
}
function multiply(...arr) {
  debugger;
  return console.log(arr);
}
function sum(...arr) {
  debugger;
  return console.log(arr);
}
console.log(magic(mul)(1, 2)(3)(4));
console.log(magic(sum)(1, 2)(3)(4)());
