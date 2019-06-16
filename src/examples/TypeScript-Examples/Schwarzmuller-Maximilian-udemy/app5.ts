// Decorators

function logged(constructorFn: Function) {
    console.log(constructorFn);
}

@logged
class Person3 {
    constructor(){
        console.log("Hi!");
    }
}
// attached decorator
// will print constructor of this class

// Factory
function logging(value: boolean) {
    return value ? logged : null;
}

@logging(true)
class Car {}

// Advanced
function printable(constructorFn: Function) {
    constructorFn.prototype.print = function() {
        console.log(this);
    }
}

@printable
class Plant2 {
    name = "green Plant";
}
const plant2 = new Plant2();
(<any>plant2).print();
// must cast explicitly to type any

