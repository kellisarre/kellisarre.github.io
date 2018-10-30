///////// FUNCTIONS: //////////

/* FUNCTIONS are re-usable code blocks that are executed when the FUNCTION NAME is typed followed by (). 
Functions are defined with PARAMETERS, which are essentially placeholders for whatever ARGUMENTS
you will plug in when the function is CALLED/INVOKED. If arguments are not needed, leave () empty.
The FUNCTION BODY between the {} curly braces will execute whenever the function is invoked.
Functions will return a single output based on what you're requesting in your RETURN statement. 
By default, a function will return undefined. Therefore, if you forget to type a return statement,
the result of the function will be undefined. */

// this is a typical function declaration. note the FUNCTION keyword. 
// defining the function in this format will hoist it to the top of the window object and make it available everywhere in the code.
function functionName(parameter1, parameter2) {
 return parameter1 + parameter2;
}

// this is typically how you CALL or INVOKE a function
// replace the PARAMETERS with your ARGUMENTS
functionName(5, 10); // returns 15

// you can also write a function in FUNCTION EXPRESSION format 
// this ASSIGNS a function to a VARIABLE
// invocation works the same way, but it changes the overall availability of this function in the code
// it now has the same scope rules that a var, let, or const does

var anotherFunctionName = function(parameter1, parameter2) {
    return parameter1 + parameter2
}

anotherFunctionName(2,2); // returns 4

// you can even write a function in ARROW NOTATION without the RETURN keyword for single-line computations
var yetAnotherFunctionName = (parameter1, parameter2) =>  parameter1 + parameter2;

yetAnotherFunctionName(1,2); // returns 3

// CLOSURE is "a combination of a function and the lexical environment in which that function was created" (MDN)
// nested functions can use parent function's variables even after parent function has returned

function parentFunc() {
    var parentVar = 1;
    function childFunc () { // the inner function is a closure function
        var childVar = 2;
        return parentVar + childVar; // nested childFunc can access parent's variables
    }
}

// SCOPE in functions works upward; child functions can use variables in the parent function
// however, parent function cannot use child function's variables

function parentFunc2() {
    var parentVar = 1;
    // console.log(childVar); // Reference Error: childVar is not defined
    function childFunc () {
        var childVar = 2;
        return parentVar + childVar; // 3
    }
}