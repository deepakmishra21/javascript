function getFactorial(num) {
  num = BigInt(num);
  if (num <= 2)
    return 2n;
  else
    return num * getFactorial(num - 1n);

}

var num = getFactorial(30);
var result = 0;
debugger;
console.log(num);
while (num) {
  if (num % 10n == 0) {
    result++;
    num = num / 10n;
  }
  else {
    break;
  }

}

console.log(result);