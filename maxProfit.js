var maxProfit = function (prices) {
    var profit = 0;
    for (var i = 1; i < prices.length; i++) {
        var prev = prices[i - 1];
        var cur = prices[i];
        if (cur > prev) {
            profit += cur - prev;
        }
    }
    return profit;
};
console.log(maxProfit([7, 1, 5, 3, 6, 4]))