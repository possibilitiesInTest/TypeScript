const carMakers: string[] = ['ford', 'toyota', 'chevy'];
const dates = [new Date(), new Date()];

const carsByMake: string[][] = [
    ['f150'],
    ['corolla'],
    ['camaro']
]
// type = array of array of strings


// Help w. inference when extracting values
const car = carMakers[0];
const myCar = carMakers.pop();

// Prevent incompatible values
carMakers.push(100);

// Help w. map
carMakers.map((car: string):string => {
    return car;
});

// Felxible types
const importantDates: (Date | String)[] = [new Date()];
importantDates.push('2030-10-10');
importantDates.push(new Date());
importantDates.push(100);

