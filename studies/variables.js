//////////// VARIABLES: ///////////////

/* 
 * 0. To hold things in memory during the life-cycle of a program, we can use variables.  Variables
 * are named identifiers that can point to values of a particular type, like a Number, String,
 * Boolean, Array, Object or another data-type.  Variables are called so because once created, we
 * can CHANGE the value (and type of value) to which they point.
 *
 * 1. To create a variable we use the keyword, var, followed by a name (id or alias) for our
 * variable.
 */
/////// 1. declaration and initialization (or assignment) //////
// There are 2 phases of using variables 


// 1. declaration //
var myName;

/*
 * At the declaration phase, the variable myName is undefined because we have NOT initialized
 * it to anything
 */
console.log(myName); // prints => undefined

// 2. initialization or assignment //
myName = 'john';
console.log(myName); // prints => john

// 3. re-assignment //
myName = 'bob';
console.log(myName); // prints => bob

// NOTE: We can assign and re-assign anything to a variable - we cannot do this with constants //
var myVariable = 1;
var myVariable = true;
myVariable = "someString";

////////////// 2. var, let, const ///////////////

////////// VAR /////////////
/* Scope: global & local
Reassign: Yes */

function varTest() {
  var x = 1;
  if (true) {
    var x = 2;  // same variable
    console.log(x);  // 2
  }
  console.log(x);  // 2 ... retains changes made in the child scope
}


////////// LET //////////////
/* limited scope to block/statement/expression in which it was used
Scope: block scope
Reassign: Yes */

function letTest() {
  let x = 1;
  if (true) {
    let x = 2;  // different variable
    console.log(x);  // 2
  }
  console.log(x);  // 1 ... the parent scope is unaffected by the reassignment that occured in the child scope
}


///////// CONST //////////////
/* points at the same value for as long as it lives
Scope: block scope
Reassign: No */

function constTest() {
  const x = 1;
  x++;
} // TypeError: Reassignment to a const variable

function constTest2() {
  const x = 1;
  if (true) {
    const x = 2;  
    console.log(x);  // 2
  }
  console.log(x);  // 1 ... if const keyword is used, the two const x variables exist in different worlds
}

function constTest3() {
  const x = 1;
  if (true) {
    x = 2;  // without using the keyword in the child scope, you will get TypeError: Reassignment to a const variable
    console.log(x); 
  }
}


////////////// 3. hoisting ///////////////////////

// variable names are hoisted to the top of the scope in which they are delcared, but the values are not
// variables have access to parent scopes but not child scopes
// function declarations are hoisted to the top of their scopes while function expressions work like other variables

 
 if (catName === undefined) {
     var catName = "Maddy";
 } 
 
 console.log(catName); // return "Maddy"
 // catName was available in global scope as undefined; has value of undefined until assigned