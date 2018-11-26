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
    // if we are on the last loop iteration, do this format
    if (i === array.length - 1) {
      list.value = array[i];
      list.rest = null;
    // else use this format to nest another object
    } else {
      list = { value: array[i], rest: list };
    }
  }
  return list;
}

////////////////////////////////////////////////////////////////////////////////
// listToArray /////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
// turns nested objects of a list into an array
function listToArray(list) {
  let result = [];
  
  // the innermost object has list set to null, which will break the loop
  while (list) {
    result.push(list.value);
    list = list.rest;
  }
  
  return result;
}

////////////////////////////////////////////////////////////////////////////////
// prepend /////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
/*  takes an element and a list and creates a new list that adds the element to
the front of the input list */

function prepend(value, list) {
  return { value, rest: list };
}

////////////////////////////////////////////////////////////////////////////////
// nth /////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
/* If you haven’t already, also write a recursive version of nth.

Takes a list and a number and returns the element at the given position
in the list (with zero referring to the first element) or undefined when there is
no such element. */


function nth(list, n) {
  if (!list)
    return undefined;
  else if (n == 0)
    return list.value;
  else
    return nth(list.rest, n - 1);
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
of objects to compare them. */

// Needs to be recursive to access the inner objects, but I seem to be exceeding the callstack
// Don't really understand the directions 

// Oh, I get it. You have to do deep comparisons for objects because of copy-by-reference.
// Identical objects, when compared to one another, will return false if they are not
// referencing the same object in memory.

function deepEqual(val1, val2) {
  // if values are the same reference, return true
  if (val1 === val2) return true;
  // if the values are not objects / are arrays / are null, a deep comparison is not needed
  if ((typeof val1 !== "object" || val1 === null) || (typeof val2 !== "object" || val2 === null)) {
    return false;
  }
  // comparing an array of both objects' keys to see if they are the same
  let keysin1 = 0, keysin2 = 0;
  
  for (let key in val1) {keysin1 += 1;}
  for (let key in val2) {
    keysin2 += 1;
    
    if (!(key in val1) || !deepEqual(val1[key], val2[key])) {return false;}
  }
  
  return keysin1 === keysin2;
  
  // if (valkeys1.length === valkeys2.length) { 
  //   for (let key in val2) { 
  //     if (!(key in val1) || !deepEqual(val1[key], val2[key])) {
  //       console.log(key);
  //       return false;
  //     }
  //   }
  // }
  // //return false;
  // return valkeys1 === valkeys2;
} // return true only if the two args are the same value or are objects with the same properties


/* Use Object.keys to go over the properties. You need to test whether both objects
have the same set of property names and whether those properties have identical values.
One way to do that is to ensure that both objects have the same number of properties 
(the lengths of the property lists are the same). And then, when looping over one of 
the object’s properties to compare them, always first make sure the other actually has 
property by that name. If they have the same number of properties and all properties 
in one also exist in the other, they have the same set of property names.

Returning the correct value from the function is best done by immediately returning
false when a mismatch is found and returning true at the end of the function. */

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
