/////// OPERATORS /////////

/*
1) Assignment operators
2) Arithmetic operators
3) Comparison operators
4) Logical operators
5) Unary operators (!, typeOf, -)
6) Ternary operator (a ? b : c)
*/



//// 1) assignment operators ////

//  = basic assignment
let num = 5;

//  += adds and reassigns
num += 1; // basic is now 6

//  -= subtracts and reassigns
num -= 1; // basic is 5 again

//  *= multiplies and reassigns
num *= 5; // basic is 25


//  /= divides and reassigns
num /= 5; // basic is 5 again

//  %= finds remainder and reassigns
num %= 2; // basic is 1, the remainder of the operation 5 / 2

//// 2) arithmetic operators ///

// + addition
let result = 2 + 2;  // -> 4

// - subtraction
result = 2 - 2;  // -> 0

// * multiply
result = 2 * 2;  // -> 4

// / divide
result = 2 / 2;  // -> 0

// % modulo
// divides and returns the remainder of the operation
result = 2 % 2 // -> 0

// ++ increment
num++ // increments by 1

// -- decrement 
num-- // decrements by 1

//// 3) comparison operators ////

// > greater than, >= greater than or equal
let compare = () => {return 5 > 5;} // false
let compare2 = () => {return 5 >= 5;} // true

// < less than, <= less than or equal
let compare3 = () => {return 5 < 5;} // false
let compare4 = () => {return 5 <= 5;} // true

// == loose equality; utilizes data type coercion
if (5 == "5") {return true;} // successful, returns true

// === strict quality; no data type coercion
if (5 === "5") {return true;} // unsuccessful, returns false


//// 4) logical operators ////

/* && logical and operator
both sides of the operation must be true for the code block to run */
    function comparison() {
        if (1 > 0 && 5 < 1) {
            return "that was true";
        } else {
            return "that was stupid";
        }
    } 
console.log(comparison()); // "that was stupid"

/* || logical or operator
 if the first operation is false, the subsequent conditions will be evaluated
 if the first operation is true, the subsequent conditions will be ignored */
    function comparison2() {
        if (1 > 0 || 5 < 1) {
            return "that was true";
        } else {
            return "that was stupid";
        }
    } 
    console.log(comparison2()); // "that was true" ... the lefthand condition was ignored
 

// ! logical not operator

//// 5) unary operators ////
/* takes a single operand */

//! LOGICAL NOT, BANG or INVERSE converts to boolean and inverts truthiness
        if (!true) {console.log("Not true");}
// typeof - TYPEOF returns string stating the type of the the value given
        console.log(typeof []); // "array"
// +  CONCATS
        console.log("me" + "you"); // "meyou"
      
// delete - DELETES index of an array or specific prop of an object
    let catLife = {
        nickname: "Koots",
        hobbies: ["sleeping", "chasing", "pouncing"],
        badHabits: ["biting", "scratching"]
    }
    delete catLife.badHabits;
    
    // badHabits property was removed and Koots is now a much more docile cat

// void - DISCARDS return value ... but why would you? 
void function adoptCat(cat) {
    return cat;
}
// console.log(adoptCat("Puck")); // -> function is not defined


//// 6) ternary operator ////
/* takes 3 operands
also known as a "conditional operand", it is the only one in JS that works on 3 values 

// format:
// (condition) ? (return this if true) : (return this if false) */

var crossingCat = "speckled";

crossingCat === "black" ? "bad luck" : "good luck"


