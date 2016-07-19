'use strict'
const stringToArray = function() {
  let l = this.length
  let i = 0
  let a = []
  for (;i<l;i++) {
   a[i] = this[i]
  }
  return a
}

function ana(letters) {
  letters = stringToArray.call(letters)
  let l = letters.length
  let possibilities = Math.pow(2, l)
  let results = []
  let mask = 0

  for(;mask < possibilities; mask++) {
    let result = []
    let i = l

    while(i--) {
      if((mask & (1 << i)) !== 0) {
        result.push(letters[i])
      }
    }

    if(result.length <= l)
      results.push(result)
  }

  return results
}

module.exports = ana
