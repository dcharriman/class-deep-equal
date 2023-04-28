/**
 * areArraysEqual
 * 
 * my responsibility - compare Arrays element by element
 */

const areArraysEqual = param => arraySameSize(param) && elementsEqual(param)

const arraySameSize = ({x, y}) => x.length === y.length

const elementsEqual = ({x, y, compare}) => {
  const count = x.length

  for (let ix=0; ix<count; ix++) {
    if (!compare(x[ix], y[ix])) {
      return false
    }
  }

  return true
}


export default areArraysEqual
