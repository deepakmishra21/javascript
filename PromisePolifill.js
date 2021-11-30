var promise = new myPromise((resolve, reject) => { debugger; setTimeout(() => resolve(1000), 1000) });

promise.
  then((value) => { debugger; console.log("pass" + value) }).
  catch((value) => { debugger; console.log("fail" + value) });

function myPromise(executor) {

  var onsettle;
  function resolve(value) {
    debugger;
    onsettle(value);
  }

  function reject(value) {
    debugger;
    onsettle(value);
  }


  this.then = function (resolve) {
    debugger;
    onsettle = resolve;
    return this;
  }

  this.catch = function (reject) {
    debugger;
    onsettle = reject;
    return this;
  }

  executor(resolve, reject);
}