function PromisePolyFill(fn) {

  this.name = function () {
    
  }
}


var p = new PromisePolyFill((resolve) => setTimeout(() => reject(1000), 1000));
p.then((data) => {
  console.log(data)
});