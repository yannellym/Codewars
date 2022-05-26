// Your job is to write a function which increments a string, to create a new string.

// If the string already ends with a number, the number should be incremented by 1.
// If the string does not end with a number. the number 1 should be appended to the new string.
// Examples:

// foo -> foo1

// foobar23 -> foobar24

// foo0042 -> foo0043

// foo9 -> foo10

// foo099 -> foo100

// Attention: If the number has leading zeros the amount of digits should be considered.


function incrementString (str) {
  // return incrementedString
 let string = str.slice(0,-1);
 let last = str.slice(-1).match(/[0-9]/); // see if the string has a number. If it doesn't, it'll return null
  
return last === null ? str + "1" : last != 9 ? (string + ( + last + 1)) : (incrementString(string) + "0")
  
  
  
}


incrementString("foobar000")
