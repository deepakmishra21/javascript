function birthdayCakeCandles(candles) {
  var max = 0;
  var obj = { };
  for (var i = 0; i < candles.length; i++) {
    if (candles[i] > max) {
      max = candles[i];
    }
    if (!obj[candles[i]]) {
      obj[candles[i]] = 1;
    }
    else {
      obj[candles[i]] = obj[candles[i]] + 1;
    }
  }
  return obj[max];
}
console.log(birthdayCakeCandles([3, 2, 1, 3]))