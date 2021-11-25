var findTheWinner = function (n, k) {
  const friends = new Array(n).fill(0).map((v, i) => i + 1);
  let count = 1;
  let current = 0;
  while (friends.length > 1) {
    if (count === k) {
      count = 1;
      friends.splice(current, 1);
    } else {
      current++;
      count++;
    }
    current = current % friends.length;
  }
  return friends[0];
};
console.log(findTheWinner(6, 5));