var isAnagram = function (s, t) {

  let sArray = s.split('').sort();
  let tArray = t.split('').sort();

  if (sArray.length != tArray.length) {
    return false;
  } else {
    for (let i = 0; i < sArray.length; i++) {
      if (sArray[i] != tArray[i]) {
        return false;
      }
    }

    return true;
  }
}