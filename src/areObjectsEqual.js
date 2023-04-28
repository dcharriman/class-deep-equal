/**
 * areObjectsEqual
 * 
 * my responsibility - compare Objects property by property
 */

const areObjectsEqual = param =>objectSameSize(param) && propertiesEqual(param)

const objectSameSize =  ({x, y}) => Object.keys(x).length === Object.keys(y).length

const propertiesEqual = ({x, y, compare}) => {
  const xKeys = Object.keys(x)
  const count = xKeys.length

  for (let ix=0; ix<count; ix++) {
    const key = xKeys[ix]
    if (!compare(x[key], y[key])) {
      return false
    }
  }

  return true
}

export default areObjectsEqual

