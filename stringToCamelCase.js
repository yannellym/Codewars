// Complete the method/function so that it converts dash/underscore delimited words into camel casing. The first word within the output should be capitalized only if the original word was capitalized (known as Upper Camel Case, also often referred to as Pascal case).

// Examples
// "the-stealth-warrior" gets converted to "theStealthWarrior"
// "The_Stealth_Warrior" gets converted to "TheStealthWarrior"




function toCamelCase(str){
  if(str.length === 0){
   console.log("")
  }else{
    let splitted = str.replace(/[\-_]/g," ").split(" ")
    let string = splitted.map(word => word[0].toUpperCase()+ word.slice(1)).join("") 
    console.log( splitted[0][0] + string.slice(1) )
  }
}
  
toCamelCase("")
toCamelCase("the_stealth_warrior")
