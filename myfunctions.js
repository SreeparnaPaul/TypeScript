"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function addNum(num) {
    return num + 2;
}
addNum(5);
function getUpper(val) {
    return val.toUpperCase();
}
getUpper("abc");
function signUpUser(name, email, isLoggedIn) {
}
var loginUser = function (name, email, isLoggedIn) {
    if (isLoggedIn === void 0) { isLoggedIn = false; }
};
loginUser("abc", "abc@yopmail.com");
signUpUser("abc", "abc@yopmail.com", false);
