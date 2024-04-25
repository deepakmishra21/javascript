var firstUniqChar = function (s) {


  let map = new Map();
  for (let i = 0; i < s.length; i++) {
    if (!map.has(s[i])) {
      map.set(s[i], 1);
    } else {
      const count = map.get(s[i]) + 1;
      map.set(s[i], count);
    }
  }

  for (let j = 0; j < s.length; j++) {
    if (map.get(s[j]) === 1) {
      return j;
    }
  }

  return -1;

};




firstUniqChar('aabb')