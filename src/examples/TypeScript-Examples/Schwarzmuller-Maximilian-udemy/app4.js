"use strict";
// Interfaces && Generics
// creates interface for NamedPerson
function greet3(person) {
    console.log("Hello, " + person.firstName);
}
//greet function takes param of namedPerson and returns hello
function changeName(person) {
    person.firstName = "Anna";
}
// changeName function takes NamedPerson as param
// and sets new value
var person4 = {
    firstName: "Max",
    age: 27,
    hobbies: ["Cooking", "Sports"],
    greet: function (lastName) {
        console.log("Hi, I am " + this.firstName + " " + lastName);
    }
};
// creates const person w. set internavl vals
// greet3(person4);
changeName(person4);
// greet3(person4);
// person4.greet("Anything");
// greet3({firstName: "Max", age:27 });
// err: object literal may only pass named properties
// age does not exist in type NamedPerson
// resolved w. optional arguments
var Person5 = /** @class */ (function () {
    function Person5() {
        this.firstName = "";
        this.lastName = "";
    }
    Person5.prototype.greet = function (lastName) {
        console.log("Hi, I am " + this.firstName + " " + lastName);
    };
    ;
    return Person5;
}());
// classes can also be used to implement interfaces
var myPerson = new Person5();
myPerson.firstName = "Maximilian";
myPerson.lastName = "Anything";
var myDoubleFunction;
myDoubleFunction = function (value1, value2) {
    return (value1 + value2) * 2;
};
var oldPerson = {
    age: 27,
    firstName: "Max",
    greet: function (lastName) {
        console.log("Hello!");
    }
};
// console.log(oldPerson);
////////////////////////////////////////
// Generics
// Simple Generic
function echo(data) {
    return data;
}
console.log(echo("Max").length);
console.log(echo(27).length);
console.log(echo({ name: "Max", age: 27 }));
// better Generic
function betterEcho(data) {
    return data;
}
;
console.log(betterEcho("Max").length);
console.log(betterEcho(27));
console.log(betterEcho({ name: "Max", age: 27 }));
