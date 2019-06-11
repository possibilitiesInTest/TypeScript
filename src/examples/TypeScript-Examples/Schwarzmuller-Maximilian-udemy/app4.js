"use strict";
// Interfaces
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
greet3(person4);
changeName(person4);
greet3(person4);
person4.greet("Anything");
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
greet3(myPerson);
myPerson.greet("Anything");
var myDoubleFunction;
myDoubleFunction = function (value1, value2) {
    return (value1 + value2) * 2;
};
console.log(myDoubleFunction(10, 20));
var oldPerson = {
    age: 27,
    firstName: "Max",
    greet: function (lastName) {
        console.log("Hello!");
    }
};
console.log(oldPerson);
