function timeConversion(s) {
  let val = s.split(":");
  let AMPM = val[2][2] + val[2][3];
  if (val[0] == 12) {
    if (AMPM == "AM") {
      val[0] = "00";
    }
  }
  else {
    if (AMPM == "PM") {
      val[0] = parseInt(val[0], 10) + 12;
    }
  }
  val[2] = val[2][0] + val[2][1];
  return val.join(":");
}
console.log(timeConversion("12:05:45AM"))