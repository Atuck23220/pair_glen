/***********************************************************************
Write a recursive function called `sumArray` that takes an array of integers
and returns the value of all the integers added together. Your array may
include a mix of positive and negative integers!

Examples:

sumArray([1, 2, 3]); //  6
sumArray([0, 1, -3]); //  -2
sumArray([1, 2, 3, 4, 5]); // 15
***********************************************************************/

function sumArray(arr) {
  if (arr.length === 0) return null;
  debugger
  const first = arr[0];
  debugger
  const result = sumArray(arr.slice(1));
  debugger
  return first + result
 }
console.log(sumArray([1, 2, 3])); //  6
console.log(sumArray([0, 1, -3])); //  -2
console.log(sumArray([1, 2, 3, 4, 5])); // 15

// BRANDON's solution
// function sumArray(arr){
//   let num = num.pop();
//   if(arr.length === 0) return num;

//   return sumArray(arr) + num;
// }

// DEFAULT PARAM
// function sumArray(arr, sum = arr.length){

//   if(arr.length === 0) return num;

//   sum += arr.pop

//   return sumArray(arr, sum)
// }


// sumArr([1,2,3]) ==> sumArr([1,2]) + 3
//  sumArr([1,2]) ==> sumArr([1]) + 2
//   sumArr([1]) ==> 1
//  sumArr([1,2]) ==> 1+2 = 3
// sumArr([1,2,3]) ==> 3+3 ===> 6
/**************DO NOT MODIFY ANYTHING UNDER THIS LINE*****************/
try {
  module.exports = sumArray;
} catch (e) {
  module.exports = null;
}
