// Write a function that given two strings determines if they differ by exactly one character.

// The difference may consist of one charater being added, removed or replaced, in which case the function must return true. In all other cases it must return false.

// Examples:

// tower / towe -> true
// tower / towner -> true
// tower / bower -> true
// tower / token -> false
// tower / tower -> false

function oneCharDifference(s1, s2) {
  return (
    Math.max(s1.length, s2.length) -
      s2.split('').filter((x) => s1.includes(x)).length ===
    1
  )
}
