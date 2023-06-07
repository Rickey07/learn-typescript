"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var greetings = "hello world";
console.log(greetings);
var numbers = [1, 2, 3, 4];
// Explicit Type Checking
function addNumbers(num) {
    return num + 2;
}
addNumbers(5);
function getUpper(str) {
    return str.toUpperCase();
}
console.log(getUpper("Hello world"));
function greet(person, date) {
    console.log("Hello ".concat(person, " today is ").concat(date.toDateString()));
}
greet("Prabadhya", new Date());
// function getValue(myVal:number) {
//     if(myVal>5) return true
//     return "200 OK"
// }
// Check return type and parameter Type
var getHello = function (s) {
    return "Hello";
};
var heroes = ["Thor", "Captain America", "Iron-Man"];
heroes === null || heroes === void 0 ? void 0 : heroes.map(function (hero) {
    return "Hero is ".concat(hero);
});
// Void Type to be used when function doesn't return anything
function helloWorld(errorMessage) {
    console.log(errorMessage);
}
helloWorld("Hello world");
// Union Types
function welcomeMessage(x) {
    if (Array.isArray(x)) {
        console.log("Hello ".concat(x.join(" and ")));
    }
    else {
        console.log("Welcome Lone Traveller" + x);
    }
}
var passengers = ["Prabadhya", "Harshit", "Goutam"];
var passenger = "Bhavesh";
welcomeMessage(passenger);
// Objects
var user = {
    name: "Prabadhya",
    email: "Rickeyrickey747@gmail.com",
    isActive: true
};
function createUser(_a) {
    var string = _a.name, boolean = _a.isPaid;
}
createUser({ name: "Prabadhya", isPaid: true });
function createCourse() {
    return { name: "React JS", price: 399 };
}
var newPerson = {
    name: "Prabadhya",
    class: 6,
    age: 18,
    school: "New Era Higher Secondary School"
};
var logUserDetails = function (pt) {
    console.log("Hello world My Name is ".concat(pt.name, " my age is ").concat(pt.age, " I am in  ").concat(pt.class, "th class"));
};
logUserDetails(newPerson);
