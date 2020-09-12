var input = "qqqqfwaqwerfwrvwetvwrtwehxcvpsdkgposdiopajiopjmoigjapjeqjogpije opgjego pegop esjgo pjoiepjgi oepjgioepji";
var obj = {};
for (var i = 0; i < input.length; i++) {
    var chr = input[i];
    if (obj[chr]) {
        obj[chr] = obj[chr] + 1;
    }
    else {
        obj[chr] = 1;
    }
}
for (var key in obj) {
    if (obj.hasOwnProperty(key))
        console.log(key + "-" + obj[key]);
}