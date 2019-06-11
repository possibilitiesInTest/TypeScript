"use strict";
// Interfaces
// creates interface for NamedPerson
function greet(person) {
    console.log("Hello, " + person.firstName);
}
//greet function takes param of namedPerson and returns hello
function changeName(person) {
    person.firstName = "Anna";
}
// changeName function takes NamedPerson as param
// and sets new value
var person = {
    name: "Max",
    age: 27
};
// creates const person w. set internavl vals
greet(person); //
changeName(person); //
greet(person); //
