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

// .search() method returns the position of the first occurrence of a specified text in a string
var str = "Please locate where 'locate' occurs!";
var pos = str.search("locate"); // 7

// .substring(start, end)  works like .slice(); returns the array between specified indices
console.log(string.substring(5, string.length)); // returns terrible

// .slice(start, end)  returns the array between the index positions you specify inside the ()
console.log(string.slice(5, string.length)); // returns "terrible" 

// .split(separator)  splits a string into an array
console.log(string.split(" ")); // returns ["most", "terrible"]

// .replace(this, with this) 
let threat = "I\'ll smash your skull";
var lesserThreat = threat.replace("skull", "orange grove");
console.log(lesserThreat); // "I'll smash your orange grove"

// .toUpperCase()
console.log(threat.toUpperCase()); // "I'LL SMASH YOUR SKULL"

// .toLowerCase()
console.log(threat.toLowerCase()); // "i'll smash your skull"

// .concat()
var text1 = "Hello";
var text2 = "World";
var text3 = text1.concat(" ", text2); // "Hello World"

// .trim() removes whitespace from both sides of a string 
var str = "       Hello World!        ";
console.log(str.trim()); // "Hello World!"