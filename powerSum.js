function powerSum(X, N) {
    var a = getPowerSum(X, N, 1);
    return a;
}
function getPowerSum(X, N, num) {
    var value = X - Math.pow(pow, N);
    if (value < 0) {
        return 0;
    }
    else if (value == 0) {
        return 1;
    }
    else {
        return getPowerSum(X, N, num + 1) + getPowerSum(value, N, num + 1);
    }
}
powerSum(10, 2)