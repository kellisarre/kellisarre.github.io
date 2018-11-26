///////// CONTROL FLOW //////////

/* 
1) if
2) else-if
3) else
4) switch
*/

///// 1) if statement /////
/* will execute code in {} only if conditional statement inside () is true 

structure:
if (condition is true) {do this;} */


///// 2) else-if statement /////
/* OPTIONAL addition to an if statement chain
which will execute code only when the if statement condition is false 
and the else-if statement condition is true 

structure:
if (condition is true) {do this;}
else if (this condition is true) {do this instead;} */


///// 3) else statement /////
/* a default code block which runs when the IF and ELSE-IF conditions are not met 

structure: 
if (condition is true) {do this;}
else {default to this;} 

example: */
var color = "grey";

if (color === "red") {console.log("red");}
else if (color === "blue") {console.log("blue");}
else {console.log("that's a rather boring colour...");}


//// 4) switch statement //// 
/* decides what case to run based on the expression evaluated in the () 
code will stop when it encounters BREAK statement */

var cat = "black";

    switch (cat) {
        case "calico":
            console.log("Your name shall be Patches!");
            break;
        case "tuxedo":
        case "tabby":
            console.log("Your name shall be Shrimp Boots!");
            break;
        case "black":
            console.log("Your name shall be Jiji!");
            break;
        default:
            console.log("We didn't adopt any of the cats...");
    }

// Running this code will console.log "Your name shall be Jiji!" because variable cat is set to "black"