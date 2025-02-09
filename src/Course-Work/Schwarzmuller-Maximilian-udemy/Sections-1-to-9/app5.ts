// Decorators

function logged(constructorFn: Function): void{
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

////////////////////////////////////////

// Factory
function logging(value: boolean): any {
    return value ? logged : null;
}

@logging(true)
class Car {}

// Advanced
function printable(constructorFn: Function): void {
    constructorFn.prototype.print = function() {
        console.log(this);
    }
}

@logging(true)
@printable
class Plant2 {
    name = "green Plant";
};

const plant2 = new Plant2();
(<any>plant2).print();
// must cast explicitly to type any

//////////////////////////////////////////

// Method Decorator
function editable(value: boolean) {
    return function(target: any, propName: string, descriptor: PropertyDescriptor ) {
        descriptor.writable = value;
        // user can control whether or not
        // property is writbale
    }
}
// Property Decorator
function overwritable(value:boolean) {
    return function(target: any, propName: string): any {
        const newDescriptor: PropertyDescriptor = {
            writable: value
        };
        return newDescriptor;
    }
}

class Project2 {
    @overwritable(false)
    projectName: string;

    constructor(name: string) {
        this.projectName = name;
    }

    @editable(false) // not writable property
    calcBudget() {
        console.log(1000);
    }
}

const project2 = new Project2("Super Project");
project2.calcBudget();
project2.calcBudget = function() {
    console.log(2000);
};
project2.calcBudget();
console.log(project2);

// Parameter Decorator
function printInfo(target: any, methodName: string, paramIndex: number) {
    console.log("Target: ", target);
    console.log("methodName: ", methodName);
    console.log("paramIndex: ", paramIndex);
}

class Course {
    name: string;

    constructor(name: string) {
        this.name = name;
    }

    printStudentNumbers(mode: string, @printInfo printAll: boolean) {
        if(printAll) {
            console.log(10000);
        } else {
            console.log(2000);
        }
    }
}

const course = new Course("Super Course");
course.printStudentNumbers("anything", true);
course.printStudentNumbers("anything", false);

