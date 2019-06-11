// Interfaces

interface NamedPerson {
    firstName: string;
    age?: number;
    [propName: string]: any;
    // flexible keyName: of type: of type any
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
    firstName: "Max",
    age: 27,
    hobbies: ["Cooking", "Sports"]
}
// creates const person w. set internavl vals

greet3(person4);
changeName(person4);
greet3(person4);

greet3({firstName: "Max", age:27 });
// err: object literal may only pass named properties
// age does not exist in type NamedPerson

// resolved w. optional arguments