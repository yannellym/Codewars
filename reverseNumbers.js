// Convert number to reversed array of digits
// Given a random non-negative number, you have to return the digits of this number within an array in reverse order.

// Example:
// 348597 => [7,9,5,8,4,3]
// 0 => [0]



// Better solution

function digitize(n) {
  return String(n).split('').map(Number).reverse()
}


// Other solution


function digitize(n) {
  let newStr= n.toString().split("").reverse("").join(", ")
  let numbers = newStr.split(",").map(num => Number(num))
  return numbers
 }

digitize(35231)
digitize(0)
