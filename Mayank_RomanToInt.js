console.log(RomanToInt("III"));

function RomanToInt(s) {
  let translations = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };
  let sum = 0;
  debugger;
  s = s.replaceAll("IV", "IIII").replaceAll("IX", "VIIII");
  s = s.replaceAll("XL", "XXXX").replaceAll("XC", "LXXXX");
  s = s.replaceAll("CD", "CCCC").replaceAll("CM", "DCCCC");

  for (let i = 0; i < s.length; i++) {
    sum = sum + translations[s[i]];
  }
  return sum;

}