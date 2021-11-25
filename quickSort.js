function sort(arr) {
    quickSort(arr, 0, arr.length - 1);
    return arr;
}
function quickSort(arr, start, end) {
    if (start >= end) {
        return;
    }
    var pIndex = start;
    var left = start + 1;
    var right = end;
    while (right >= left) {
        if (arr[left] > arr[pIndex] && arr[right] < arr[pIndex]) {
            arr = swap(left, right, arr)
        }
        if (arr[left] <= arr[pIndex]) {
            left++;
        }
        if (arr[right] >= arr[pIndex]) {
            right--;
        }
    }
    arr = swap(pIndex, right, arr);
    quickSort(arr, start, right - 1);
    quickSort(arr, right + 1, end);
}
debugger;
var sorted = sort([8, 5, 2, 9, 5, 6, 3]);
debugger;