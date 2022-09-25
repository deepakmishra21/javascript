function jumpingOnClouds(array) {
  var count = 0;
  for (let index = 0; index < array.length;) {
    var step_1 = -1;
    var step_2 = -1;
    if (array.length > index + 1) {
      step_1 = array[index + 1];
    }
    if (array.length > index + 2) {
      step_2 = array[index + 2];
    }
    if (step_1 == -1) {
      break;
    }
    if (step_1 == 1 && step_2 == 1) {
      break;
    }
    if (step_2 == 0) {
      count = count + 1;
      index = index + 2;
    } else if (step_1 == 0) {
      count = count + 1;
      index = index + 1;
    }
  }
  return count;
}
console.log(jumpingOnClouds([0, 0, 1, 0, 0, 1, 0]));