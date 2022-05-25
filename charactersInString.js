// The main idea is to count all the occurring characters in a string. If you have a string like aba, then the result should be {'a': 2, 'b': 1}.

// What if the string is empty? Then the result should be empty object literal, {}.

// Test Results:
// Count characters
// should give empty object literal if string is empty
// should get as a result two A characters
// should get as a result of two a characters and two b characters
// should get as a result of two a characters and two b characters, showing that the result order does not matter
// should check for adding varying number of characters, random number of a's and b's
// Completed in 3ms


function count (string) {  
  // The function code should be here
  let obj = {};
  for(let i= 0; i< string.length; i++){
    let char= string[i];
    obj[char] = obj[char] + 1 || 1
  }
   return obj;
}
