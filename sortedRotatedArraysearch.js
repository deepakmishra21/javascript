var a = [3, 4, 5, 1, 2];
var key = 5;
function search(a, key) {
  let index = getIndex(a, 0, a.length - 1, key);
  return index;

}
function getIndex(arr, left, right, key) {
  if (left > right) {
    return - 1;
  }
  let mid = Math.floor((left + right) / 2);
  if (arr[mid] == key) {
    return mid;
  }
  if (arr[left] < arr[mid]) {
    if (key <= arr[mid] && key >= arr[left]) {
      return getIndex(arr, left, mid - 1, key);
    }
    return getIndex(arr, mid + 1, right, key);
  }
  if (key >= arr[mid] && key <= arr[right]) {
    return search(arr, mid + 1, right, key);
  }
  return search(arr, left, mid - 1, key);
}
console.log(search(a, key));
