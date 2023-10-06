"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var User = {
    name: "Sreeparna Paul",
    email: "sree@yopmail.com",
    isActive: true
};
function createUser(_a) {
    var string = _a.name, boolean = _a.isPaid;
}
var newUser = { name: "Sree", isPaid: false, email: "sree@gmail.com" };
createUser(newUser);
function createCourse() {
    return { name: "react", price: 1000 };
}
