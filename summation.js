// Summation
// Write a program that finds the summation of every number from 1 to num. The number will always be a positive integer greater than 0.

// For example:

// summation(2) -> 3
// 1 + 2

// summation(8) -> 36

var summation = function (num) {
  // Code here
  let res =0;
  for (let i = 1; i<=num; i++){
     res +=i;
  }
  return res;
  
}
