// array
let hobbies: any[] = ["Cooking", "Sports"];
hobbies =[100];
// setting array type to any overrides
// implicit type inference by ts

// tuples
let address: [number, string] = ["Superstreet", 99];
// order in type declaration is important

// enum
// :: type restricting variables to values from
// predefined set of constants (via Stijin de Witt)

enum Color {
    Gray, // 0
    Green = 100, //100
    Blue // 101
};

let myColor: Color = Color.Green;
console.log(myColor);

// functions
const myName = "Bob";

function returnMyName(): string {
    return myName;
}
console.log(returnMyName);

// void
function sayHello(): void {
    console.log("Hello!")
};

// arg types
function multiply(value1: number, value2: number): number {
    return value1 * value2;
};
console.log(multiply(2, "Bob"));
// won't work\

// function types
let myMultiply: (a: number, b: number) => number;
myMultiply = sayHello; // does not satisfy function type
myMultiply = multiply;
console.log(myMultiply(5, 3));

// objects
let userData = {
    name: "Max",
    age: 27
};
userData = {
    a: "Max",
    b: 22
}
// property names are immutable when asserting an object type

let userData2: { name: string, age: number} = {
    name: "Max",
    age: 27
};
// explicit type assertion w. object


///////////////////////////////////////////////////
// using type alias to store complex types

// complex object
let complex: { data: number[], output: (all: boolean) => number[] } = {
    // complex object
    data: [100, 3.99, 10],
    // data property
    output: function (all: boolean): number[] {
        return this.data;
        // output property
    }
};

complex = {};
// simple instantiation does not
// satisfy complex type

// type alias

type Complex = { data: number[], output: (all: boolean) => number[] };

let complex2: Complex = {
    data: [100, 3.99, 10],

    output: function (all: boolean): number[] {
        return this.data;
    }
};

// checking types
let finalValue = "A String";
if(typeof finalValue == "number") {
    console.log("Final value is a number");
};

// never types
function neverReturns(): never {
    throw new Error('An error!');
};
// never returning anything
// throws error before completion


// Nullable Types
let canBeNull: number | null = 12; // inferred type: number
canBeNull = null; // reassigns type
let canAlsoBeNull; // by default undefined (uninitialized)
canAlsoBeNull = null; // call be assigned null thereafter
// strictNullChecks: type null cannot be assigned to type number
let canThisBeAny = nulll;
// no error when assigning null at instantiation
canThisBeAny = 12
// type number cannot be reassigned to type: number


/////////////////////////////////////////////////
// assigning types example
////////////////////////////////////////////////

type BankAccount = {money: number, deposit: (val: number) => void};

let bankAccount: BankAccount = {
    money: 2000,
    deposit(value: number): void {
        this.money += value;
    }
};

let myself: {name: string, bankAccount: BankAccount, hobbies: string[]} = {
    name: "Max",
    bankAccount: bankAccount,
    hobbies: ["Sports", "Cooking"]
};

myself.bankAccount.deposit(3000);
console.log(myself);