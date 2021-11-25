function passwordCracker(passwords, loginAttempt, out = []) {
  // Write your code here
  if (!loginAttempt) {
    return out.join(" ");
  }
  else {
    var _elem = "";
    for (let index = 0; index < passwords.length; index++) {
      const element = passwords[index];
      if (loginAttempt.indexOf(element) == 0) {
        _elem = element;
        out.push(_elem);
        loginAttempt = loginAttempt.replace(_elem, "");
        passwordCracker(passwords, loginAttempt, out);
        loginAttempt = _elem + loginAttempt;
        out.pop();
      }
    }
    if (!_elem) {
      return "WRONG PASSWORD";
    }
  }
}
var a = passwordCracker(["because", "can", "do", "must", "we", "what"], "wedowhatwemustbecausewecan");
console.log(a);