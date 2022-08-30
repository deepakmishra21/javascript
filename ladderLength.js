/**
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {number}
 */
var ladderLength = function (beginWord, endWord, wordList) {
  let queue = [beginWord];
  let visited = new Set();
  let step = 1;
  while (queue.length > 0) {
    let size = queue.length;
    for (let i = 0; i < size; i++) {
      let word = queue.shift();
      if (word === endWord) {
        return step;
      }
      for (let w of wordList) {
        if (visited.has(w)) continue;
        if (isOneEdit(word, w)) {
          queue.push(w);
          visited.add(w);
        }
      }
    }
    step++;
  }
  return 0;
  function isOneEdit(s1, s2) {
    let diff = 0;
    for (let i = 0; i < s1.length; i++) {
      if (s1[i] !== s2[i]) {
        diff++;
        if (diff > 1) return false;
      }
    }
    return diff === 1;
  }

};
console.log(ladderLength("hit", "cog", ["hot", "dot", "dog", "lot", "log", "cog"]))