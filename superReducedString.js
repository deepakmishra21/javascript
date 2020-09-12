function superReducedString(s) {
    var out = s;
    for (var i = 0; i <= s.length; i++) {
        for (var j = 97; j <= 123; j++) {
            var chr = String.fromCharCode(j);
            out = out.replace(chr + chr, "");
        }
    }
    return out || "Empty String";
}
superReducedString("baab");