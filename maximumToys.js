function maximumToys(prices, k) {

  var n = prices.length;
  var item = 0;
  var amount = 0;
  prices = prices.sort(function (a, b) { return a - b; });
  for (var i = 0; i < n; i++) {
    if (prices[i] + amount <= k) {
      amount = amount + prices[i];
      item++;
    }
    else {
      break;
    }
  }
  return item;
}
console.log(maximumToys([1, 12, 5, 111, 200, 1000, 10], 50))
