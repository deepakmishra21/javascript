/*
 * Complete the 'checkMagazine' function below.
 *
 * The function accepts following parameters:
 *  1. STRING_ARRAY magazine
 *  2. STRING_ARRAY note
 */

function checkMagazine(magazine, note) {
  // Write your code here
  let matched = false;
  magazine = magazine.sort();
  note = note.sort();
  for (let i = 0; i < note.length; i++) {
    matched = false;
    var not = note[i];
    for (let j = 0; j < magazine.length; j++) {
      var mag = magazine[j];
      if (not == mag) {
        matched = true;
        break;
      }
    }
  }
  console.log(matched ? "Yes" : "No");
}
