// To participate in a prize draw each one gives his/her firstname.

// Each letter of a firstname has a value which is its rank in the English alphabet. A and a have rank 1, B and b rank 2 and so on.

// The length of the firstname is added to the sum of these ranks hence a number som.

// An array of random weights is linked to the firstnames and each som is multiplied by its corresponding weight to get what they call a winning number.

// Task:
// parameters: st a string of firstnames, we an array of weights, n a rank

// return: the firstname of the participant whose rank is n (ranks are numbered from 1)

//solution
const rank = (st, we, n) => {
  if (st.length === 0) {
    return 'No participants'
  }
  if (st.split(',').length < n) {
    return 'Not enough participants'
  }

  const names = st.split(',')
  const weightedNameList = names.map((name, i) => {
    return [
      name,
      (name.length +
        name
          .toLowerCase()
          .split('')
          .reduce((acc, cur) => acc + cur.charCodeAt(0) - 96, 0)) *
        we[i],
    ]
  })

  weightedNameList.sort((a, b) => {
    if (b[1] === a[1]) {
      return a[0].localeCompare(b[0])
    }
    return b[1] - a[1]
  })

  return weightedNameList[n - 1][0]
}
