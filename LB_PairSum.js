arr = [10, 12, 10, 15, -1, 7, 6, 5, 4, 2, 1, 1, 1];

console.log(countPair(arr, 11));

function countPair(arr, sum) {

  let count = 0;
  let map = new Map();

  for (let i = 0; i < arr.length; i++) {

    if (!map.has(arr[i]))
      map.set(arr[i], 1);
    else
      map.set(arr[i], map.get(arr[i]) + 1);
  }

  for (let i = 0; i < arr.length; i++) {

    if (map.get(sum - arr[i]))
      count += map.get(sum - arr[i])

    if (sum - arr[i] == arr[i])
      count--;

  }

  return count / 2;

}