var isHappy = function (n) {
    try {
        if (n == 1) {
            return true;
        }
        var number = n.toString();
        var sqr = 0;
        for (var i = 0; i < number.length; i++) {
            sqr = sqr + (number[i] * number[i]);
        }
        return isHappy(sqr);

    }
    catch (err) {
        return false;
    }

};
console.log(isHappy(1111111))