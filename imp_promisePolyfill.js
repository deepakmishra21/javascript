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
var url1 = fetch('url1');
var url2 = fetch('url2');
var url3 = fetch('url3');
var promiseArr = [url1, url2, url3]
Promise.allSettled(promiseArr).then((resp) => {
  let out = [{
    url1: resp[0],
    url2: resp[1],
    url3: resp[2]
  }];
  return out;
});
Promise.prototype.allSettled = function (promiseArr) {
  let callback = null;
  let response = new Array(promiseArr.length).fill(0);
  function then(_callBack) {
    callback = _callBack;

  }
  arr.forEach((element, index) => {
    element.then((resp) => {
      promiseResolved(index, resp);
    });
  });
  function promiseResolved(index, resp) {
    response[index] = resp;
    let emptyResp = resp.findIndex(m => m == 0);
    if (emptyResp == -1) {
      callback(response);
    }
  }
  return { then };
}