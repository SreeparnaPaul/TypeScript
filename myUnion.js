"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var score = 34;
var newUser = { name: "Sree", id: 23 };
newUser = { username: "Sreeparna", id: 23 };
function getDbId(id) {
    if (typeof id === "string") {
        id.toLowerCase();
    }
    console.log("id is ".concat(id));
}
getDbId(4); // getDbId("8")
//array
var data = [1, 2, 3, 4, 5];
var data2 = ["1", "2", "3", "4", "5"];
var data3 = ["1", "2", "3", "4", "5", 8, 6, false];
var seatAllotment;
seatAllotment = "aisle";
