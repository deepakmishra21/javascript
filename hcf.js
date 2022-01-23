function hcf(a, b) {

  return a * b / gcd(a, b);
  function gcd(a, b) {

    // Everything divides 0
    if (b == 0) {
      return a;
    }
    return gcd(b, a % b);
  }
}