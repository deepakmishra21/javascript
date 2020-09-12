function sort(arr) {
    debugger;
    for (var i = 0; i < arr.length; i++) {
        for (var j = 0; j < arr.length - i; j++) {
            var elem = arr[j];
            var elem2 = arr[j + 1];
            if (elem > elem2) {
                arr[j] = elem2;
                arr[j + 1] = elem;
            }
        }
    }
    return arr;
}
var sorted = sort([9, 8, 7, 6, 5, 4, 3, 2, 1]);
debugger;