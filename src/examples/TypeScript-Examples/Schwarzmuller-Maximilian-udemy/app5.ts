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