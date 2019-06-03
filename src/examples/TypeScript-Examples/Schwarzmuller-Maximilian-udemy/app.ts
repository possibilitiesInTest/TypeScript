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