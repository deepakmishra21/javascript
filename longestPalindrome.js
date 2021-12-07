var longestPalindrome = function (str) {
  var len = str.length;
  if (len == 0) {
    return "";
  }
  var obj = { leftIdx: 0, rightIdex: 1 };
  for (var i = 0; i < len; i++) {
    var odd = getPalindromString(i - 1, i + 1, str, len);
    var even = getPalindromString(i - 1, i, str, len);
    var longest = getLongest(odd, even);
    obj = getLongest(longest, obj);
  }
  var out = "";
  for (var j = obj.leftIdx; j < obj.rightIdex; j++) {
    out += str[j];
  }
  return out;
  function getLongest(v1, v2) {
    if (v1.rightIdex - v1.leftIdx <= v2.rightIdex - v2.leftIdx) {
      return v2;
    }
    return v1;
  }
  function getPalindromString(leftIdx, rightIdex, str, len) {
    while (leftIdx >= 0 && rightIdex < len) {
      if (str[leftIdx] != str[rightIdex]) {
        break;
      }
      leftIdx = leftIdx - 1;
      rightIdex = rightIdex + 1;
    }
    return { leftIdx: leftIdx + 1, rightIdex };
  }
};
console.log(new Date());
console.log(longestPalindrome("civilwartestingwhetherthatnaptionoranynartionsoconceivedandsodedicatedcanlongendureWeareqmetonagreatbattlefiemldoftzhatwarWehavecometodedicpateaportionofthatfieldasafinalrestingplaceforthosewhoheregavetheirlivesthatthatnationmightliveItisaltogetherfangandproperthatweshoulddothisButinalargersensewecannotdedicatewecannotconsecratewecannothallowthisgroundThebravelmenlivinganddeadwhostruggledherehaveconsecrateditfaraboveourpoorponwertoaddordetractTgheworldadswfilllittlenotlenorlongrememberwhatwesayherebutitcanneverforgetwhattheydidhereItisforusthelivingrathertobededicatedheretotheulnfinishedworkwhichtheywhofoughtherehavethusfarsonoblyadvancedItisratherforustobeherededicatedtothegreattdafskremainingbeforeusthatfromthesehonoreddeadwetakeincreaseddevotiontothatcauseforwhichtheygavethelastpfullmeasureofdevotionthatweherehighlyresolvethatthesedeadshallnothavediedinvainthatthisnationunsderGodshallhaveanewbirthoffreedomandthatgovernmentofthepeoplebythepeopleforthepeopleshallnotperishfromtheearth"));
console.log(new Date());