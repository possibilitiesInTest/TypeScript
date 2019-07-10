"use strict";
// Decorators
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
function logged(constructorFn) {
    console.log(constructorFn);
}
var Person3 = /** @class */ (function () {
    function Person3() {
        console.log("Hi!");
    }
    Person3 = __decorate([
        logged
    ], Person3);
    return Person3;
}());
// attached decorator
// will print constructor of this class
////////////////////////////////////////
// Factory
function logging(value) {
    return value ? logged : null;
}
var Car = /** @class */ (function () {
    function Car() {
    }
    Car = __decorate([
        logging(true)
    ], Car);
    return Car;
}());
// Advanced
function printable(constructorFn) {
    constructorFn.prototype.print = function () {
        console.log(this);
    };
}
var Plant2 = /** @class */ (function () {
    function Plant2() {
        this.name = "green Plant";
    }
    Plant2 = __decorate([
        logging(true),
        printable
    ], Plant2);
    return Plant2;
}());
;
var plant2 = new Plant2();
plant2.print();
// must cast explicitly to type any
//////////////////////////////////////////
// Method Decorator
function editable(value) {
    return function (target, propName, descriptor) {
        descriptor.writable = value;
        // user can control whether or not
        // property is writbale
    };
}
// Property Decorator
function overwritable(value) {
    return function (target, propName) {
        var newDescriptor = {
            writable: value
        };
        return newDescriptor;
    };
}
var Project2 = /** @class */ (function () {
    function Project2(name) {
        this.projectName = name;
    }
    Project2.prototype.calcBudget = function () {
        console.log(1000);
    };
    __decorate([
        overwritable(false)
    ], Project2.prototype, "projectName", void 0);
    __decorate([
        editable(false) // not writable property
    ], Project2.prototype, "calcBudget", null);
    return Project2;
}());
var project2 = new Project2("Super Project");
project2.calcBudget();
project2.calcBudget = function () {
    console.log(2000);
};
project2.calcBudget();
console.log(project2);
// Parameter Decorator
function printInfo(target, methodName, paramIndex) {
    console.log("Target: ", target);
    console.log("methodName: ", methodName);
    console.log("paramIndex: ", paramIndex);
}
var Course = /** @class */ (function () {
    function Course(name) {
        this.name = name;
    }
    Course.prototype.printStudentNumbers = function (mode, printAll) {
        if (printAll) {
            console.log(10000);
        }
        else {
            console.log(2000);
        }
    };
    __decorate([
        __param(1, printInfo)
    ], Course.prototype, "printStudentNumbers", null);
    return Course;
}());
var course = new Course("Super Course");
course.printStudentNumbers("anything", true);
course.printStudentNumbers("anything", false);
