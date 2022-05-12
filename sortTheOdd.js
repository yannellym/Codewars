// Task
// You will be given an array of numbers. You have to sort the odd numbers in ascending order while leaving the even numbers at their original positions.

// Examples
// [7, 1]  =>  [1, 7]
// [5, 8, 6, 3, 4]  =>  [3, 8, 6, 5, 4]
// [9, 8, 7, 6, 5, 4, 3, 2, 1, 0]  =>  [1, 8, 3, 6, 5, 4, 7, 2, 9, 0]


function sortArray(array) {
   const odd = array.filter((x) => x % 2) // this will filter out those who have a remainder of 1. 1 is a thruthy value so it will return those. 

 console.log(  array.map((x) => x % 2 ? odd.shift() : x)  )//map through the original array and if its a truthy value, it will return the number that matches from the odd array and place it here. If not, then it will place the number with the falsy value.
}

sortArray([5, 3, 2, 8, 1, 4]) // [1, 3, 2, 8, 5, 4]);
