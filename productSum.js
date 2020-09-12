function productSum(arr, multiplier) {
    var sum = 0;
    for (var i = 0; i < arr.length; i++) {
        var elem = arr[i];
        if (Array.isArray(elem)) {
            sum = sum + productSum(elem, multiplier + 1);
        }
        else {
            sum = sum + elem;
        }
    }
    return sum * multiplier;
}
debugger
var sum = productSum([5, 2, [7, -1], 3, [6, [-13, 8], 4]], 1);
debugger;