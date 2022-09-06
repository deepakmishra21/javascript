function power(x, y) {
  if (y === 0) return 1;
  if (y === 1) return x;
  if (y < 0) return 1 / myPow(x, -y);
  if (y % 2 == 0) return power(x * x, y / 2)
  return x * power(x, y - 1);
}
function sqrt(x) {
  let left = 1;
  let right = x;
  let ans = 0;
  while (left < right) {
    let mid = Math.floor((left + right) / 2);
    if (mid * mid == x) {
      return mid;
    }
    else if (mid * mid < x) {
      left = mid + 1;
      ans = mid;
    }
    else {
      right = mid - 1;
    }
  }
  return ans;
}