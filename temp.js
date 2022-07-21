var countAndSay = function (n) {
  if (n === 1) {
    return '1';
  }
  let str = '1';
  for (let i = 2; i <= n; i++) {
    str = getNext(str);
  }
  function getNext(str) {
    let result = '';
    let count = 1;
    for (let i = 1; i < str.length; i++) {
      if (str[i] === str[i - 1]) {
        count++;
      } else {
        result += count + str[i - 1];
        count = 1;
      }
    }
    result += count + str[str.length - 1];
    return result;
  }
  return str;
};
console.log(countAndSay(1));