/**
 * areSetsEqual
 * 
 * my responsibility - compare sets entry by entry
 */

const areSetsEqual = param => setSameSize(param) && entriesEqual(param)

const setSameSize = ({x, y}) => x.size === y.size

const entriesEqual = ({x, y, compare}) => {
  const xArray = [...x]
  const yArray = [...y]
  const count = xArray.length

  for (let ix=0; ix<count; ix++) {
    if (!compare(xArray[ix], yArray[ix])) {
      return false
    }
  }

  return true
}

export default areSetsEqual
