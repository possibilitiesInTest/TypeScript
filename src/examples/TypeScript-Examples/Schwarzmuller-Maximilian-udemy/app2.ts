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