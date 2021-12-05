var anargams = {};
strs.forEach(element => {
  var sortedWord = element.split('').sort()
  if (anargams[sortedWord]) {
    anargams[sortedWord].push(element);
  }
  else {
    anargams[sortedWord] = [element];
  }
});
return Object.values(anargams);