/***********************************************************************
Write a recursive function called `sumToN` that takes in a number and returns
the sum of all the numbers from 0 to that number. Return null for any input
number below 0.

Examples:

sumToN(5) // returns 15
sumToN(1)  // returns 1
sumToN(9)  // returns 45
sumToN(-8)  // returns null
***********************************************************************/


function sumToN(n) {
  let sum = 0;
  if(n === 0) return sum
  if(n < 0) return null;
  // if (n <= 0) return null;

  return sumToN(n - 1) + n;
  }

  // Brandon's solution
  // function sumToN(n) {
  //   if(n <= 0) return null;

  //   return sumToN(n - 1) + n;
  //   }

  // sumtoN(3) ==> func(2) + 3
  //  sumtoN(2) ==> func(1) + 2
  //   sumtoN(1) ==> func(0) + 1
  //    sumtoN(0) ==> return null
  //   sumtoN(1) ==> null + 1 = 1
  //  sumtoN(2) ==> 1 + 2 = 3
  // sumtoN(3) ==> 3 + 3 = 6 === RETURN VALUE 6

console.log(sumToN(5)) // returns 15
/**************DO NOT MODIFY ANYTHING UNDER THIS LINE*****************/
try {
  module.exports = sumToN;
} catch (e) {
  module.exports = null;
}
