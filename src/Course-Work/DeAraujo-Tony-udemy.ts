class Test {
    color: string = 'orange';
    private _intensity: number = 5;

    get intensity(): number {
        return this._intensity;
    }

    set intensity(x: number) {
        this._intensity = x;
    }


}

const mytest = new Test();

mytest.intensity = 7;
alert(mytest.intensity);

////////////////////////////////////////////////
// Ex 1. Inventory Class w. getters and setters
//      -create a class named Inventory w. three properties
//      -item: stores the item name type string
//      -_qty stores quantity of items available and its type: number
//        private, initial val: 0
//        declare get to read _qty
//      -price: stores price of each item type: number
//      -instantiate object named chocolate
//       call get on chocoalte to read _qty
//       -declare set method to edit _qty
//       -change _qty val of chocolat to 5

class Inventory {
    item: string;
    private _qty: number = 0;
    prive: number;

    get qty(): number{
        return this._qty;
    };

    set qty(x: number) {
        this._qty = x;
    }
}

const Chocolate = new Inventory();
alert(Chocolate.qty);
Chocolate.qty = 5
alert(Chocolate.qty);

// You do not need to instantiate an obj
// to use its static class methods
// STATIC properties and methods are not passed into
// instantiated objects
// must be called directly from the class


/// Grandchild extends parent classes, which extends grandparent

class Parent2 {
    constructor(public name: string, public city: string) {}

}

class Child2 extends Parent2 {
    constructor(
        myname: string,
        mycity: string,
        public street: string) {
        super(myname, mycity);
    }

}

class Grandchild2 extends Child2 {
    constructor(
        myname: string,
        mycity: string,
        street: string,
        public apartment: string) {
        super(myname, mycity, street);
    }

}

const test = new Grandchild2 ("Tony", "New York", "Main Street", "First Floor");
alert(`${test.name} from ${test.city} on ${test.street} on ${test.apartment}`)

// grandchild class implementing intergace from parent, grandparent

interface IParent {
    name: string;
    city: string;
}

interface IChild {
    street: string;
}

class Grandchild implements IParent, IChild {
    constructor(
        public name: string,
        public city: string,
        public street: string,
        public apartment: string) { }
}

const tony = new Grandchild(
    "Tony", "New York", "Main Street", "First Floor"
)
alert(`${tony.city} on ${tony.street} on ${tony.apartment}`);

// abstract classes prevent instantiation

abstract class Parent3 {
    constructor(private _name: string, public city: string) { }
    get name() {
        return this._name[0].toUpperCase()
            + this._name.substr(1).toLowerCase();
    }
}

class Child3 extends Parent3 {
    constructor(
        myname: string,
        mycity: string,
        public street: string
    ) {
        super(myname, mycity);
    }
}

const writer = new Child3("tony", "New York", "Main Street");
alert(writer.name);

const poet = new Parent3("Zayra", "San Francisco");

// private constructors control the instantiation of its objects

class Singleton {

    private static instance: Singleton;
    private constructor() { }

    static getInstance() {
        if (!Singleton.instance) {
            Singleton.instance = new Singleton();
            // if singleton object does not exist
            // instantiate first object
        }
        return Singleton.instance;
        // if singleton object exists
        // variable { } becomes pointer to
        // existing object
        // no second object is created
    }
    luckyNumber: number;
}

let v = Singleton.getInstance();
let z = Singleton.getInstance();
v.luckyNumber = 33;
alert(z.luckyNumber);


///////////////////////////////
// for of vs. for in loops
///////////////////////////////

let myArr = [55, 65, 75, 85];

for (let item of myArr) {
    console.log(item); // 55, 65, 75, 85
}

// for of => values of array constructor

for (let item in myArr) {
    console.log(item); // 0, 1, 2, 3
}

// for in => indexes/keys/methods in an array

let myObj = {
    name: "tony",
    age: 99
}

let keys = Object.keys(myObj);
// stores object keys in temp array

for (let item of keys) {
    console.log(`${item}: ${myObj[item]}`);
}
// for or => returns values in object

// name: "tony"
// age: 99

let count = 0;

while (count < 5) {
    console.log(count);
    count++
}

// 0, 1, 2 ,3, 4
// while continues iteration until
// closing condition is met

do {
    console.log(count);
    count++;
} while (count < 5);

// 5
// do/while: always runs once

while(true) {
    count++;
    if(count === 3) continue;
    console.log(count);
    if(count >= 5) break;
}

// incrementor should come before continue
// to avoid inifinite loop

///////////////////////////////
// type casting and coercion
///////////////////////////////

let x = "3";
// let y = Number(x) + 5;
let y = parseInt(x) + 5;
y = parseFloat(x) + 5;

alert(y);


let x2 = "3.2abc";
alert(Number(x)); //Nan
// attempts to resolve whole value
alert(parseInt(x)); //3
// parses Int
alert(parseFloat(x)); // 3.2
// parses Float

//////////////////////////
// using Prompt to get user feedback
////////////////////////////

let y2 = prompt("Please say something.");
let z2 = parseInt(y2);
alert(`you said "${z2 + 100}"`);

let y3 = parseFloat(prompt("Please enter a number"));
alert(y3 + 100);

///////////////////////

const myObject = {
    name: "Tony",
    age: 99
}

// alert(myObject) // object Object

let myString = JSON.stringify(myObject, null);
// stringify: data, filter, amount of space for each element

alert(myString);

////////////////////////////////////
// Tuple is a finite ordered list
///////////////////////////////////

let x: [string, boolean];

x[0] = "Married";
x[1] = true;

type mytup = [string, boolean];

