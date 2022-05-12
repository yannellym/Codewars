// Hide Kata Description
// There is an array with some numbers. All numbers are equal except for one. Try to find it!

// findUniq([ 1, 1, 1, 2, 1, 1 ]) === 2
// findUniq([ 0, 0, 0.55, 0, 0 ]) === 0.55
// It’s guaranteed that array contains at least 3 numbers.

// The tests contain some very huge arrays, so think about performance.

// This is the first kata in series:

// Find the unique number (this kata)
// Find the unique string
// Find The Unique
// FUNDAMENTALSALGORITHMSNUMBERSARRAYS
// Suggest kata description edits



function findUniq(arr) {
   // do magic
  let obj = {};
  let selectedNum = ""
  for(let i=0; i <arr.length; i++){
    let num= arr[i];
    obj[num] = obj[num] +1 || 1;
  }
    selectedNum = Object.entries(obj).find(num => num[1] === 1) 
  return Number(selectedNum[0])
}
