var isPalindrome = function (s) {

  let resultString = '';

  for (let i = 0; i < s.length; i++) {
    const cc = s.charCodeAt(i)
    if ((cc > 64 && cc < 91) || (cc > 96 && cc < 123) || (cc > 47 && cc < 58)) {
      resultString += s[i].toLowerCase();
    }
  }

  let start = 0;
  let end = resultString.length - 1;

  if (resultString.length < 2)
    return true;

  while (start < end) {
    if (resultString[start] != resultString[end]) {
      return false;
    }
    start++;
    end--;
  }

  return true;

};

isPalindrome("0P")