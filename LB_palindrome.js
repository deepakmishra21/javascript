let str = "geeks";


console.log(stringReverse(str, 0, str.length - 1));

function stringReverse(str, start, end) {

  let result = true;
  if (start < end)
    result = str[start] == str[end] ? stringReverse(str, start + 1, end - 1) : false;
  return result;

}