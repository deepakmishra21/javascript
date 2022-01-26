findGCD = function (nums) {
  nums.sort((a, b) => a - b);
  return gcd(nums[0], nums[nums.length - 1])
}
function gcd(a, b) {
  if (a == 0)
    return b;
  if (b == 0)
    return a;

  if (a == b)
    return a;

  if (a > b)
    return gcd(a - b, b);
  return gcd(a, b - a);
}

function gcd(a, b) {

  if (b == 0) {
    return a;
  }
  return gcd(b, a % b);
}
findGCD([2, 5, 6, 9, 10]);