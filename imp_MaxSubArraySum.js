arr = [-2, -3, 4, -1, -2, 1, 5, -3];
console.log(maxSubarraySum(arr));

function maxSubarraySum(arr) {

  let max_ending_here = 0;
  let max_so_far = Number.MIN_VALUE;

  for (let i = 0; i < arr.length; i++) {

    if (arr[i] <= max_ending_here + arr[i])
      max_ending_here += arr[i];
    else
      max_ending_here = arr[i];

    if (max_so_far < max_ending_here)
      max_so_far = max_ending_here;
  }

  return max_so_far;
}