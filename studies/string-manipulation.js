/////// STRING MANIPULATION ///////

/* We can manipulate strings by CONCATENATION and with STRING METHODS */

// concatenation //

/* use + operator to concatenate (add) strings together */

var string = "most " + "terrible"; // returns "most terrible"

// string methods //

/* there are so many string methods with which you can manipulate string values */

// .charAt(index) will return whatever's at the index inside the parenthesis ()
var charAtIndexValue = string.charAt(0) 
console.log(charAtIndexValue); // returns "m" from the "most terrible" string

// .slice(start, end) returns the array between the index positions you specify inside the ()
console.log(string.slice(5, string.length)); // returns "terrible" 