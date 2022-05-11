// Given two integers a and b, which can be positive or negative, find the sum of all the integers between and including them and return it. If the two numbers are equal return a or b.

// Note: a and b are not ordered!

// Examples (a, b) --> output (explanation)
// (1, 0) --> 1 (1 + 0 = 1)
// (1, 2) --> 3 (1 + 2 = 3)
// (0, 1) --> 1 (0 + 1 = 1)
// (1, 1) --> 1 (1 since both are same)
// (-1, 0) --> -1 (-1 + 0 = -1)
// (-1, 2) --> 2 (-1 + 0 + 1 + 2 = 2)

function getSum( a,b )
{
  let arr = [];
  let params =[a,b]
  let nums = params.sort((a,b) => a-b)
  nums[0] === nums[1] && a
      for(let i=nums[0]; i<=nums[1]; i++){
        arr.push(i)
     }
  return arr.reduce((a,b) => a+b,0)
}
