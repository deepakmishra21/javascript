function sort(arr) {
    let currentIndex = 0;
    debugger;
    for (var i = 0; i < arr.length; i++) {
        let smallestIndex = currentIndex;
        for (var j = currentIndex; j < arr.length; j++) {
            if (arr[smallestIndex] > arr[j]) {
                smallestIndex = j;
            }
        }
        var elem = arr[smallestIndex];
        var elem2 = arr[currentIndex];
        arr[smallestIndex] = elem2;
        arr[currentIndex] = elem;
        currentIndex++;
    }
    return arr;
}


var sorted = sort([9, 8, 9, 7, 7, 6, 5, 4, 3, 2, 2, 1]);
debugger;