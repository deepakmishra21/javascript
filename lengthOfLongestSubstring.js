var lengthOfLongestSubstring = function (s) {
    if(!s){
        return 0;
    }
    var visited = {};
    var startIndex = 0;
    var longest = { leftIdx: 0, rightIdx: 1 };
    s.split('').forEach((element, index) => {
        if (visited[element] || visited[element]==0) {
            startIndex = Math.max(startIndex, visited[element] + 1);
        }
        if (longest.rightIdx - longest.leftIdx < (index + 1 - startIndex)) {
            longest = { leftIdx: startIndex, rightIdx: index + 1 }
        }
        visited[element] = index;
    });
     return longest.rightIdx - longest.leftIdx;
};
console.log(lengthOfLongestSubstring("abcabcbb"))