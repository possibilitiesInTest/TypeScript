// array
var hobbies = ["Cooking", "Sports"];
hobbies = [100];
// setting array type to any overrides
// implicit type inference by ts
// tuples
// let address: [number, string] = ["Super Street", 99];
// order in type declaration is important
// enum
// :: type restricting variables to values from
// predefined set of constants (via Stijin de Witt)
var Color;
(function (Color) {
    Color[Color["Gray"] = 0] = "Gray";
    Color[Color["Green"] = 100] = "Green";
    Color[Color["Blue"] = 101] = "Blue"; // 101
})(Color || (Color = {}));
;
var myColor = Color.Green;
console.log(myColor);
// functions
var myName = "Bob";
function returnMyName() {
    return myName;
}
console.log(returnMyName);
// void
function sayHello() {
    console.log("Hello!");
}
;
// arg types
function multiply(value1, value2) {
    return value1 * value2;
}
;
// console.log(multiply(2, "Bob"));
// won't work\
// function types
var myMultiply;
// myMultiply = sayHello; // does not satisfy function type
myMultiply = multiply;
console.log(myMultiply(5, 3));
// objects
var userData = {
    name: "Max",
    age: 27
};
//  userData = {
//     a: "Max",
//     b: 22
// }
// property names are immutable when asserting an object type
var userData2 = {
    name: "Max",
    age: 27
};
// explicit type assertion w. object
///////////////////////////////////////////////////
// using type alias to store complex types
// complex object
var complex = {
    // complex object
    data: [100, 3.99, 10],
    // data property
    output: function (all) {
        return this.data;
        // output property
    }
};
var complex2 = {
    data: [100, 3.99, 10],
    output: function (all) {
        return this.data;
    }
};
// checking types
var finalValue = "A String";
if (typeof finalValue == "number") {
    console.log("Final value is a number");
}
;
// never types
function neverReturns() {
    throw new Error('An error!');
}
;
// never returning anything
// throws error before completion
// Nullable Types
var canBeNull = 12; // inferred type: number
canBeNull = null; // reassigns type
var canAlsoBeNull; // by default undefined (uninitialized)
canAlsoBeNull = null; // call be assigned null thereafter
// strictNullChecks: type null cannot be assigned to type number
var canThisBeAny = null;
// no error when assigning null at instantiation
canThisBeAny = 12;
var bankAccount = {
    money: 2000,
    deposit: function (value) {
        this.money += value;
    }
};
var myself = {
    name: "Max",
    bankAccount: bankAccount,
    hobbies: ["Sports", "Cooking"]
};
myself.bankAccount.deposit(3000);
console.log(myself);
////////////////////////////////////////////////
//compiler options
// function controlMe(isTrue: boolean , somethingElse: boolean) {
//     let result: number;
//     if(isTrue) {
//         result = 12;
//     }
//     return result;
// }
// w. strictNullChecks compiler determines if
// var is used before assignment
// w. noUnusedParameters: compiler checks if
// if param is declared but never used
// DEFAULT PARAMETERS
var countdown = function (start) {
    if (start === void 0) { start = 10; }
    console.log(start);
    while (start > 0) {
        start--;
    }
    console.log("Done!", start);
};
countdown();
//////////////////////
var countdown2 = function (start, end) {
    if (start === void 0) { start = 10; }
    if (end === void 0) { end = start - 5; }
    console.log(start);
    while (start > 0) {
        start--;
    }
    console.log("Done!", start);
};
countdown2();
//////////////////////
// const countdown3 = (end: number = start -5, start: number =10): void => {
// // initializer of parameter 'end' cannot reference
//     // identifier ''start' decalred after it
//     console.log(start);
//     while(start > 0) {
//         start--;
//     }
//     console.log("Done!", start);
// };
// countdown3();
////////////////////////////////////
///////////////////////////////////
// Rest & Spread
//////////////////////////////////
var numbers = [1, 10, 99, -5];
console.log(Math.max(33, 99, 10, -3));
console.log(Math.max.apply(Math, numbers));
// rest operator: take any number of args and make
// them of type number array
function makeArray(name) {
    var args = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        args[_i - 1] = arguments[_i];
    }
    return args;
}
console.log(makeArray("Max", 1, 2));
// rest operator w. tuples
function printInfo(name, age) {
    console.log('My name is ' + name + ' and I am ' + age + ' years old!');
}
function printInfo2() {
    var info = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        info[_i] = arguments[_i];
    }
    console.log('My name is ' + info[0] + ' and I am ' + info[1] + ' years old!');
}
////////////////////////////////
//  Destructuring
///////////////////////////////
var myHobbies = ["Cooking", "Sports"];
var hobby1 = myHobbies[0], hobby2 = myHobbies[1];
console.log(myHobbies[0], myHobbies[1]);
var userData3 = { userName: "Max", age: 27 };
var myName2 = userData3.userName, myAge = userData3.age;
console.log(myName2, myAge);
/////////////////////////////////
// TS: ES6 Module Exercises
// Exercise 1 - Maybe use an Arrow Function?
var double = function (value) {
    return value * 2;
};
console.log(double(10));
////////////////////////////////////////////
var double2 = function (value) { return value * 2; };
// Exercise 2 - If only we could provide some default values...
var greet = function (name) {
    if (name === undefined) {
        name = "Max";
    }
    console.log("Hello, " + name);
};
// greet();
greet("Anna");
////////////////////////////////////////////
var greet2 = function (name) {
    if (name === void 0) { name = "max"; }
    console.log("Hello " + name);
};
// Exercise 3 - Isn't there a shorter way to get all these Values?
var numbers3 = [-3, 33, 38, 5];
console.log(Math.min.apply(Math, numbers3));
//////////////////////////////////////////
var numbers4 = [-3, 33, 38, 5];
console.log(Math.min.apply(Math, numbers));
// Exercise 4 - I have to think about Exercise 3 ...
var newArray = [55, 20];
Array.prototype.push.apply(newArray, numbers);
console.log(newArray);
/////////////////////////////////////////////////
newArray.push.apply(newArray, numbers);
console.log(newArray);
// Exercise 5 - That's a well-constructed array.
var testResults = [3.89, 2.99, 1.38];
var result1 = testResults[0];
var result2 = testResults[1];
var result3 = testResults[2];
console.log(result1, result2, result3);
////////////////////////////////////////////////
// Exercise 6 - And a well-constructed object!
var scientist = { firstName: "Will", experience: 12 };
var firstName = scientist.firstName;
var experience = scientist.experience;
console.log(firstName, experience);
////////////////////////////////////////////////
