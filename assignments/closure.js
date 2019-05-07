// ==== Challenge 1: Write your own closure ====
// Write a simple closure of your own creation.  Keep it simple!
const cat = 'kittie';
function returnCat () {
let inside_variable = 'so much private';
return cat;
}
console.log(returnCat());
/* console.log(inside_variable); */ //is not defined bercause the variable in within the function scope

/* STRETCH PROBLEMS, Do not attempt until you have completed all previous tasks for today's project files */


// ==== Challenge 2: Create a counter function ====
const counter = () => {
  // Return a function that when invoked increments and returns a counter variable.
let count = 0;
return function() {
return ++count;
}
};

const newCounter = counter();
console.log(newCounter());  // 1
console.log(newCounter()); // 2

// Example usage: const newCounter = counter();
// newCounter(); // 1
// newCounter(); // 2

// ==== Challenge 3: Create a counter function with an object that can increment and decrement ====

// doesn't work so far

/* const counterFactory = (param) => {
  // Return an object that has two methods called `increment` and `decrement`.
  // `increment` should increment a counter variable in closure scope and return it.
  // `decrement` should decrement the counter variable and return it.
  let countObj = { counter: 0,
                   increment: function() {return this.counter +1},
                   decrement: function() {return this.counter -1},
                  };
  return function(param) {
   return param === 'increment' ? countObj.increment() : countObj.decrement();
  }
  };

const newCounterFactory = counterFactory();
console.log(newCounterFactory('increment'));  // 1
console.log(newCounterFactory('increment')); // 2
console.log(newCounterFactory('decrement')); // 1 */