let y4: mytup;
let z4: mytup;

y4[0] = "Student";
y4[1] = true;

z4[0] = "Member";
z4[1] = false;

let captive: [string, string, number];

captive[0] = "Tony"
captive[1] = "Consul";
captive[2] = 12345;

////////////////////////////////////////////
// Spread operator and deconstructing arrays into arguments
////////////////////////////////////////////

// function prisoner(a: string, b: string, c: number): void {
//    console.log("Prisoner: ",a,b,c)
// }

function prisoner(...a: [string, string, number]): void {
    console.log("Prisoner: ", a[0], a[1], a[2]);
}
// paramater a is of type array, expecting string, string, number
// in the body each item of array is logged when the function is called
// rest param is bound to exactly 3 arguments

prisoner("Tony", "Consul", 1234);
// calls the function w. passed in arguments
// Prisoner: Tony Consul 1234

type ssn = [string, string, number];
let someArray: ssn = ["Tony", "Consul", 1234];

prisoner(...someArray);
// spread operator unpacks array into arguments

type ssn2 = [string, string[], ...number[]];
// rest element must be last element, and an array
let someArray2: ssn2 = ["Tony2", ["Consul2", "Centurion2"], 1234, 2, 67];

function prisoner2(...a: [string, string, number]): void {
    for (let i of a) {
        console.log(i);
    }
}

prisoner2(...someArray2);

//////////////////////////////////////////////
// Using union types isntead of type: any
/////////////////////////////////////////////

// let x: any;

let x: number | string | boolean;

x = "hello";
x = true;
x = 33;
x = {};
x = () => { };
x = [];


type Strnum = string | number;

let abc: Strnum;
let y: Strnum;

abc = "hello";
abc = 33;
y = "world"
y = 1234;

let test: Strnum | boolean;
test = true;
test = "hello";
test = 345;

/////////////////////////////////////////////////////
//  use strictNullCheck, union type: null, and type guard
///////////////////////////////////////////////////////

let x: number | null;

x = 2;

x = null;

if (x === null) {
    x = 0;
}


x.toString();
console.log(x)

let x: number;
let y = x;

/////////////////////////////////////////////////////////
// combining types w. union intersection
/////////////////////////////////////////////////////////

interface A {
    gender: string;
    name: string;
}

interface B {
    age: number;
    name: number;
}

type Person2 = A & B;
// type Person2 = A | B;
let stony: Person2;

//////////////////////////////////////////////////////
// noImplicitAny flag
// allows compiler to recognize type, even when
// not declared
// :: union types are safer than using type: any
//////////////////////////////////////////////////////

// let x;

let x: string | number | boolean;

typeof (x);

x = "hello";
typeof (x);

x = 33;
typeof (x);

x = true;
typeof (x);

//////////////////////////////////////////////////////
//  Generic Types
/////////////////////////////////////////////////////

function propLister<T1,T2>(value1: T1, value2: T2) {
// generic types can be used as independent placeholders
// until the args are declared at invocation

    console.log(`Value ${value1} is a ${typeof (value1)}`);
    console.log(`Value ${value2} is a ${typeof (value2)}`)
}


propLister("age", 33);
propLister("hello", true);

// Value age is a string
// Value 33 is a number
// Value hello is a string
// Value true is a boolean


// Generic types improve on type: any by recognizing
// types of passed args
function propLister2<T1,T2>(value1: T1, value2: T2) {

    let myList = {
        prop1: value1,
        prop2: value2
    };
    return myList;
}


let someList = propLister2("age", 33);
let otherList = propLister2("male", true);


console.log(someList);
console.log(otherList);


// interface generics are independent from function generics
// best practice: declare interface return type in function signature

interface IProps <T3, T4> {
    prop1: T3,
    prop2: T4
}

function propLister3<T1,T2>(value1: T1, value2: T2): IProps<T1, T2> {

    let myList: IProps<T1, T2> = {
        prop1: value1,
        prop2: value2
    };
    return myList;
}

let someList = propLister3("age", 33);
let otherList = propLister3("male", true);

console.log(someList);
console.log(otherList);

////////////////////////////////////////////////////
// type assetions
////////////////////////////////////////////////////

declare let foo;
// ambient declaration

foo = "hello";
// sets foo to type string

let x = <number>foo;
// asserts foo as type number
// not type check after type assertion

alert(`${x} of type ${typeof (x)}`);
// hello of type string

x = 33;
alert(`${x} of type ${typeof (x)}`);
// 33 of type number

let foo2;
let y = foo2 as string;
// use of 'as' for type assertion
y = "Habari";

alert(`${y} of type ${typeof (y)}`);
console.log(`${y} of type ${typeof (y)}`);

///////////////////////////////////////////////////////
// type assertion of consts
///////////////////////////////////////////////////////

// a const assumes the value it contains
// on declaration, as its data type
const x = [10, 12] as const;
const authoer = {
    fName: "Tony",
    lName: "DeAraujo"
} as const;


// cannot alter vals after const assetion
x[0] = 11;
x.push[0];
author.fName = "Mary";

// asserting vars as consts
// makes the vars' values immutable


const matches = [1, 2, 3];

const tournament = {
    game: "chess",
    series: matches
} as const;

tournament.series.push(4);
// can modify array in object
// asserted as const

////////////////////////////////////////////////////
// Decorators
///////////////////////////////////////////////////

function myDecorator(target) {
    alert(target);
}


// @decorator tells compiler to
// run func w. same name
// when class is processed
@myDecorator
class myClass {
    name: string = "Tony";
    age: number = 99;
}

myDecorator(myClass);

// allows addition of new features
// at compilation

