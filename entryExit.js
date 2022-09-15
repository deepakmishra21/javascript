const records1 =
  [
    ["Paul", "enter"],
    ["Paul", "exit"],
    ["Paul", "exit"],
    ["Paul", "enter"]
  ]
  ;
var exitHistory = {};
var enterHistory = {};
var exit = {};
var enter = {};
records1.forEach(m => {
  let name = m[0];
  let status = m[1];
  if (status == "enter") {
    if (enterHistory[name]) {
      enter[name] = 1;
    }
    enterHistory[name] = 1;
  }
  else if (status == "exit") {
    exitHistory[name] = 1;
    if (enterHistory[name]) {
      delete enterHistory[name];
      delete exitHistory[name];
    }
    else {
      delete exitHistory[name];
      exit[name] = 1;
    }
  }
});
Object.keys(enterHistory).forEach(m => {
  enter[m] = 1;
});
console.log('entry', Object.keys(exit));
console.log('exit', Object.keys(enter));
// var exit = ["Paul", "Steve", "Curtis"];//
// var enter = ["Martha", "Curtis", "Paul"];
