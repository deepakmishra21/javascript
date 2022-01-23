function printname(age) {
  debugger;
  console.log(this.name + " " + age);
}

let obj1 = { name: 'obj1' }



Function.prototype.mybind = function (...args) {
  debugger; var _this = this;
  return function (...args1) {
    debugger;
    _this.apply(args[0], [...(args.splice(1)), ...args1]);
  }
}

printname.mybind(obj1)(32);
