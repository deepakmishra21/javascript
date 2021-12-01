function PromisePolyFill(fn) {

  let _thenCB;
  let _catchCB;
  function resolve(data) {
    _thenCB(data);
  }
  function reject(data) {
    _catchCB(data);
  }
  this.then = function (thenCB) {
    _thenCB = thenCB;
    return this;
  }
  this.catch = function (catchCB) {
    _thenCB = thenCB;
    return this;
  }
  fn(resolve, reject);
}


var p = new PromisePolyFill((resolve, reject) => setTimeout(() => resolve(1000), 1000));
p.then((data) => {
  console.log(data)
});