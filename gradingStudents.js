function gradingStudents(grades) {
  // Write your code here
  let out = [];
  for (let index = 0; index < grades.length; index++) {
    let element = grades[index];
    if (element < 38) {
      out.push(element)
    }
    else if ((element + 1) % 5 == 0) {
      out.push((element + 1))
    }
    else if ((element + 2) % 5 == 0) {
      out.push((element + 2))
    }
    else {
      out.push(element)
    }

  }
  return out;
}
console.log(gradingStudents([73, 67, 38, 33]))