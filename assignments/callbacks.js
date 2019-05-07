// Create a higher order function and invoke the callback function to test your work. You have been provided an example of a problem and a solution to see how this works with our items array.  Study both the problem and the solution to figure out the rest of the problems.

const items = ['Pencil', 'Notebook', 'yo-yo', 'Gum'];


/* 
  //Given this problem: 
  
  function firstItem(arr, cb) {
    // firstItem passes the first item of the given array to the callback function.
  }

  // Potential Solution:

  // Higher order function using "cb" as the call back
  function firstItem(arr, cb) {
    return cb(arr[0]);
  }

  // Function invocation 
  firstItem(items, function(first) {
    console.log(first)
  }); */




function getLength(arr, cb) {
  // getLength passes the length of the array into the callback.
  return cb(arr);
}

/* version one */

/* 
function length(arr) {
  console.log(arr.length);
}

getLength(items, length); */

/* version two */

getLength(items, function length(arr) {
  console.log(arr.length);
});






/* ---------------------------------------------------------------- */

function last(arr, cb) {
  // last passes the last item of the array into the callback.
  return cb(arr);
}

/* version one */

/* function lastItem(arr) {
  console.log(arr[arr.length -1]);
}

last(items, lastItem); */

/* version two */

last(items, function lastItem(arr) {
  console.log(arr[arr.length -1]);
});


/* ---------------------------------------------------------------- */

function sumNums(x, y, cb) {
  // sumNums adds two numbers (x, y) and passes the result to the callback.
  return cb(x, y);
}

/* There are some problems with this version!
function sum(x,y){
  return cb(x + y);
}

sumNums(2, 3, sum);
 */

 /* version two */

sumNums(2, 3, function(x, y) {
  console.log(x + y)
});

/* ---------------------------------------------------------------- */

function multiplyNums(x, y, cb) {
  // multiplyNums multiplies two numbers and passes the result to the callback.
  return cb(x, y);
}

/*  There are some problems with this version!
function multiply(x, y){
  console.log(x * y);
}

multiplyNums(2, 3, multiply(x, y));
 */

/* version two */

multiplyNums(2, 3, function(x, y) {
  console.log(x * y)
});

/* ---------------------------------------------------------------- */

function contains(item, list, cb) {
  // contains checks if an item is present inside of the given array/list.
  // Pass true to the callback if it is, otherwise pass false.
  return cb(item, list)
}

/* version one */

/* function containCheck(item, list) {
  console.log(list.includes(item));
}

contains("Pencil", items, containCheck); */

/* version two */

contains("Pencil", items, function(item, list) {
  console.log(list.includes(item));
});


/* STRETCH PROBLEM */

function removeDuplicates(array, cb) {
  // removeDuplicates removes all duplicate values from the given array.
  // Pass the duplicate free array to the callback function.
  // Do not mutate the original array.
}
