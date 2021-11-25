//o(n) time o(1) space
var isPalindrom = function (str) {
    var leftIdx = 0, rightIdx = str.length - 1;
    while (leftIdx < rightIdx) {
        if (str[leftIdx] != str[rightIdx]) {
            return false;
        }
        leftIdx++;
        rightIdx--;
    }
    return true;
}
console.log(isPalindrom("abcba", 0));