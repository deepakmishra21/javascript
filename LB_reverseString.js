let str = "geeksforgeeks";


console.log(stringReverse(str, 0, str.length - 1));

function stringReverse(str, start, end) {

  let result = '';
  if (start < end)
    result = str[end] + stringReverse(str, start + 1, end - 1) + str[start];
  else
    result = str[start];
  return result;

}