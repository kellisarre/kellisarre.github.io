///////// PRIMITIVE DATATYPES //////////
// number // string // boolean // etc //
////////////////////////////////////////

/* Primitive datatypes are COPY BY VALUE.
When you transfer simple datatypes between variables, a copy of that value is made in memory. 
You can mutate one variable without affecting the other. */

var first = 10;
var second = first;

second += 5;

console.log(first); // still 10
console.log(second); // now 15

///// number ///////
/* A NUMBER is any positive or negative integer or decimal number (float) */

typeof(1);
typeof(-1);
typeof(.01); // all are "number"

//// string ///////
/* STRINGS are simple text data contained within single or double quotes. 
In strict comparison, "5" is not equal to 5 because strings values are not the same as number values. */

var string = "I like cats";
console.log(string); // prints "I like cats"

//// boolean //////
/* BOOLEANS are TRUE / FALSE values. 
Conditional statements () will evaluate to a Boolean and thus will only execute code when the statement evaluates to true. */

if (5 < 10) {
    console.log("true");
}

while (5 > 10) {
    console.log("Inconceivable!");
} // This console.log will not print because the condition was false!

//// undefined /////
/* default return value of unassigned variables */

var cats;
console.log(cats); // undefined

/////// null ///////
/* intentional absence of value */

var dogs = null;

/////// NaN ////////
/* NOT A NUMBER appears when a mathematical calculation cannot be represented by a meaningful number */

console.log("five" * 5);
console.log(0 / 0);
console.log(Infinity - Infinity);

///// Infinity & -Infinity /////
/* Greater than all numbers. Using these in computation might not yield meaningful result... */


//////// COMPLEX DATATYPES /////////
// arrays // objects // functions //
////////////////////////////////////

/* Complex datatypes are COPY BY REFERENCE 
Complex datatypes will NOT store a copy, but instead stores a reference
to where that data lives in the program's memory.  

You can think of it like giving someone the address to your house as opposed to 
handing over the whole house. Complex datatypes are a REFERENCE to value
somewhere in the program's memory. Thus, all references to the data point to the same
location. 
Two different variables with identical data will actually reference two different datasets! 
When two variables point to the same reference, changes to the original variable 
will be reflected also in associated variables. */

var myself = {
    name: "Kelli",
    pets: ["Elphaba the cat", "Kutusita the cat"],
    hobbies: ["coding", "drawing", "reading comics", "watching japanimation"],
    education: "bachelors"
}

var kelli = myself;

kelli.education = "coding bootcamp";

console.log(kelli);
console.log(myself); // both variables will reflect the change because they actually point to the very same object

//// array ////////
/* ARRAYS are ordered collections contained within [] square braces.
Can contain any primitive datatype, nested arrays, and even objects.
Array items are indexed by position, starting from 0. */

var myArray = [1, "cat", true, undefined];
// the index: ~ 0 ~~ 1 ~~~ 2 ~~~~~~ 3 ~~~

//////// object ////////////
/* OBJECTS are unordered collections of KEY-VALUE pairs contained by {} curly braces.*/

var myObject = {
    key: "value",
    key2: "value2",
    key3: "value3"
}

///////// function //////////
/* FUNCTIONS are re-usable code blocks that are executed when the FUNCTION NAME is typed. 
Functions are defined with PARAMETERS, which are essentially placeholders for whatever values
you will plug in when the function is CALLED/INVOKED.
The FUNCTION BODY between the {} curly braces will execute whenever the function is invoked.
Functions will return a single output based on what you're requesting in your RETURN statement. 
By default, a function will return undefined. */

// this is a typical function declaration. 
function functionName(parameter1, parameter2) {
 return parameter1 + parameter2;
}

// this is typically how you CALL or INVOKE a function
// replace the PARAMETERS with your ARGUMENTS
functionName(5, 10); // returns 15