"use strict";
// array
var hobbies = ["Cooking", "Sports"];
hobbies = [100];
// setting array type to any overrides
// implicit type inference by ts
// tuples
var address = ["Superstreet", 99];
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
console.log(multiply(2, "Bob"));
// won't work\
// function types
var myMultiply;
myMultiply = sayHello; // does not satisfy function type
myMultiply = multiply;
console.log(myMultiply(5, 3));
// objects
var userData = {
    name: "Max",
    age: 27
};
userData = {
    a: "Max",
    b: 22
};
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
complex = {};
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
var canThisBeAny = nulll;
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
