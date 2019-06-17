////////////////////
// Using Classes To Create Objects

class Person {
    name: string;
    private type: string;
    protected age: number =27;

    constructor(name: string, public username: string) {
        this.name = name;
        }

        printAge() {
            console.log(this.age);
            this.setType("Warm Guy");
        }

        private setType(type: string) {
            this.type = type;
            console.log(this.type);
        }
}

const person = new Person("Max", "max");
console.log(person);
console.log(person.username, person.name);
person.printAge();
// person.setType("Cool guy");


// Inheritance
class Max extends Person {
    //name = "Max";

    constructor(username: string) {
        super("Max", username);
        this.age = 31;
        // console.log(this.type);
        // cannot access private properties

    }
};

//const max = new Max("Anna", "max");
const max = new Max("max");
console.log(max);


// Getters && Setters
class Plant {
    private _species: string = "Default";

    get species() {
        return this._species;
    }

    set species(value: string) {
        if (value.length > 3) {
            this._species = value;
        } else {
            this._species = "Default"
        }
    }
}

let plant = new Plant();
console.log(plant.species);
plant.species = "AB";
console.log(plant.species);
plant.species = "Green plant";
console.log(plant.species);

// Static Properties && Methods
class Helpers {
   static PI: number = 3.14;
   static calcCircumference(diameter: number): number {
       return this.PI * diameter;
   }
}
// console.log(2 * Helpers.PI);
console.log(2 * Helpers.PI);
console.log(Helpers.calcCircumference(9));

// Abstract Classes
abstract class Project {
    projectName: string = "Default";
    budget: number = 1000;

    abstract changeName(name: string): void;

    calcBudget() {
        return this.budget * 2;
    }
}

class ITProject extends Project {
    changeName(name: string): void {
        this.projectName = name;
    }
}

let newProject = new ITProject();
console.log(newProject);
newProject.changeName("Super IT Projects");
console.log(newProject);

// Private Constructors && Singletons
class OnlyOne {
    private static instance: OnlyOne;
    public readonly name: string;

    private constructor(name: string) {
        this.name = name;
    }

    static getInstance() {
        if(!OnlyOne.instance) {
            OnlyOne.instance = new OnlyOne('The Only One');
        }
        return OnlyOne.instance;
    }
}

// let wrong = new OnlyOne('The Only One');
let right = OnlyOne.getInstance();
console.log(right.name);
// right.name = "Something else";
// readonly prevents overriding


//////////////////////////////////////
// Examples


// Exercise 1 - How was your TypeScript Class?
class Car {
    name: string;
    acceleration: number = 0;

    constructor(name: string) {
        this.name = name;
    }

    honk() {
        console.log("Toooot!");
    }

    accelerate(speed: number) {
        this.acceleration = this.acceleration + speed;
    }
}

const car = new Car("BMW");
car.honk();
console.log(car.acceleration);
car.accelerate(20);
console.log(car.acceleration);

// function Car(name) {
//     this.name = name;
//     this.acceleration = 0;
//
//     this.honk = function() {
//         console.log("Toooooooooot!");
//     };
//
//     this.accelerate = function(speed) {
//         this.acceleration = this.acceleration + speed;
//     }
// }
// var car = new Car("BMW");
// car.honk();
// console.log(car.acceleration);
// car.accelerate(10);
// console.log(car.acceleration);


////////////////////
////////////////////
////////////////////


// Exercise 2 - Two objects, based on each other ...
class BaseObject {
    width = 0
    length = 0
}

class Rectangle extends BaseObject {
    calcSize() {
        return this.width * this.length;
    }
}

const rectangle = new Rectangle();
rectangle.width = 5;
rectangle.length = 10;
console.log(rectangle.calcSize());

// var baseObject = {
//     width: 0,
//     length: 0
// };
// var rectangle = Object.create(baseObject);
// rectangle.width = 5;
// rectangle.length = 2;
// rectangle.calcSize = function() {
//     return this.width * this.length;
// };
// console.log(rectangle.calcSize());

////////////////////
////////////////////
////////////////////


// Exercise 3 - Make sure to compile to ES5 (set the target in tsconfig.json)
class Person2 {
    private _firstName: string = "";

    get firstName() {
        return this._firstName;
    }

    set firstName(value: string) {
        if (value.length > 3) {
            this._firstName = value;
        } else {
            this._firstName = "";
        }
    }
}

const person2 = new Person2();
console.log(person2.firstName);
person2.firstName = "Ma";
console.log(person2.firstName);
person2.firstName = "Maximillian";
console.log(person2.firstName);



// var person2 = {
//     _firstName: ""
// };
// Object.defineProperty(person2, "firstName", {
//     get: function () {
//         return this._firstName;
//     },
//     set: function (value) {
//         if (value.length > 3) {
//             this._firstName = value;
//         }
//         else {
//             this._firstName = "";
//         }
//     },
//     enumerable: true,
//     configurable: true
// });
// console.log(person.firstName);
// person2.firstName = "Ma";
// console.log(person.firstName);
// person2.firstName = "Maximilian";
// console.log(person.firstName);

