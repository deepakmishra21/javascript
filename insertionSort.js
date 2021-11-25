function sort(arr) {
    debugger;
    for (var i = 0; i < arr.length; i++) {
        var j = i; var item = arr[i];
        while (j > 0 && item < arr[j - 1]) {
            var elem = arr[j];
            var elem2 = arr[j - 1];
            arr[j] = elem2;
            arr[j - 1] = elem;
            j--;
        }
    }
    return arr;
}

var sorted = sort([9, 8, 9, 7, 7, 6, 5, 4, 3, 2, 2, 1]);
debugger;