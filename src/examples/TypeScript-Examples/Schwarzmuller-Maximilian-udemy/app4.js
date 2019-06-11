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
// greet3({firstName: "Max", age:27 });
// err: object literal may only pass named properties
// age does not exist in type NamedPerson
// resolved w. optional arguments
person4.greet("Anything");
