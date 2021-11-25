function digitSum(n, k) {
    var str = ""
    for (var i = 0; i < k; i++) {
        str += n.toString();
    }
    return digit_sum(str);
}
function digit_sum(str) {
    if (str.length == 1) {
        return  str;
    }
    else {
        var sumDigit = 0;
        for (var i = 0; i < str.length; i++) {
            sumDigit += parseInt(str[i], 10);
        }
        var d=sumDigit.toString();
        return digit_sum(d);
    }
}
console.log(digitSum(9875, 4))