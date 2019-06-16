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
// Built-in Generics
var testResults3 = [1.94, 2.33];
testResults3.push(-2.99);
testResults3.push("string");
// will fail
console.log(testResults3);
// Arrays
function printAll(args) {
    args.forEach(function (element) { return console.log(element); });
}
;
printAll(["Apple", "Banana"]);
// Generic Types
var echo3 = betterEcho;
// of type generic & function
// data as an input, return this type
//everything after : before = is a type assertion
console.log(echo3("Something"));
// Generic Class
var SimpleMath = /** @class */ (function () {
    function SimpleMath() {
    }
    SimpleMath.prototype.calculate = function () {
        return +this.baseValue * +this.multiplyValue;
        // +explicitly cast values to a number
    };
    return SimpleMath;
}());
var simpleMath = new SimpleMath();
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
var MyMap = /** @class */ (function () {
    function MyMap() {
        // create class MyMap w. generic type
        this.map = {};
        // create printMap w. for in loop
        // log key and value in map
    }
    // create private property map for internal storage
    // of type object with key of type string
    // value stored for this key is of the generic type
    // set to empty object
    MyMap.prototype.setItem = function (key, item) {
        this.map[key] = item;
    };
    // create setItem method which allows storage of new key:value pairs
    // takes a key of type string, and item of generic type T
    // accesses map. and sets key value pair to new item
    // via overwriting
    MyMap.prototype.getItem = function (key) {
        return this.map[key];
    };
    // create getItem method specified w. key of type string
    // return this.map accessing passed in key
    MyMap.prototype.clear = function () {
        this.map() = {};
    };
    // create clear method
    // setting this.map to empty key
    MyMap.prototype.printMap = function () {
        for (var key in this.map) {
            console.log(key, this.map[key]);
        }
    };
    return MyMap;
}());
var numberMap = new MyMap();
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
var stringMap = new MyMap();
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
