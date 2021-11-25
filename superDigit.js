function superDigit(n, k) {
  var num = digit_sum(n.toString());
  return digit_sum((num * k).toString());
}
function digit_sum(str) {
  if (str.length == 1) {
    return str;
  }
  else {
    var sumDigit = 0;
    for (var i = 0; i < str.length; i++) {
      sumDigit += parseInt(str[i], 10);
    }
    var d = sumDigit.toString();
    return digit_sum(d);
  }
}
console.log(superDigit(148, 3))