///////////////////////////
function sayHi() {
  console.log(name);
  var name = 'BOLD';
  {
    let age = 21;
  }
  console.log(age);
}
sayHi();
//////////////////////
const a = "BOLD";
a = "BOLD 2"
////////////////////
const obj = {
  name: "My Name is BOLD"
};
obj.name = "BOLD";
/////////////
var obj = {
  name: "Bold 1"
}
var obj2 = {
  name: "Bold 2",
}
function printMe() {
  console.log(this.name);
}
printMe();
////////////////


for (var i = 1; i <= 10; i++) {
  setTimeout(function () { console.log(i); }, 1000);
}

/////////////////


console.log("demo 1");

setTimeout(() => { console.log("set timeout") }, 0);

var p = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("ok")
  }, 0);
});
p.then(function (v) { console.log("promise"); });

console.log("demo 2")

///////////////////////////
var x = 5;
var y = 5;
var obj = {
  x: 10,
  y: 20,
  sum: () => {
    console.log(this.x + this.y);
  },
  multiply() {
    console.log(this.x * this.y)
  },
  minus: function () {
    console.log(this.x - this.y);
  }
}
obj.sum();
obj.multiply()
obj.minus();
/////////////////////////////////////////////////
var a = []
for (var index = 0; index < 5; index++) {
  a.push(function () {
    console.log(index);
  })
}
for (var i = 0; i < a.length; i++) {
  a[i]();
}
//////////////////////////
var car = function (model, price) {
  this.model = model;
  this.price = price;
  return model + "_" + price
}
var car1 = new car("maruti", 1000);
var car2 = car("tata", 2000);
console.log(car1);
console.log(car2);
//////////////////////////////
function outer() {
  var a = 10;
  return function () {
    var a = 20;
    inner();
  }
  function inner() {
    console.log(a);
  }
}
outer()();
/////////////////////////////
{
  var moo = "Mooo"
  let baz = "Bazz";
  console.log(moo, baz);
}
console.log(moo);
console.log(baz);
//////////////////////////
var foo = "Foo";
let bar = "Bar";
console.log(this.foo);
console.log(this.bar);
//////////////////////////
//polyfilll or reverse a string
if (!String.prototype.reverse) {
  String.prototype.reverse = function (data) {
    return this.split('').reverse().join('')
  }
}
var a = "deepak".reverse();
///
if (!Function.prototype.myCall) {
  Function.prototype.myCall = function (obj, ...arg) {
    this.call(obj, ...arg);
  }
}
////////////////
var counter = 1;
function outer() {
  var counter = 5;
  function increase() {
    counter++;
  }
  function print() {
    console.log(counter);
  }
  return {
    increase, print
  }
}
var c = outer();
c.increase();
console.log(counter);
c.print()
outer().increase();
outer().print();
/////////////////////////
var a = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("ok")
  }, 1000);
});
a.then((data) => {
  debugger;
})
///////////////////////
var person = { name: "deepak mishra", firstName: "deepak" }
const { name, firstName } = person;
const { name: firstName } = person;
///////////////////////////
function myNumbers() {
  let n = 0;
  let done = false;
  function next() {
    n += 10; {

      if (n == 100) {
        done: true;
      }
    }
    return { value: n, done };
  }
  return { next, n, done };
}
/////////////
this.state = {
  count: 0,
}
updateMe = () => {
  this.setState({ count: this.state.count + 1 })
  this.setState({ count: this.state.count + 1 })
  this.setState({ count: this.state.count + 1 });
  console.log(this.state.count);
}
this.updateMe();

/////////////////////////////////////////////


for (var i = 0; i < 10 i++) {
  setTimeout(() => { console.log(i); }, 1000)
}
////////////////////////////////
setTimeout(() => { console.log("1") }, 0);
console.log("0");
0
1
/////////////////////////////////////

let num = 0;
async function increment() {
  num += await 2;
  console.log(num);
}
increment();
num += 1;
console.log(num);

///////////////////////////////////////////

let arr = ['a', 'A', 'C', 'Z', 'b', 'B', 'd', 'E', 'z']
//a,C,Z,b,d,E
let arr = [1, 2, 3, 1, 2, 3, 1, 2, 3, 4, 5, 6, 4, 5, 6, 7, 8, 9, 7, 8, 9];
console.log(RemoveDuplicates(arr));

let arr = [9, 8, 7, 6, 1, 2, 3, 1, 2, 3, 1, 2, 3, 4, 5, 6, 4, 5, 6, 7, 8, 9, 7, 8, 9];
let out = [1, 2, 3, 4, 5, 6, 7, 8, 9]

https://onecompiler.com/javascript/3xttmethh
///////////////////////////////////////////////

let i = 1;
var j = 1;
a();
function a() {

  console.log("1:" + t)
  console.log("2:" + k)
  {
    let k = 1;
    var t = 1;
    console.log("3:" + k);
    console.log("4:" + t);
  }
  console.log("6:" + t);
  // console.log("5:" + k);


}

console.log("7:" + t)
console.log("8:" + k)

///////////////////////////
function Counter() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setCount(count + 1);
    }, 1000);
    return () => clearInterval(id);
  }, []);

  return <h1>{count}</h1>;
}
///

const debounce = (callback, delay) => {
};
const handleSearch = (e) => {
  console.log(txtSearch.current.value);
};
const debouncedSearch = debounce(handleSearch, 1000);

<input
  placeholder="search with debounce"
  type="text"
  name="txtSearch"
  ref={txtSearch}
  onChange={debouncedSearch}
/>
///
function Counter() {
  const [count, setCount] = useState(0);

  useEffect(() => {

  }, []);

  return <h1>{count}</h1>;
}
/////////////////////
function add() {
  var a = "OUT PUT 1";
  {
    var a = "OUT PUT 2";
  }
  console.log(a);
}
////////////////////