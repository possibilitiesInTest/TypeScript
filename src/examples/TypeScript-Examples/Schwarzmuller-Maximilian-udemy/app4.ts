// Interfaces

interface NamedPerson {
    firstName: string;
}
// creates interface for NamedPerson

function greet3(person: NamedPerson) {
    console.log("Hello, " + person.firstName);
}
//greet function takes param of namedPerson and returns hello

function changeName(person: NamedPerson) {
    person.firstName = "Anna";
}
// changeName function takes NamedPerson as param
// and sets new value

const person4 = {
    name: "Max",
    age: 27
}
// creates const person w. set internavl vals

greet3(person4); //
changeName(person4); //
greet(person4); //