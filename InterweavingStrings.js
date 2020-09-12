function areInerWeaving(one, two, three, i, j) {
    if (cache[i + "|" + j]) {
        console.log("Cache Used", cache)
        return true;
    }
    var k = i + j;
    if (k == three.length - 1) {
        return true;
    }
    if (i < one.length && one[i] == three[k]) {
        cache[i + "|" + j] = areInerWeaving(one, two, three, i + 1, j)
        if (cache[i + "|" + j]) {
            return true;
        }
    }
    if (j < two.length && two[j] == three[k]) {
        cache[i + "|" + j] = areInerWeaving(one, two, three, i, j + 1);
        return cache[i + "|" + j]
    }
    cache[i + "|" + j] = false;
    return false;
}
debugger
var cache = {};
var p = areInerWeaving("aaa", "aaaf", "aaafaaa", 0, 0);
debugger;