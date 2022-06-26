function calculateBlockLength(str) {
  let maxLength = 0;
  var _map = [];
  var _temp = '';
  var _found = false;
  for (let index = 0; index < str.length; index++) {
    let element = str[index];
    _temp = _temp + element;
    if (str[index + 1] && element == str[index + 1]) {
      _found = true;
    }
    else {
      _found = false;
    }
    if (!_found) {
      if (maxLength < _temp.length) {
        maxLength = _temp.length;
      }
      _map.push(_temp);
      _temp = '';
    }
  }
  let toReturn = 0;
  _map.forEach(element => {
    let diff = maxLength - element.length;
    if (diff > 0) {
      _found = true;
      toReturn = toReturn + diff;
    }
  });
  return toReturn == 0 ? -1 : toReturn;
}
console.log(calculateBlockLength('aaabbbaaa'));//O(n)
