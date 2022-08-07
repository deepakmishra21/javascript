/**
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 */
var divide = function (dividend, divisor) {
    if (divisor === 0) {
        return dividend > 0 ? 2147483647 : -2147483648;
    }
    if (dividend === 0) {
        return 0;
    }
    let sign = (dividend > 0 && divisor > 0) || (dividend < 0 && divisor < 0) ? 1 : -1;
    dividend = Math.abs(dividend);
    divisor = Math.abs(divisor);
    let res = 0;
    while (dividend >= divisor) {
        let temp = divisor;
        let count = 1;
        while (dividend >= (temp << 1)) {
            temp <<= 1;
            count <<= 1;
        }
        dividend -= temp;
        res += count;
    }
    return sign * res;
};