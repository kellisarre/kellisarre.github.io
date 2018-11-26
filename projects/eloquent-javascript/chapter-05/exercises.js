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
  while(test(value)) {
    body(value);
    value = update(value);
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
    // loop through array elements and return false if loop hits a falsey
      for (let i = 0; i < array.length; i++) {
        if (!test(array[i], i, array)) {
            return false;
        }
      }
      return true;
}

// /////////////////////////////////////////////////////////////////////////////
// dominantDirection ///////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////
// use helper functions in chap if needed & global var of objects SCRIPTS
function dominantDirection(text) {
  let scripts = countBy(text, char => {
    let script = characterScript(char.codePointAt(0));
    return script ? script.direction : "none";}).filter(({direction}) => direction != "none");

  if (scripts.length === 0) {
    return 'ltr;'
  }
  
  return scripts.reduce((init, curr) => init.count >= curr.count? init.name : curr.name);
}


// /// HELPERS YAY /// 
// function countBy(items, groupName) {
//   let counts = [];
//   for (let item of items) {
//     let name = groupName(item);
//     let known = counts.findIndex(c => c.name == name);
//     if (known == -1) {
//       counts.push({name, count: 1});
//     } else {
//       counts[known].count++;
//     }
//   }
//   return counts;
// }

// console.log(countBy([1, 2, 3, 4, 5], n => n > 2));
// → 

/* One use of the data set would be figuring out what script a piece of text is
using. Let’s go through a program that does this.

Remember that each script has an array of character code ranges associated with it.
So given a character code, we could use a function like this to find the 
corresponding script (if any):*/

// function characterScript(code) {
//   for (let script of SCRIPTS) {
//     if (script.ranges.some(([from, to]) => {
//       return code >= from && code < to;
//     })) {
//       return script;
//     }
//   }
//   return null;
// }

// console.log(characterScript(121));
// → {name: "Latin", …}



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
