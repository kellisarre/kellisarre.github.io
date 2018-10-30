/////////// LOOPS: //////////////
/* Use a loop to iterate through a set of data. 

Types of loops:
1) while loop - to execute a code block to run while a condition is true
2) for loop - iterate through arrays
3) for in loop - iterate through objects */

/// while loop ///
/* will execute for as long as the specified condition is true.
make sure to set an incrementor. */

var array = [1, 2, 3, 4, 5, 6];
var i = 0;

while (i < 5) {
    i++;
    console.log("The number is " + i);
}

/* similar to a do while loop */
do {
    i++;
}
while (i < 5);

/// for loop ///
/* used to iterate over arrays. set up a (STARTING INDEX; CONDITION; and INCREMENT). */

for (i = 0; i < 5; i++) {
    console.log("The number is " + i)
}

/* backwards loop that starts from end of array */
function testing() {
  for (i = array.length -1; i >= 0; i--) {
    console.log("Prepared to launch in " + i);
  }
}

testing();

/// for In loop ///
/* for looping through objects */
var testObj = {
    key1: "value1",
    key2: "value2"
};

for (var key in testObj) {
    console.log(testObj[key]);
}




