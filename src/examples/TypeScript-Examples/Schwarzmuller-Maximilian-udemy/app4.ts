// Interfaces && Generics

interface NamedPerson {
    firstName: string;
    age?: number;
    [propName: string]: any;
    // flexible keyName: of type: of type any
    greet(lastName: string): void;
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

const person4: NamedPerson = {
    firstName: "Max",
    age: 27,
    hobbies: ["Cooking", "Sports"],
    greet(lastName: string) {
        console.log("Hi, I am " + this.firstName + " " + lastName);
    }
}
// creates const person w. set internavl vals

// greet3(person4);
changeName(person4);
// greet3(person4);
// person4.greet("Anything");

// greet3({firstName: "Max", age:27 });
// err: object literal may only pass named properties
// age does not exist in type NamedPerson
// resolved w. optional arguments

class Person5 implements NamedPerson {
    firstName: string = "";
    lastName: string = "";
    greet(lastName: string) {
        console.log("Hi, I am " + this.firstName + " " + lastName);
    };
}
// classes can also be used to implement interfaces
const myPerson = new Person5();
myPerson.firstName = "Maximilian";
myPerson.lastName = "Anything";
// greet3(myPerson);
// myPerson.greet("Anything");

// Function Types

interface DoubleValueFunc {
    (number1: number, number2: number): number;
}

let myDoubleFunction: DoubleValueFunc;
myDoubleFunction = function(value1: number, value2: number) {
    return (value1 + value2) * 2;
};

// console.log(myDoubleFunction(10, 20));

// Interface Inheritance

interface AgedPerson extends NamedPerson {
    age: number;
}

const oldPerson: AgedPerson = {
    age: 27,
    firstName: "Max",
    greet(lastName: string) {
        console.log("Hello!");
    }
};

// console.log(oldPerson);

////////////////////////////////////////
// Generics

// Simple Generic
function echo(data: any) {
    return data;
}

console.log(echo("Max").length);
console.log(echo(27).length);
console.log(echo({name: "Max", age: 27}));

// better Generic
function betterEcho<T>(data: T){
    return data;
};

console.log(betterEcho("Max").length);
console.log(betterEcho<number>(27));
console.log(betterEcho({name: "Max", age: 27}));

// Built-in Generics
const testResults3: Array<number> = [1.94, 2.33];
testResults3.push(-2.99);
testResults3.push("string");
// will fail
console.log(testResults3);

// Arrays
function printAll<T>(args: T[]) {
    args.forEach((element) => console.log(element));
};
printAll<string>(["Apple", "Banana"]);

// Generic Types
const echo3:<T>(data: T) => T = betterEcho;
// of type generic & function
// data as an input, return this type

//everything after : before = is a type assertion
console.log(echo3<string>("Something"));

// Generic Class
class SimpleMath<T extends number | string, U extends number | string> {
    baseValue: T;
    multiplyValue: U;
    calculate(): number {
        return +this.baseValue * +this.multiplyValue;
        // +explicitly cast values to a number
    }
}

const simpleMath = new SimpleMath<string, number>();
simpleMath.baseValue = "10";
simpleMath.multiplyValue = 20;
console.log(simpleMath.calculate());