function twoStrings(s1, s2) {
  // Write your code here
  var objS1 = { };
  var objS2 = { };
  let isMatched = false;
  for (let index = 0; index < s1.length; index++) {
    const element = s1[index];
    objS1[element] = element;
  }
  for (let index = 0; index < s2.length; index++) {
    const element = s2[index];
    objS2[element] = element;
  }
  Object.keys(objS1).forEach(element => {
    if (objS2[element]) {
      isMatched = true;
    }
  });
  return isMatched ? "YES" : "NO";
}