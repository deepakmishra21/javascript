
function morganAndString(a, b) {
    var out = "";
    debugger;
    while (a || b) {
        if (a && b) {
            var chr1 = a[0];
            var chr2 = b[0];
            if (chr1 < chr2) {
                out = out + chr1;
                a = a.replace(chr1, "");
            }
            else if (chr1 > chr2) {
                out = out + chr2;
                b = b.replace(chr2, "");
            }
            else if (chr1 == chr2) {
                out = out + chr1;
                var i = 0;
                var j = 0;
                for (var k = 0; k < (a.length + b.length); k++) {
                    if (a == b) {
                        a = a.replace(a[0], "");
                        break;
                    }
                    else if (a[i] && b[j]) {
                        if (a[i] < b[j]) {
                            a = a.replace(a[0], "");
                            break;
                        }
                        else if (a[i] > b[j]) {
                            b = b.replace(b[0], "");
                            break;
                        }
                    }
                    else if (a[i]) {
                        a = a.replace(a[0], "");
                        break;
                    }
                    else if (b[j]) {
                        b = b.replace(b[0], "");
                        break;
                    }
                    else if (i > a.length && j > b.length) {
                        a = a.replace(a[0], "");
                        break;
                    }
                    i++;
                    j++;
                }
            }
        }
        else {
            if (a) {
                out = out + a;
                a = "";
            }
            else if (b) {
                out = out + b;
                b = "";
            }
        }
    }
    return out;
}
morganAndString("ABACABA", "ABACABA")