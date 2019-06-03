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
