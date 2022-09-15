Array.prototype.meraMap = function (cb) {
  let len = this.length;
  let arr = [];
  for (let index = 0; index < len; index++) {
    arr.push(cb(this[index]));
  }
  return arr;
}
var a = [2, 2, 3, 4].meraMap(e => e * 2);
console.log(a);