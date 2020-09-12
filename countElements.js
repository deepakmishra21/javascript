var countElements = function (arr) {
    var count = 0;
    arr.forEach(element => {
        if (arr.findIndex(m => m == element + 1) > -1) {
            count++;
        }
    });
    return count;
};
console.log(countElements([1, 1, 3, 3, 5, 5, 7, 7]))