// /////////////////////////////////////////////////////////////////////////////
// flatten /////////////////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////

function flatten(arrays) {
  return arrays.reduce(function(accumulator, element) {
    //console.log(array.concat(element));
    return accumulator.concat(element)
  }, []);

}

// /////////////////////////////////////////////////////////////////////////////
// loop ////////////////////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////
/* Write a higher-order function loop that provides something like a for loop 
statement. It takes a value, a test function, an update function, and a body 
function. Each iteration, it first runs the test function on the current loop 
value and stops if that returns false. Then it calls the body function, giving 
it the current value. Finally, it calls the update function to create a new value 
and starts from the beginning.

When defining the function, you can use a regular loop to do the actual looping*/

function loop(value, test, update, body) {
  for (let i = 0; i < value.length; i++) {
    if (test(value[i])) {
      body(value[i]);
      return update(value[i]);
    }
  }
}

// /////////////////////////////////////////////////////////////////////////////
// every ///////////////////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////
/* Analogous to the some method, arrays also have an every method. This one 
returns true when the given function returns true for every element in the 
array. In a way, some is a version of the || operator that acts on arrays, 
and every is like the && operator.

Implement every as a function that takes an array and a predicate function as
parameters. Write two versions, one using a loop and one using the some method.*/

function every(array, test) {

}

// /////////////////////////////////////////////////////////////////////////////
// dominantDirection ///////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////
// use helper functions in chap if needed & global var of objects SCRIPTS
function dominantDirection(text) {

}

// /////////////////////////////////////////////////////////////////////////////
//  //////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////

if ((typeof process !== 'undefined') &&
  (typeof process.versions.node !== 'undefined')) {
  module.exports = {
    flatten,
    loop,
    every,
    dominantDirection,
  };
};
