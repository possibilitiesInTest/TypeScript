////////////////////
// Using Classes To Create Objects

class Person {
    name: string;
    private type: string;
    protected age: number;

    constructor(name: string, public username: string) {
        this.name = name;
    }
}

const person = new Person("Max", "max");
console.log(person);
console.log(person.username, person.name);