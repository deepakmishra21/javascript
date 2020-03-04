function append5(val) {
    var out = "";
    let added=false;
    if (val > -1) {
        var str = val.toString();
        for (var i = 0; i < str.length; i++) {
            if (str[i] < 5 && !added) {
                out = out + "5" + str[i];
                added=true;
            }
            else {
                out = out + str[i];
            }
        }
        if(!added){
            out = out + "5";
        }
    }
    else {
        var str = val.toString();
        for (var i = 0; i < str.length; i++) {
            if (str[i] > 5 && !added) {
                out = out + "5" + str[i];
                added=true;
            }
            else {
                out = out + str[i];
            }
        }
        if(!added){
            out = out + "5";
        }
    }
    return out;
}
var data = append5(-167);
console.log(data);
