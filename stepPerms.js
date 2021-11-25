function stepPerms(n) {
  // Write your code here
  let obj = {};
  obj["1"] = 1;
  obj["2"] = 2;
  obj["3"] = 4;
  obj["4"] = 6;

  for (let index = 4; index <= n; index++) {
    obj[index] = obj[index - 3] + obj[index - 2] + obj[index - 1]
  }
  return obj[n];
}
console.log(stepPerms(5, {}));