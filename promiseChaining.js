var firstMethod = function () {
  var promise = new Promise(function (resolve, reject) {
    setTimeout(function () {
      resolve('firstMethod ');
    }, 2000);
  });
  return promise;
};


var secondMethod = function (someStuff) {
  var promise = new Promise(function (resolve, reject) {
    setTimeout(function () {
      resolve(someStuff);
    }, 2000);
  });
  return promise;
};

var thirdMethod = function (someStuff) {
  var promise = new Promise(function (resolve, reject) {
    setTimeout(function () {
      resolve(someStuff);
    }, 3000);
  });
  return promise;
};
firstMethod("firstMethod")
  .then((res) => {
    return secondMethod(res + " secondMethod")
  })
  .then((res) => {
    return thirdMethod(res + " thirdMethod")
  }).then((res) => {
    console.log(res);
  });
