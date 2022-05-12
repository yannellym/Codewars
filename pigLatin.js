// Move the first letter of each word to the end of it, then add "ay" to the end of the word. Leave punctuation marks untouched.

// Examples
// pigIt('Pig latin is cool'); // igPay atinlay siay oolcay
// pigIt('Hello world !');     // elloHay orldway !

function pigIt(str){
  let strC =  str.split(" ").map(word => word.match(/[a-zA-Z]+/g) && word.slice(1) + word[0] + "ay").join(" ") 
  let symbol = str.split(" ").filter(word => word == word.match(/[^a-zA-Z]+/g))   
  return strC + symbol
}
