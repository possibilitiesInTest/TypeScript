// namespaces && modules

/// <reference path="circleMath.ts" />
/// <reference path="rectangleMath.ts" />

import CircleMath = MyMath.Circle;

const PI = 2.99;

console.log("calculateRectangle", MyMath.calculateRectangle( 10,20));
console.log("calculateCircumference", CircleMath.calculateCircumference(3));
console.log("Gloabl PI", PI);

// importing namespaces w. reference paths
// implementing nested namespaces
// using aliases
