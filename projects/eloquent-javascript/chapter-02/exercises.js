////////////////////////////////////////////////////////////////////////////////
// triangles ///////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function triangles(val) {
  let result = "";
  for (let i = 0; i < val; i++) {
    result += "#";
    console.log(result);
  }
}


////////////////////////////////////////////////////////////////////////////////
// fizzBuzz ////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function fizzBuzz(beginNum, endingNum) {
    for (let num = beginNum; num <= endingNum; num++) {
      if (num%15 === 0){
        console.log("fizzbuzz");
      } else if (num%3 === 0) {
        console.log("fizz");
      } else if (num%5 === 0) {
        console.log("buzz");
      } else {
        console.log(num);
      }
    }
}

////////////////////////////////////////////////////////////////////////////////
// drawChessboard //////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

/*Write a program that creates a string that represents an 8×8 grid, using
newline characters to separate lines. At each position of the grid there is
either a space or a "#" character. The characters should form a chessboard.

Passing this string to console.log should show something like this:

 # # # #
# # # # 
 # # # #
# # # # 
 # # # #
# # # # 
 # # # #
# # # #
When you have a program that generates this pattern, define a binding size = 8 
and change the program so that it works for any size, outputting a grid of the
given width and height.*/

function drawChessboard(boardSize) {
  // let board = "";
  
  // for (let i = 0; i < boardSize; i++) {
  //   if (board[i - 1] === "#") {
  //     board += " ";
  //   } else {
  //   board += "#";
  //   }
  // }
  // console.log(board);
  // // start oddLineNum string with a space
  
  // // start evenLineNum string with a #
  // // join together with newline /n between them
}


////////////////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

if ((typeof process !== 'undefined') &&
  (typeof process.versions.node !== 'undefined')) {
  module.exports = {
    triangles,
    fizzBuzz,
    drawChessboard,
  };
}
