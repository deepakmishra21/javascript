function fibnocciRec(n) {
    if (n <= 1) {
        return n;
    }
    else {
        return fibnocciRec(n - 1) + fibnocciRec(n - 2);
    }
}
function fib(n){
    var f=[];
    f[0]=1;
    f[1]=1;
    for(var i=2;i<=n;i++){
        f[i]=f[i-1]+f[i-2];
    }
    return f[n-1];

}
console.log(fib(9));