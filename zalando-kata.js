function solution(A) {
  let str = A.toString()
  let result = ''
  if (A >= 0 && A <= 100000000) {
    for (let i = 0; i < str.length; i++) {
      if (i % 2 == 0) {
        result += str[Math.floor(i / 2)]
      } else {
        result += str[str.length - Math.floor(i / 2 + 1)]
      }
    }
  }
  return result
}
solution('123456')
//DOM tree
function solution() {
  const tables = document.getElementsByTagName('table')

  // Map list of tables to list of number of <td> elements.
  const lengths = Array.from(tables).map(
    (table) => table.getElementsByTagName('td').length
  )

  // Get the max of the list of lengths and log to console.
  const max = Math.max(...lengths)
  return max
}
//trim words

function crop(message, maxLength) {
  // use meaningful names
  var result = message.trimEnd() // Use var for function scoped variable
  if (result.length > maxLength) {
    // space between if (  > and ) {
    const words = result.split(' ') // use const for variables that do not change
    do {
      words.pop()
      result = words.join(' ').trimEnd() // ensure no trailing spaces
      if (result.length <= maxLength) {
        // not repeating same join operation
        break
      }
    } while (words.length)
  }
  return result
}
function solution(message, K) {
  // write your code in JavaScript (Node.js 8.9.4)
  let result = message.length
  if (result < K) {
    return message
  } else {
    let words = message.split(' ')
    for (let i = words.length; i > 0; i--) {
      words.pop()
      if (words.join(' ').length <= K) {
        return words.join(' ')
      }
    }
  }
}
crop('Codility We test coders', 14)

console.clear()
