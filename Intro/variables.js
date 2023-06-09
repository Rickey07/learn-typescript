"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
var newUser = {
    _id: "hello",
    name: "Prabadhya",
    email: "Hey",
    isActive: false
};
newUser.name = "Harshit";
// Tuples
// Tuplees are for predefined and structured ordered data.
var mainUsers = ["Prabadhya07", 1, false];
var prabadhya = {
    _id: 421,
    email: "Prabadhya@gmail.com",
    userId: 123,
    startTrial: function () {
        return "Trial Started";
    },
    getCoupon: function (name) {
        return 10;
    }
};
var specialUser = {
    _id: 421,
    email: "Prabadhya@gmail.com",
    userId: 123,
    startTrial: function () {
        return "Trial Started";
    },
    getCoupon: function (name) {
        return 10;
    },
    role: 0
};
console.log(specialUser.role);
// Classes Public and Private
// class UserDetails {
//   email:string
//   name:string
//   private readonly city:string = "Indore"
//   constructor(email:string,name:string) {
//     this.email = email
//     this.name = name
//   }
// }
// Getters and Setters
var UserDetails = /** @class */ (function () {
    function UserDetails(email, name) {
        this.email = email;
        this.name = name;
        this._coursecount = 1;
        this.city = "Indore";
    }
    Object.defineProperty(UserDetails.prototype, "getEmail", {
        get: function () {
            return "".concat(this.email, "@gmail.com");
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(UserDetails.prototype, "courseCount", {
        get: function () {
            return this._coursecount;
        },
        set: function (courseNum) {
            this._coursecount = courseNum;
        },
        enumerable: false,
        configurable: true
    });
    return UserDetails;
}());
var subUser = /** @class */ (function (_super) {
    __extends(subUser, _super);
    function subUser() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.isFamily = true;
        return _this;
    }
    subUser.prototype.changeCourseCount = function (num) {
        this._coursecount = num;
    };
    return subUser;
}(UserDetails));
var TakePhoto = /** @class */ (function () {
    function TakePhoto(cameraMode, filter) {
        this.cameraMode = cameraMode;
        this.filter = filter;
    }
    return TakePhoto;
}());
var newPic = new TakePhoto("Panorama", "Black & White");
var Instagram = /** @class */ (function (_super) {
    __extends(Instagram, _super);
    function Instagram() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Instagram;
}(TakePhoto));
var harshit = new UserDetails("Prabadhya", "Harshit");
console.log(harshit.getEmail);
// Generics
function identity(arg) {
    return arg;
}
var helloWorldString = identity("Hello world");
var newNumber = identity(4);
console.log(helloWorldString, newNumber);
