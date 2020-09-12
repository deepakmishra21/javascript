function getpPermutations(index, arr,perMutation) {
    if (index == arr.length - 1) {
        perMutation.push(arr);
    }
    else {
        for (var j = index; j < arr.length; j++) {
            arr = swap(arr, index, j);
            getpPermutations(index + 1, arr, perMutation.slice());
            arr = swap(arr, index, j);
        }
    }
}
function swap(arr, i, j) {
    let elem = arr[i];
    arr[i] = arr[j];
    arr[j] = elem;
    return arr;
}
var perMutation=[]
var arr = ["A", "B", "C"]
getpPermutations(0, arr,perMutation.slice());
console.log(perMutation);