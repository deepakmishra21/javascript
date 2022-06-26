// Given a string, find the length of the longest substring in it with no more than M distinct characters;
//Input: String ="moonot",
//M = 3
//Output: 5

function longestSubStr(str, m) {
  let out = '';
  let toReturn = '';
  let sequences = {};

  for (let index = 0; index < str.length; index++) {
    let element = str[index];
    out = out + element;
    let distinctCount = getDistinctCount(out);
    if (distinctCount > m) {
      while (distinctCount > m) {
        out = out.substring(1);//eepak
        distinctCount = getDistinctCount(out);
      }
    }
    if (distinctCount == m) {
      sequences[out] = out.length;
    }
  }



  Object.keys(sequences).forEach(m => {
    if (sequences[m] > toReturn.length) {
      toReturn = sequences[m];
    }
  });
  function getDistinctCount(str) {
    let obj = {};
    str.split('').forEach(m => {
      obj[m] = true;
    });
    return Object.keys(obj).length;
  }
  return toReturn;
}

console.log(longestSubStr('moonot', 3))