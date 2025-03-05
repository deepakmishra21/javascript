var fizzBuzz = function (n) {
  let out = [];
  for (let index = 1; index <= n; index++) {
    const element = index;
    if (element % 3 == 0 && element % 5 == 0) {
      out.push("FizzBuzz");
    }
    else if (element % 3 == 0) {
      out.push("Fizz");
    }
    else if (element % 5 == 0) {
      out.push("Buzz");
    }
    else {
      out.push(element.toString());
    }
  }
  return out;

};
console.log(fizzBuzz(14))
//replace all " with space
var a=a.replace(/"/g,"");