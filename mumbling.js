// This time no story, no theory. The examples below show you how to write function accum:

// Examples:
// accum("abcd") -> "A-Bb-Ccc-Dddd"
// accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
// accum("cwAt") -> "C-Ww-Aaa-Tttt"
// The parameter of accum is a string which includes only letters from a..z and A..Z.



function accum(s) { 
    let res = [];
    for(let i=0; i<s.length; i++){
      let block =  s.split("").map( letter => letter.toUpperCase() + s[i].toLowerCase().repeat(i+0) + "-").slice(i,i+1);
      res += block;
    }
    return res.slice(0, res.length-1)
  }
  
  
  accum("ZpglnRxqenU") ///"Z-Pp-Ggg-Llll-Nnnnn-Rrrrrr-Xxxxxxx-Qqqqqqqq-Eeeeeeeee-Nnnnnnnnnn-Uuuuuuuuuuu"


// better answer

function accum(s) {
  return s.split('').map((c, i) => (c.toUpperCase() + c.toLowerCase().repeat(i))).join('-');
}
