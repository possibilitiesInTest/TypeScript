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
