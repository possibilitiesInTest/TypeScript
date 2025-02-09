const add = (a: number, b: number): number => {
    return a + b;
};

const subtract = (a: number, b: number): number => {
   return a - b;
};

function divide(a:number, b:number):number {
    return a / b;
}

function multiply (a: number, b: number): number {
    return a * b;
}

const logger = (message: string): void => {
    console.log(message);
}

const throwError = (message: string): void => {
    if(!message){
    throw new Error(message);

    // void can return null or undefined
    // use never only when no chance of any return
     }
}

const todaysWeather = {
    date: new Date(),
    weather: 'sunny'
}

//destructuring annotations w. object destructuring
const logWeather = ({date, weather}: {date: Date, weather: string}): void => {
    console.log(date);
    console.log(weather);
}

logWeather(todaysWeather);