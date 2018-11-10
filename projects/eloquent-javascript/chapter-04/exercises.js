////////////////////////////////////////////////////////////////////////////////
// range ///////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function range(start, end, step = 1) {
  let range = [];
  if (start < end && step > 0) {
    for (let i = start; i <= end; i += step) {
      range.push(i);
    }
    return range;
  } else if (end < start && step > 0) {
    for (let i = end; i >= start; i -= step) {
      range.push(i);
    }
  } else {
     return [];
  }
  console.log(range);
  return range;
}

// not sure if I accounted for everything, but it passes...

////////////////////////////////////////////////////////////////////////////////
// sum /////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function sum(array) {
  let incrementor = 0;
  for (let i = 0; i < array.length; i++) {
    if (typeof array[i] === "number") {
      incrementor += array[i];
    }
  }
  return incrementor;
}

// kinda proud of myself for remembering to check the type

////////////////////////////////////////////////////////////////////////////////
// reverseArray ////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function reverseArray(array) {
  let newArray = [];
  for (let i= 0; i < array.length; i++) {
    newArray.unshift(array[i]);
  }
  return newArray;
}

////////////////////////////////////////////////////////////////////////////////
// reverseArrayInPlace /////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function reverseArrayInPlace(array) {
  // loop through half of the array and flip the values with the other half

    for (let i = 0; i < (array.length / 2); i++) {
      var currentVal = array[i];
      array[i] = array[array.length - 1 - i];
      array[array.length - 1 - i] = currentVal;
    }
  return currentVal;
} 

////////////////////////////////////////////////////////////////////////////////
// arrayToList /////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function arrayToList(array) {
  let list = {};
  for (let i = array.length - 1; i > -1; i--){
    if (i === array.length - 1) {
      list.value = array[i];
      list.rest = null;
    } else {
      list = { value: array[i], rest: list };
      }
  }
  return list;
}

////////////////////////////////////////////////////////////////////////////////
// listToArray /////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function listToArray() {

}

////////////////////////////////////////////////////////////////////////////////
// prepend /////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
/*  takes an element and a list and creates a new list that adds the element to
the front of the input list */

function prepend() {

}

////////////////////////////////////////////////////////////////////////////////
// nth /////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
/* takes a list and a number and returns the element at the given position
in the list (with zero referring to the first element) or undefined when there is
no such element.

If you haven’t already, also write a recursive version of nth. */

function nth() {

}

////////////////////////////////////////////////////////////////////////////////
// deepEqual ///////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
/* The == operator compares objects by identity. But sometimes you’d prefer to
compare the values of their actual properties.

Write a function deepEqual that takes two values and returns true only if they
are the same value or are objects with the same properties, where the values of
the properties are equal when compared with a recursive call to deepEqual.

To find out whether values should be compared directly (use the === operator
for that) or have their properties compared, you can use the typeof operator.
If it produces "object" for both values, you should do a deep comparison. But
you have to take one silly exception into account: because of a historical
accident, typeof null also produces "object".

The Object.keys function will be useful when you need to go over the properties
of objects to compare them.

needs to be recursive to access the inner objects*/

function deepEqual(val1, val2) {
  if (val1 === val2) {
    return true;
  //} else if (val1 !== null || val2 !== null ||) {
    
  }
}

////////////////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

if ((typeof process !== 'undefined') &&
  (typeof process.versions.node !== 'undefined')) {
  module.exports = {
    range,
    sum,
    reverseArray,
    reverseArrayInPlace,
    arrayToList,
    listToArray,
    prepend,
    nth,
    deepEqual,
  };
};