/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
    var opening = "({[";
    var closing = "]})";
    var matchings = {
        ")": "(",
        "}": "{",
        "]": "["
    }
    var stack = [];
    for (var i = 0; i < s.length; i++) {
        var elem = s[i];
        if (opening.indexOf(elem) > -1) {
            stack.push(elem);
        }
        else if (closing.indexOf(elem) > -1) {
            if (stack.length == 0) {
                return false;
            }
            else if (stack[stack.length - 1] == matchings[elem]) {
                stack.pop();
            }
            else {
                return false;
            }
        }
    }
    return stack.length == 0;
};
console.log(isValid("()[]{}"));