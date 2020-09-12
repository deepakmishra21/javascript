function debouce(fn, debounceDelay) {
    var debounceTimer;
    return function () {
        clearTimeout(debounceTimer);
        debounceTimer = setTimeout(() => {
            fn.apply(this);
        }, debounceDelay);
    }
}
function logMe() {
    console.log(new Date());
}
var dbnc=debouce(logMe, 10000);
function onClick() {
    dbnc();
}