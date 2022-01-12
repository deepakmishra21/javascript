
function maxRowColSum(arr) {
  var i, j;
  let _map = new Map()

  let _rowSum = 0;
  let _colSum = 0;
  for (i = 0; i < m; ++i) {
    for (j = 0; j < n; ++j) {
      _rowSum = _rowSum + arr[i][j];
      _colSum = _colSum + arr[j][i];
    }
    _map.set("R" + i, _rowSum);
    _map.set("C" + i, _colSum);
    _rowSum = 0
    _colSum = 0;
  }
  document.write("Max is ", [..._map].sort((a, b) => b[1] - a[1])[0][1]);
}

var m = 4;
var n = 4;
var i, j;
var arr = new Array(m).fill(0);
for (var k = 0; k < m; k++) {
  arr[k] = new Array(n).fill(0);
}
var x = 1;
for (i = 0; i < m; i++)
  for (j = 0; j < n; j++)
    arr[i][j] = x++;
row_sum(arr);
column_sum(arr);
maxRowColSum(arr);



function row_sum(arr) {

  var i, j, sum = 0;

  document.write("<br>" + "\nFinding Sum of each row:" + "<br>");

  for (i = 0; i < m; ++i) {
    for (j = 0; j < n; ++j) {

      sum = sum + arr[i][j];
    }

    document.write("Sum of the row "
      + i + " = " + sum
      + "<br>");

    sum = 0;
  }
}

function column_sum(arr) {

  var i, j, sum = 0;

  document.write("<br>" + "Finding Sum of each column:" + "<br>");

  for (i = 0; i < m; ++i) {
    for (j = 0; j < n; ++j) {

      sum = sum + arr[j][i];
    }

    document.write("Sum of the column "
      + i + " = " + sum
      + "<br>");

    sum = 0;
  }
}
