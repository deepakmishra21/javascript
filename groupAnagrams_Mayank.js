console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]));

function groupAnagrams(strs) {
  debugger;
  let result = [];
  let _map = new Map();
  for (let i = 0; i < strs.length; i++) {

    let key = strs[i].split('').sort().join();
    if (!_map.has(key)) {
      _map.set(key, strs[i])
    }
    else {
      let value = _map.get(key);
      _map.set(key, value + ',' + strs[i]);

    }
  }

  _map.forEach((value, key, map) => {
    result.push(value.split(','));
  });

  return result;

}

