function rotLeft(a, d) {
  // Write your code here
  var b = a.splice(0, d);
  a = a.concat(b);
  return a;
}
console.log(rotLeft([1, 2, 3, 4, 5], 4))