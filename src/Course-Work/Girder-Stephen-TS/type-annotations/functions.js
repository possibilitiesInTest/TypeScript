"use strict";
var add = function (a, b) {
    return a + b;
};
var subtract = function (a, b) {
    return a - b;
};
function divide(a, b) {
    return a / b;
}
function multiply(a, b) {
    return a * b;
}
var logger = function (message) {
    console.log(message);
};
var throwError = function (message) {
    if (!message) {
        throw new Error(message);
        // void can return null or undefined
        // use never only when no chance of any return
    }
};
var todaysWeather = {
    date: new Date(),
    weather: 'sunny'
};
//destructuring annotations w. object destructuring
var logWeather = function (_a) {
    var date = _a.date, weather = _a.weather;
    console.log(date);
    console.log(weather);
};
logWeather(todaysWeather);
