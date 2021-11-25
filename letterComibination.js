var letterCombinations = function (digits) {
    var mapping = {
        2: "abc",
        3: "def",
        4: "ghi",
        5: "jkl",
        6: "mno",
        7: "pqrs",
        8: "tuv",
        9: "wxyz"
    }
    var arr = [];
    for (var i = 0; i < digits.length; i++) {
        arr.push(mapping[digits[i]]);
    }
    var result = {}
    printDigit(arr, 0, "", result);
    return Object.keys(result);

};
function printDigit(arr, index, str, result) {
    var len = arr.length;
    if(arr.length==0){
       
    }
    else if (len == index) {
        result[str] = str;
    }
    else {
        var curArr = arr[index];
        var curArrLen = curArr.length;
        for (var i = 0; i < curArrLen; i++) {
            var elem = curArr[i];
            str = str + elem;
            printDigit(arr, index + 1, str, result);
            str = str.substring(0, index) + str.substring(index + 1);
        }
    }

}
console.log(letterCombinations("23"));