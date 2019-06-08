////////////////////
// Using Classes To Create Objects
var Person = /** @class */ (function () {
    function Person(name, username) {
        this.username = username;
        this.name = name;
    }
    return Person;
}());
var person = new Person("Max", "max");
console.log(person);
console.log(person.username, person.name);
