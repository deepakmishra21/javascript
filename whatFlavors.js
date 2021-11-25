function whatFlavors(cost, money) {
  // Write your code here
  let index1 = 0;
  let index2 = 0;
  for (let i = 0; i < cost.length; i++) {
    const element1 = cost[i];
    for (let j = i + 1; j < cost.length; j++) {
      const element2 = cost[j];
      if (element1 + element2 == money) {
        index1 = i + 1;
        index2 = j + 1;
      }
    }
  }
  console.log(index1 + " " + index2);

}
console.log(whatFlavors([1, 4, 5, 3, 2], 5))