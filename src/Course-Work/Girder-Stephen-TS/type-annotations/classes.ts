class Vehicle {
    constructor(public color: string) {}

    protected honk(): void {
        console.log('beep');
    }
}

const vehicle = new Vehicle('orange');
console.log(vehicle.color);


class Car extends Vehicle {
    constructor(public wheels: number, color: string){
        super(color);
    }

    private drive(): void {
        console.log('vroom');
    }

    startDrivingProcess(): void {
        this.drive();
        this.honk();
    }
}

const vehicle = new Vehicle();
// vehicle.drive();
// vehicle.honk();

const car2 = new Car();
car2.startDrivingProcess();
// car2.honk();