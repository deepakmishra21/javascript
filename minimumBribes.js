function minimumBribes(q) {
  var ans = 0;
  function max(a, b) {
    if (a > b) {
      return a;
    }
    else {
      return b;
    }
  }
  for (var i = q.length - 1; i >= 0; i--) {
    if (q[i] - (i + 1) > 2) {
      console.log("Too chaotic");
      return;
    }
    for (var j = max(0, q[i] - 2); j < i; j++) {
      if (q[j] > q[i]) ans++;
    }
  }
  console.log(ans);
}
minimumBribes([2, 1, 5, 3, 4])