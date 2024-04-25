var strStr = function (haystack, needle) {


  for (let i = 0; i < haystack.length; i++) {

    if (haystack[i] === needle[0]) {
      let counter = 0;
      for (let j = 0; j < needle.length; j++) {
        if (haystack[i + j] === needle[j])
          counter++;
      }

      if (counter === needle.length)
        return i;
    }

  }
  return -1;

};

strStr("sadbutsad", "sad");