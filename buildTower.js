// Build Tower
// Build a pyramid-shaped tower given a positive integer number of floors. A tower block is represented with "*" character.

// For example, a tower with 3 floors looks like this:

// [
//   "  *  ",
//   " *** ", 
//   "*****"
// ]
// And a tower with 6 floors looks like this:

// [
//   "     *     ", 
//   "    ***    ", 
//   "   *****   ", 
//   "  *******  ", 
//   " ********* ", 
//   "***********"
// ] 



function towerBuilder(nFloors) {
 // build here
   let arr = [];
  for(let i=1; i<=nFloors; i++){
 
    let res = "";
     res += " ".repeat(nFloors - i)
     res += "*".repeat(i *2 -1)
     res += " ".repeat(nFloors - i)
  arr.push(res)
  }
  return arr
}
