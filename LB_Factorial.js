function getFactorial(number) {
  let num = BigInt(number);

  if (num <= 2)
    return 2n;
  else
    return num * getFactorial(num - 1n);

}

var num = getFactorial(45);


console.log(num);