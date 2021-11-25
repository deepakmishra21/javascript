function throat(fn, debounceDelay) {
    var throatTimer;
    return function () {
        if (throatTimer) {
            return;
        }
        throatTimer = setTimeout(() => {
            throatTimer = null;
            fn.apply(this)
        }, debounceDelay);
    }
}
function logMe() {
    console.log(new Date());
}
var d = throat(logMe, 5000);
function onClick() {
    d();
}