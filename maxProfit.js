var maxProfit = function (prices) {
  var profit = 0;
  var min = prices[0];
  for (var i = 1; i < prices.length; i++) {
    if (prices[i] < min) {
      min = prices[i];
    } else {
      profit = Math.max(profit, prices[i] - min);
    }
  }
  return profit;
};