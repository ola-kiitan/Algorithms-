// This time no story, no theory. The examples below show you how to write function accum:

// Examples:
// accum("abcd") -> "A-Bb-Ccc-Dddd"
// accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
// accum("cwAt") -> "C-Ww-Aaa-Tttt"
// The parameter of accum is a string which includes only letters from a..z and A..Z.
function accum(s) {
  let newStr = ''
  let curSt = s.toUpperCase()
  console.log(curSt)
  for (let i = 0; i < curSt.length; i++) {
    newStr = newStr + '-' + curSt[i] + curSt[i].toLowerCase().repeat(i)
  }
  return newStr.slice(1)
}
