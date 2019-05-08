// IIFE stands for Immediately Invoked Function Expression
//It does not get invoked, only referenced thus you don't need the () after the reference
//you can reference to this function alone by its name
let greet = (() => 'Hello, my name is Sascha!')();

console.log(greet);

