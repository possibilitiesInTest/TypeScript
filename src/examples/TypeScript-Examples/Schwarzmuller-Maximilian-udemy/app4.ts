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

//////////////////////////////////////////////////////

// setItem(key: string, item: T) // should create a new key-value pair

// getItem(key: string) // should retrieve the value of the provided key
// clear() // should remove all key-value pairs
// printMap() // should output key-value pairs
// The map should be usable like shown below:

// const numberMap = new MyMap<number>();
// numberMap.setItem('apples', 5);
// numberMap.setItem('bananas', 10);
// numberMap.printMap();
//
// const stringMap = new MyMap<string>();
// stringMap.setItem('name', "Max");
// stringMap.setItem('age', "27");
// stringMap.printMap();

//////////////////////////////////////////////////

class MyMap<T> {
    // create class MyMap w. generic type

    private map: {[key: string]: T} = {};
    // create private property map for internal storage
    // of type object with key of type string
    // value stored for this key is of the generic type
    // set to empty object

    setItem(key: string, item: T) {
        this.map[key]=item;
    }
    // create setItem method which allows storage of new key:value pairs
    // takes a key of type string, and item of generic type T
    // accesses map. and sets key value pair to new item
    // via overwriting

    getItem(key: string) {
        return this.map[key];
    }
    // create getItem method specified w. key of type string
    // return this.map accessing passed in key

    clear() {
        this.map() = {};
    }
    // create clear method
    // setting this.map to empty key

    printMap() {
        for(let key in this.map) {
            console.log(key, this.map[key]);
        }
    }
    // create printMap w. for in loop
    // log key and value in map
}

const numberMap = new MyMap<number>();
// creates numberMap where only generic type of numbers
// can be stored
numberMap.setItem("apples", 10);
numberMap.setItem("bananas", 2);
// sets items of key type string and key val number
console.log(numberMap.getItem("apples"));
// maps number of apples
numberMap.printMap();
// prints all key vals
numberMap.clear();
// clears map
numberMap.printMap();
// prints empty map

const stringMap = new MyMap<string>();
// creates numberMap where only generic type of strings
// can be stored
stringMap.setItem("apples", "10");
stringMap.setItem("bananas", "2");
// sets items of key type string and key val string
console.log(stringMap.getItem("apples"));
// maps string val of key apples
stringMap.printMap();
// prints all key vals
stringMap.clear();
// clears map
stringMap.printMap();
// prints empty map

