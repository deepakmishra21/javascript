var input=[1,2,42,31,4234,4,1,2,3,4,66,22,323,32,32,32,3,654,8,768,69,9,432,,56,9,23,63,846,32,96,3,46,583,694,46,,469];
var len=5;
var output=input.slice(0,len);
for(var i=len;i<input.length;i++){
    var elem=input[i];
    if(elem>=output[0]){
        output.shift();
        output.push(elem)
    }
}
console.log(output);